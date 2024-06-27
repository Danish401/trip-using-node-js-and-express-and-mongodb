const Review = require("../models/Review");

async function submitReview(req, res) {
  try {
    const { userId, destination, rating, comment } = req.body;
    const review = await Review.create({
      userId,
      destination,
      rating,
      comment,
      createAt: new Date(),
    });
    res.status(201).json({ review });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
}

module.exports = { submitReview };
