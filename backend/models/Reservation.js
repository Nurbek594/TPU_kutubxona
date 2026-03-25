const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
  {
    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },
    bookTitle: {
      type: String,
      required: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    studentId: {
      type: String,
      required: true,
      trim: true,
    },
    reservedAt: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "returned", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Reservation", reservationSchema);