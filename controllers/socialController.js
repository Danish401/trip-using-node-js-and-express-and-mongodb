const Social = require("../models/Social");

async function shareTrip(req, res) {
  try {
    const { userId, tripId, socialMedia, message } = req.body;
    const share = await Social.create({
      userId,
      tripId,
      socialMedia,
      message,
    });
    res.status(200).json({
      message: "Trip shared successfully",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
}
module.exports = { shareTrip };
