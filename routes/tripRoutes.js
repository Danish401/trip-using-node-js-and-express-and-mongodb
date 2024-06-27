const express = require("express");
const {
  searchDestinations,
  createItinerary,
} = require("../controllers/tripController");
const { authenticate } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/destinations", searchDestinations);
router.post("/itinerary", authenticate, createItinerary);

module.exports = router;
