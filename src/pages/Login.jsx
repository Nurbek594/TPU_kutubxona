import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LockKeyhole, Mail } from "lucide-react";
import { loginAdmin } from "../services/authService";
import { saveToken } from "../utils/auth";
import { useToast } from "../context/ToastContext";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
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
      const data = await loginAdmin(form);
      saveToken(data.token);
      showToast("Muvaffaqiyatli tizimga kirildi");
      navigate("/admin");
    } catch (error) {
      showToast(error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden px-4 py-16 md:px-8">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-200 blur-3xl opacity-50"></div>
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-cyan-200 blur-3xl opacity-50"></div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-2xl md:grid-cols-2 dark-card dark-border">
          <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-10 text-white md:p-14">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm">
              Admin kirish
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
              Kutubxona boshqaruv paneliga xush kelibsiz
            </h1>

            <p className="mt-6 max-w-md leading-8 text-slate-300">
              Admin panel orqali kitoblarni boshqarish, yangi resurslar qo‘shish
              va katalogni yangilash mumkin.
            </p>
          </div>

          <div className="p-8 md:p-14">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Tizimga kirish
            </h2>
            <p className="mt-3 text-slate-600 dark-muted">
              Admin sahifaga kirish uchun ma’lumotlaringizni kiriting.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700 dark-muted">
                  Email
                </label>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 focus-within:border-blue-600 dark-input">
                  <Mail size={18} className="text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="admin@library.uz"
                    className="w-full border-none outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700 dark-muted">
                  Parol
                </label>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 focus-within:border-blue-600 dark-input">
                  <LockKeyhole size={18} className="text-slate-400" />
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Parolni kiriting"
                    className="w-full border-none outline-none"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-blue-700 px-5 py-3.5 font-semibold text-white transition hover:bg-blue-800 disabled:opacity-60"
              >
                {loading ? "Kirilmoqda..." : "Kirish"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;