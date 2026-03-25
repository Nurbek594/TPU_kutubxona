const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Book = require("./models/Book");
const books = require("./data/books");

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Book.deleteMany();
    await Book.insertMany(books);
    console.log("Books seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Seed error:", error.message);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Book.deleteMany();
    console.log("Books deleted successfully");
    process.exit();
  } catch (error) {
    console.error("Delete error:", error.message);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}