const Reservation = require("../models/Reservation");
const Book = require("../models/Book");

const createReservation = async (req, res) => {
  try {
    const { bookId, fullName, phone, studentId } = req.body;

    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({ message: "Kitob topilmadi" });
    }

    const reservation = await Reservation.create({
      book: book._id,
      bookTitle: book.title,
      fullName,
      phone,
      studentId,
    });

    res.status(201).json({
      message: "Kitob muvaffaqiyatli bron qilindi",
      reservation,
    });
  } catch (error) {
    res.status(500).json({ message: "Bron qilishda xatolik yuz berdi" });
  }
};

const getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find()
      .populate("book")
      .sort({ createdAt: -1 });

    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ message: "Bronlarni olishda xatolik yuz berdi" });
  }
};

const updateReservationStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const reservation = await Reservation.findById(req.params.id);

    if (!reservation) {
      return res.status(404).json({ message: "Bron topilmadi" });
    }

    reservation.status = status;
    const updatedReservation = await reservation.save();

    res.status(200).json(updatedReservation);
  } catch (error) {
    res.status(500).json({ message: "Bron statusini yangilashda xatolik yuz berdi" });
  }
};

const deleteReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);

    if (!reservation) {
      return res.status(404).json({ message: "Bron topilmadi" });
    }

    await reservation.deleteOne();

    res.status(200).json({ message: "Bron o‘chirildi" });
  } catch (error) {
    res.status(500).json({ message: "Bronni o‘chirishda xatolik yuz berdi" });
  }
};

module.exports = {
  createReservation,
  getReservations,
  updateReservationStatus,
  deleteReservation,
};