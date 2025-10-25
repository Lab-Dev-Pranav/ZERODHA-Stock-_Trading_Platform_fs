const fs = require('fs');
const path = require('path');
// simple recursive file collector to avoid extra deps
function collectFiles(dir, exts){
  let res = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for(const e of entries){
    const p = path.join(dir, e.name);
    if(e.isDirectory()) res = res.concat(collectFiles(p, exts));
    else if(exts.includes(path.extname(e.name))) res.push(p);
  }
  return res;
}
const root = path.resolve(process.cwd(), 'dashboard', 'src');
const files = collectFiles(root, ['.js', '.jsx']);
let issues = [];
files.forEach(f => {
  const src = fs.readFileSync(f, 'utf8');
  const re = /import\s+[^'\"]+['\"](\.\.\/|\.\/)[^'\"]+['\"]/g;
  let m;
  while (m = re.exec(src)) {
    const imp = m[0].match(/['\"](.*?)['\"]/)[1];
    if (!imp.startsWith('.')) continue;
    const basePath = path.dirname(f);
    let target = '';
    ['.js', '.jsx', '.ts', '.tsx', '/index.js', '/index.jsx'].some(ext => {
      const t = path.resolve(basePath, imp + ext);
      if (fs.existsSync(t)) { target = t; return true; }
      const t2 = path.resolve(basePath, imp);
      if (fs.existsSync(t2)) { target = t2; return true; }
      return false;
    });
    if (!target) { issues.push({ file: f, import: imp, error: 'target not found' }); continue; }
    const parts = path.relative(process.cwd(), target).split(path.sep);
    let cur = process.cwd();
    let mismatch = false;
    for (const p of parts) {
      const dir = fs.readdirSync(cur);
      if (!dir.includes(p)) { mismatch = true; break; }
      cur = path.join(cur, p);
    }
    if (mismatch) issues.push({ file: f, import: imp, error: 'case mismatch or missing', resolved: target });
  }
});
if (issues.length) {
  console.log('ISSUES:\n', JSON.stringify(issues, null, 2));
  process.exit(2);
} else {
  console.log('No issues found');
}
