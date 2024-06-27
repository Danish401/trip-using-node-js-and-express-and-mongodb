const Notification = require("../models/Notification");

async function sendNotification(req, res) {
  try {
    const { userId, message } = req.body;

    const notification = await Notification.create({
      userId,
      message,
      sentAt: new Date(),
    });
    res.status(201).json({ notification });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
}

module.exports = { sendNotification };
