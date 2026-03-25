import { useEffect, useState } from "react";
import { uploadImage, uploadPdf } from "../services/uploadService";

function EditBookForm({ selectedBook, onUpdateBook }) {
  const [form, setForm] = useState({
    _id: "",
    slug: "",
    title: "",
    author: "",
    category: "",
    year: "",
    pages: "",
    language: "",
    rating: "",
    image: "",
    pdf: "",
    description: "",
    fullDescription: "",
    available: true,
  });

  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadingPdf, setUploadingPdf] = useState(false);

  useEffect(() => {
    if (selectedBook) {
      setForm({
        _id: selectedBook._id,
        slug: selectedBook.slug,
        title: selectedBook.title,
        author: selectedBook.author,
        category: selectedBook.category,
        year: selectedBook.year,
        pages: selectedBook.pages,
        language: selectedBook.language,
        rating: selectedBook.rating,
        image: selectedBook.image,
        pdf: selectedBook.pdf || "",
        description: selectedBook.description,
        fullDescription: selectedBook.fullDescription,
        available: selectedBook.available,
      });
    }
  }, [selectedBook]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploadingImage(true);
      const data = await uploadImage(file);
      setForm((prev) => ({
        ...prev,
        image: data.fileUrl,
      }));
    } catch (error) {
      alert(error.message);
    } finally {
      setUploadingImage(false);
    }
  };

  const handlePdfUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploadingPdf(true);
      const data = await uploadPdf(file);
      setForm((prev) => ({
        ...prev,
        pdf: data.fileUrl,
      }));
    } catch (error) {
      alert(error.message);
    } finally {
      setUploadingPdf(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBook = {
      ...form,
      year: Number(form.year),
      pages: Number(form.pages),
      rating: Number(form.rating),
    };

    onUpdateBook(updatedBook);
  };

  if (!selectedBook) {
    return (
      <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Kitobni tahrirlash</h2>
        <p className="mt-3 text-slate-600">
          Avval “Kitoblar” bo‘limidan biror kitob uchun <strong>Tahrirlash</strong> tugmasini bosing.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="text-2xl font-bold text-slate-900">Kitobni tahrirlash</h2>
      <p className="mt-2 text-slate-600">
        Tanlangan kitob ma’lumotlarini yangilang.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-5 md:grid-cols-2">
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Kitob nomi"
          className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
          required
        />

        <input
          type="text"
          name="author"
          value={form.author}
          onChange={handleChange}
          placeholder="Muallif"
          className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
          required
        />

        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Kategoriya"
          className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
          required
        />

        <input
          type="number"
          name="year"
          value={form.year}
          onChange={handleChange}
          placeholder="Nashr yili"
          className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
          required
        />

        <input
          type="number"
          name="pages"
          value={form.pages}
          onChange={handleChange}
          placeholder="Sahifalar soni"
          className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
          required
        />

        <input
          type="text"
          name="language"
          value={form.language}
          onChange={handleChange}
          placeholder="Til"
          className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
          required
        />

        <input
          type="number"
          step="0.1"
          name="rating"
          value={form.rating}
          onChange={handleChange}
          placeholder="Reyting"
          className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
          required
        />

        <div className="rounded-2xl border border-slate-200 px-4 py-3">
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Yangi rasm yuklash
          </label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {uploadingImage && (
            <p className="mt-2 text-sm text-blue-700">Rasm yuklanmoqda...</p>
          )}
          {form.image && (
            <img
              src={form.image}
              alt="Preview"
              className="mt-3 h-24 w-24 rounded-xl object-cover"
            />
          )}
        </div>

        <div className="rounded-2xl border border-slate-200 px-4 py-3">
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Yangi PDF yuklash
          </label>
          <input type="file" accept="application/pdf" onChange={handlePdfUpload} />
          {uploadingPdf && (
            <p className="mt-2 text-sm text-blue-700">PDF yuklanmoqda...</p>
          )}
          {form.pdf && (
            <p className="mt-3 break-all text-sm text-emerald-700">
              PDF mavjud
            </p>
          )}
        </div>

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Qisqa tavsif"
          className="md:col-span-2 rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
          rows="4"
          required
        />

        <textarea
          name="fullDescription"
          value={form.fullDescription}
          onChange={handleChange}
          placeholder="To‘liq tavsif"
          className="md:col-span-2 rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
          rows="6"
          required
        />

        <label className="md:col-span-2 flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3">
          <input
            type="checkbox"
            name="available"
            checked={form.available}
            onChange={handleChange}
          />
          <span className="text-slate-700">Kitob mavjud</span>
        </label>

        <button
          type="submit"
          disabled={uploadingImage || uploadingPdf}
          className="md:col-span-2 rounded-2xl bg-blue-700 px-5 py-3.5 font-semibold text-white transition hover:bg-blue-800 disabled:opacity-60"
        >
          Yangilash
        </button>
      </form>
    </div>
  );
}

export default EditBookForm;