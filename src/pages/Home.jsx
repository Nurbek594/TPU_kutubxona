import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  BookOpen,
  GraduationCap,
  ShieldCheck,
  Clock3,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import BookCard from "../components/BookCard";
import { fetchBooks } from "../services/bookService";

function Home() {
  const [popularBooks, setPopularBooks] = useState([]);
  const [stats, setStats] = useState({
    totalBooks: 0,
    availableBooks: 0,
    digitalResources: 0,
  });
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const storedBooks = await fetchBooks();
        setPopularBooks(storedBooks.slice(0, 3));

        setStats({
          totalBooks: storedBooks.length,
          availableBooks: storedBooks.filter((book) => book.available).length,
          digitalResources: storedBooks.length * 3,
        });
      } catch (error) {
        console.error(error.message);
      }
    };

    loadBooks();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/books");
  };

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-10 top-10 h-52 w-52 rounded-full bg-blue-500 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-cyan-400 blur-3xl"></div>
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <div>
            <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm">
              Zamonaviy universitet kutubxonasi
            </span>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Bilim markazi uchun professional kutubxona sayti
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Talabalar, o‘qituvchilar va ilmiy izlanish olib boruvchilar uchun
              tezkor qidiruv, elektron kitoblar va qulay katalog tizimi.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/books"
                className="rounded-2xl bg-blue-600 px-6 py-3.5 text-center font-semibold text-white shadow-lg transition hover:bg-blue-700"
              >
                Katalogni ochish
              </Link>

              <Link
                to="/about"
                className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3.5 text-center font-semibold text-white transition hover:bg-white/20"
              >
                Batafsil ma’lumot
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl shadow-2xl">
            <div className="rounded-2xl bg-white p-4 text-slate-900 shadow-lg">
              <form
                onSubmit={handleSearch}
                className="mb-4 flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3"
              >
                <Search className="text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Kitob nomi, muallif yoki kategoriya..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full border-none outline-none"
                />
              </form>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Jami kitoblar</p>
                  <h3 className="mt-2 text-2xl font-bold">{stats.totalBooks}</h3>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Elektron resurslar</p>
                  <h3 className="mt-2 text-2xl font-bold">{stats.digitalResources}</h3>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Mavjud kitoblar</p>
                  <h3 className="mt-2 text-2xl font-bold">{stats.availableBooks}</h3>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">24/7 kirish</p>
                  <h3 className="mt-2 text-2xl font-bold">Online</h3>
                </div>
              </div>

              <Link
                to="/books"
                className="mt-4 block w-full rounded-2xl bg-slate-900 px-4 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
              >
                Qidirishni boshlash
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <SectionTitle
          badge="Afzalliklar"
          title="Nega aynan shu kutubxona platformasi?"
          text="Tez ishlovchi, qulay navigatsiyaga ega va foydalanuvchi uchun professional tajriba beradigan tizim."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <BookOpen className="mb-4 text-blue-700" size={34} />
            <h3 className="mb-3 text-xl font-bold">Keng katalog</h3>
            <p className="leading-7 text-slate-600">
              Kitoblar, ilmiy maqolalar, darsliklar va elektron manbalar bitta joyda.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <Search className="mb-4 text-blue-700" size={34} />
            <h3 className="mb-3 text-xl font-bold">Tez qidiruv</h3>
            <p className="leading-7 text-slate-600">
              Kitob nomi, muallif yoki fan yo‘nalishi bo‘yicha bir necha soniyada topish.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <GraduationCap className="mb-4 text-blue-700" size={34} />
            <h3 className="mb-3 text-xl font-bold">Talabalar uchun qulay</h3>
            <p className="leading-7 text-slate-600">
              Mobil, planshet va kompyuterda bir xil qulaylik bilan ishlaydi.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <ShieldCheck className="mb-4 text-blue-700" size={34} />
            <h3 className="mb-3 text-xl font-bold">Ishonchli tizim</h3>
            <p className="leading-7 text-slate-600">
              Keyinchalik login, admin panel va elektron kutubxona modullarini ulash mumkin.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <SectionTitle
          badge="Mashhur kitoblar"
          title="Ko‘p o‘qilayotgan kitoblar"
          text="Talabalar va o‘qituvchilar orasida eng ommabop bo‘lgan kitoblar ro‘yxati."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {popularBooks.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <SectionTitle
          badge="Elektron kutubxona"
          title="Raqamli resurslardan foydalaning"
          text="Elektron darsliklar, ilmiy maqolalar va o‘quv qo‘llanmalariga zamonaviy interfeys orqali tezkor kirish."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">PDF darsliklar</h3>
            <p className="mt-4 leading-7 text-slate-600">
              Turli fanlar bo‘yicha elektron darsliklarni online ko‘rish yoki yuklab olish imkoniyati.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">Ilmiy maqolalar</h3>
            <p className="mt-4 leading-7 text-slate-600">
              Tadqiqot ishlari, maqolalar va ilmiy materiallar uchun qulay kataloglash tizimi.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">24/7 foydalanish</h3>
            <p className="mt-4 leading-7 text-slate-600">
              Talabalar va professor-o‘qituvchilar istalgan vaqtda platformadan foydalanishi mumkin.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-3 md:px-8">
          <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
            <Clock3 className="mb-4 text-blue-700" size={34} />
            <h3 className="mb-3 text-xl font-bold">Ish vaqti</h3>
            <p className="leading-7 text-slate-600">
              Dushanba - Shanba: 08:00 - 20:00
              <br />
              Yakshanba: 09:00 - 15:00
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
            <h3 className="mb-3 text-xl font-bold">Yangi e’lon</h3>
            <p className="leading-7 text-slate-600">
              Elektron kutubxona bazasi yangi ilmiy maqolalar va metodik
              qo‘llanmalar bilan boyitildi.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
            <h3 className="mb-3 text-xl font-bold">Online kirish</h3>
            <p className="leading-7 text-slate-600">
              Elektron resurslardan universitet foydalanuvchilari 24/7 foydalanishi mumkin.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="rounded-[32px] bg-slate-900 px-6 py-12 text-center text-white md:px-12">
          <h2 className="text-3xl font-bold md:text-4xl">
            Kutubxona katalogidan hoziroq foydalaning
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Talabalar va professor-o‘qituvchilar uchun zamonaviy, chiroyli va
            tezkor kutubxona boshqaruv platformasi.
          </p>

          <Link
            to="/books"
            className="mt-8 inline-block rounded-2xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700"
          >
            Kitoblarni ko‘rish
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;