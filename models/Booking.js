const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    reg: "User",
    required: true,
  },
  tripId: {
    type: mongoose.Schema.Types.ObjectId,
    reg: "Trip",
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
