const multer = require("multer");
const path = require("path");
const fs = require("fs");

const ensureDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const imageDir = path.join(__dirname, "..", "uploads", "images");
const pdfDir = path.join(__dirname, "..", "uploads", "pdfs");

ensureDir(imageDir);
ensureDir(pdfDir);

const imageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, imageDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`;
    cb(null, uniqueName);
  },
});

const pdfStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, pdfDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`;
    cb(null, uniqueName);
  },
});

const imageFileFilter = (req, file, cb) => {
  const allowedTypes = /jpg|jpeg|png|webp/;
  const ext = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mime = allowedTypes.test(file.mimetype.split("/").pop());

  if (ext && mime) {
    cb(null, true);
  } else {
    cb(new Error("Faqat rasm fayllar yuklash mumkin"));
  }
};

const pdfFileFilter = (req, file, cb) => {
  const isPdf =
    path.extname(file.originalname).toLowerCase() === ".pdf" &&
    file.mimetype === "application/pdf";

  if (isPdf) {
    cb(null, true);
  } else {
    cb(new Error("Faqat PDF fayl yuklash mumkin"));
  }
};

const uploadImage = multer({
  storage: imageStorage,
  fileFilter: imageFileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
});

const uploadPdf = multer({
  storage: pdfStorage,
  fileFilter: pdfFileFilter,
  limits: { fileSize: 20 * 1024 * 1024 },
});

module.exports = {
  uploadImage,
  uploadPdf,
};