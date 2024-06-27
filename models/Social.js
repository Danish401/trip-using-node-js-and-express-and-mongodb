const mongoose = require("mongoose");

const socialSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  tripId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trip",
    required: true,
  },
  socialMedia: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: false,
  },
  sharedAt: {
    type: Date,
    default: Date.now,
  },
});

const Social = mongoose.model("Social", socialSchema);

module.exports = Social;
