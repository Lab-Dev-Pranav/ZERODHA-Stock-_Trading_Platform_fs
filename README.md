# 📈 Zerodha Stock Trading Platform (Clone)

A full-stack clone of [Zerodha](https://zerodha.com), built for learning purposes.  
This project demonstrates user authentication, order management, live market data simulation, and a trading dashboard.

---

## 🛠️ Tech Stack

### Frontend
- ⚡ [React](https://react.dev/) with [Vite](https://vitejs.dev/)  
- 🎨 TailwindCSS for styling  
- 🔄 Axios for API calls  

### Dashboard
- ⚡ [React](https://react.dev/) with [Vite](https://vitejs.dev/)  
- 📊 Recharts (for graphs & charts)  
- 🎨 TailwindCSS  

### Backend
- 🟢 Node.js + Express  
- 🗄️ MongoDB with Mongoose  
- 🔐 Passport.js (session-based auth) / JWT (In Progress)  
- 🌍 REST API  

### Tools
- Git & GitHub  
- Postman / Thunder Client for API testing  

---

## 📂 Project Structure

zerodha-clone/ <br>
│── backend/ # Express + MongoDB server<br>
│ ├── model/ # Database models<br>
│ ├── schema/ # Validation schemas<br>
│ ├── app.js # Main server file<br>
│ └── .env # Environment variables (ignored in git)<br>
│<br>
│── frontend/ # React + Vite frontend<br>
│ ├── src/ # React components & pages<br>
│ ├── public/ # Static assets<br>
│ └── vite.config.js<br>
│<br>
│── dashboard/ # Dashboard (React)<br>
│ ├── src/ # Dashboard components<br>
│ └── vite.config.js<br>
│<br>
└── README.md # Project documentation<br>

yaml
Copy code

---

## 🚀 Features

- 🔑 User Signup & Login (session-based authentication)  
- 📊 Dashboard for portfolio, holdings, and positions  
- 💰 Place & Manage Buy/Sell Orders  
- 📡 Live market data simulation (WebSocket or polling)  
- ⚡ Responsive & clean UI  

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repo
```bash
git clone https://github.com/your-username/zerodha-clone.git
cd zerodha-clone
2️⃣ Backend setup
bash
Copy code
cd backend
npm install
Create a .env file in backend/:

ini
Copy code
MONGO_URI=your_mongodb_uri
SESSION_SECRET=your_secret_key
PORT=5000
Run the backend:

bash
Copy code
npm start
3️⃣ Frontend setup
bash
Copy code
cd frontend
npm install
npm run dev
4️⃣ Dashboard setup
bash
Copy code
cd dashboard
npm install
npm run dev
📸 Screenshots
(Add screenshots of your landing page, dashboard, login flow)

📝 License
This project is for educational purposes only.
It is not intended for production and has no affiliation with Zerodha.

👨‍💻 Author
_dev.pranav_
