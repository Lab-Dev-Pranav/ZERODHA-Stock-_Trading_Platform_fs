const { model } = require("mongoose");

const { PositionsSchema } = require("../schema/PositionsSchema");

const PositionsModle = new model("position", PositionsSchema);

module.exports = { PositionsModle };
