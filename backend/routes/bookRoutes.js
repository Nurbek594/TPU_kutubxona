const express = require("express");
const router = express.Router();

const {
  getBooks,
  getBookBySlug,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

const { protectAdmin } = require("../middleware/authMiddleware");

router.get("/", getBooks);
router.get("/:slug", getBookBySlug);

router.post("/", protectAdmin, createBook);
router.put("/:id", protectAdmin, updateBook);
router.delete("/:id", protectAdmin, deleteBook);

module.exports = router;