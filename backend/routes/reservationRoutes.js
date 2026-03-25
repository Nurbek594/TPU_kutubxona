const express = require("express");
const router = express.Router();

const {
  createReservation,
  getReservations,
  updateReservationStatus,
  deleteReservation,
} = require("../controllers/reservationController");

const { protectAdmin } = require("../middleware/authMiddleware");

router.post("/", createReservation);
router.get("/", protectAdmin, getReservations);
router.put("/:id", protectAdmin, updateReservationStatus);
router.delete("/:id", protectAdmin, deleteReservation);

module.exports = router;