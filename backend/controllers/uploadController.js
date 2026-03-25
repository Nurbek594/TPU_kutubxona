const uploadImageFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Rasm fayli topilmadi" });
    }

    const fileUrl = `http://localhost:${process.env.PORT || 5000}/uploads/images/${req.file.filename}`;

    res.status(200).json({
      message: "Rasm muvaffaqiyatli yuklandi",
      fileUrl,
    });
  } catch (error) {
    res.status(500).json({ message: "Rasm yuklashda xatolik yuz berdi" });
  }
};

const uploadPdfFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "PDF fayl topilmadi" });
    }

    const fileUrl = `http://localhost:${process.env.PORT || 5000}/uploads/pdfs/${req.file.filename}`;

    res.status(200).json({
      message: "PDF muvaffaqiyatli yuklandi",
      fileUrl,
    });
  } catch (error) {
    res.status(500).json({ message: "PDF yuklashda xatolik yuz berdi" });
  }
};

module.exports = {
  uploadImageFile,
  uploadPdfFile,
};