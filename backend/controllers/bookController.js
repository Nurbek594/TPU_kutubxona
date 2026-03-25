const Book = require("../models/Book");

const createSlug = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

const getBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Kitoblarni olishda xatolik yuz berdi" });
  }
};

const getBookBySlug = async (req, res) => {
  try {
    const book = await Book.findOne({ slug: req.params.slug });

    if (!book) {
      return res.status(404).json({ message: "Kitob topilmadi" });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Kitobni olishda xatolik yuz berdi" });
  }
};

const createBook = async (req, res) => {
  try {
    const {
      title,
      author,
      category,
      year,
      pages,
      language,
      rating,
      available,
      image,
      pdf,
      description,
      fullDescription,
    } = req.body;

    const slug = createSlug(title);

    const existingBook = await Book.findOne({ slug });
    if (existingBook) {
      return res.status(400).json({ message: "Bu nomdagi kitob allaqachon mavjud" });
    }

    const newBook = await Book.create({
      slug,
      title,
      author,
      category,
      year,
      pages,
      language,
      rating,
      available,
      image,
      pdf,
      description,
      fullDescription,
    });

    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: "Kitob qo‘shishda xatolik yuz berdi" });
  }
};

const updateBook = async (req, res) => {
  try {
    const {
      title,
      author,
      category,
      year,
      pages,
      language,
      rating,
      available,
      image,
      pdf,
      description,
      fullDescription,
    } = req.body;

    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Kitob topilmadi" });
    }

    const slug = createSlug(title);

    const duplicateBook = await Book.findOne({
      slug,
      _id: { $ne: req.params.id },
    });

    if (duplicateBook) {
      return res.status(400).json({ message: "Bu nomdagi boshqa kitob mavjud" });
    }

    book.slug = slug;
    book.title = title;
    book.author = author;
    book.category = category;
    book.year = year;
    book.pages = pages;
    book.language = language;
    book.rating = rating;
    book.available = available;
    book.image = image;
    book.pdf = pdf || "";
    book.description = description;
    book.fullDescription = fullDescription;

    const updatedBook = await book.save();

    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: "Kitobni yangilashda xatolik yuz berdi" });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Kitob topilmadi" });
    }

    await book.deleteOne();

    res.status(200).json({ message: "Kitob o‘chirildi" });
  } catch (error) {
    res.status(500).json({ message: "Kitobni o‘chirishda xatolik yuz berdi" });
  }
};

module.exports = {
  getBooks,
  getBookBySlug,
  createBook,
  updateBook,
  deleteBook,
};