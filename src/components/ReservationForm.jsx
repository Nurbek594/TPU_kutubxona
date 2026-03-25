import { useState } from "react";
import { createReservation } from "../services/reservationService";
import { useToast } from "../context/ToastContext";

function ReservationForm({ bookId, bookTitle }) {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    studentId: "",
  });
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await createReservation({
        bookId,
        fullName: form.fullName,
        phone: form.phone,
        studentId: form.studentId,
      });

      showToast(`"${bookTitle}" muvaffaqiyatli bron qilindi`);

      setForm({
        fullName: "",
        phone: "",
        studentId: "",
      });
    } catch (error) {
      showToast(error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark-card dark-border">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        Kitobni bron qilish
      </h2>
      <p className="mt-2 text-slate-600 dark-muted">
        Quyidagi ma’lumotlarni kiriting va kitobni bron qiling.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder="To‘liq ism"
          className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600 dark-input"
          required
        />

        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Telefon raqam"
          className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600 dark-input"
          required
        />

        <input
          type="text"
          name="studentId"
          value={form.studentId}
          onChange={handleChange}
          placeholder="Student ID"
          className="md:col-span-2 rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600 dark-input"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="md:col-span-2 rounded-2xl bg-blue-700 px-5 py-3.5 font-semibold text-white transition hover:bg-blue-800 disabled:opacity-60"
        >
          {loading ? "Bron qilinmoqda..." : "Bron qilish"}
        </button>
      </form>
    </div>
  );
}

export default ReservationForm;