const express = require("express");
const router = express.Router();
const { protectAdmin } = require("../middleware/authMiddleware");
const { uploadImage, uploadPdf } = require("../middleware/uploadMiddleware");
const { uploadImageFile, uploadPdfFile } = require("../controllers/uploadController");

router.post("/image", protectAdmin, uploadImage.single("image"), uploadImageFile);
router.post("/pdf", protectAdmin, uploadPdf.single("pdf"), uploadPdfFile);

module.exports = router;