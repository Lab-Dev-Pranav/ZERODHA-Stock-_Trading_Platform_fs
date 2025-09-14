const { model } = require("mongoose");

const { OrderSchema } = require("../schema/OrderSchema");

const OrderModel = new model("watchlist", OrderSchema);

module.exports = { OrderModel };
