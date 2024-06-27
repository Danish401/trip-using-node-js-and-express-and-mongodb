const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type:String,
    default: "Pending",
  },
});

const Payment = mongoose.model("Payment", paymentSchema);
module.exports = Payment;
