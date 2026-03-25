import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Globe,
  Star,
  User,
  FileText,
} from "lucide-react";
import { fetchBookBySlug, fetchBooks } from "../services/bookService";
import ReservationForm from "../components/ReservationForm";

function BookDetail() {
  const { slug } = useParams();
  const [book, setBook] = useState(null);
  const [relatedBooks, setRelatedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadBook = async () => {
      try {
        setLoading(true);
        const currentBook = await fetchBookBySlug(slug);
        setBook(currentBook);

        const allBooks = await fetchBooks();
        const related = allBooks
          .filter(
            (item) =>
              item.category === currentBook.category && item.slug !== currentBook.slug
          )
          .slice(0, 3);

        setRelatedBooks(related);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadBook();
  }, [slug]);

  if (loading) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-10 text-center shadow-sm">
          <h1 className="text-3xl font-bold">Yuklanmoqda...</h1>
        </div>
      </section>
    );
  }

  if (error || !book) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-10 text-center shadow-sm">
          <h1 className="text-3xl font-bold">Kitob topilmadi</h1>
          <p className="mt-3 text-slate-600">
            {error || "Siz izlagan kitob katalogda mavjud emas."}
          </p>
          <Link
            to="/books"
            className="mt-6 inline-block rounded-2xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Katalogga qaytish
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <Link
        to="/books"
        className="mb-8 inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-700"
      >
        <ArrowLeft size={18} />
        Katalogga qaytish
      </Link>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
          <img
            src={book.image}
            alt={book.title}
            className="h-full max-h-[640px] w-full object-cover"
          />
        </div>

        <div>
          <div className="mb-4 flex flex-wrap gap-3">
            <span className="rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
              {book.category}
            </span>
            <span
              className={`rounded-full px-4 py-1.5 text-sm font-semibold ${
                book.available
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {book.available ? "Mavjud" : "Hozir band"}
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            {book.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {book.fullDescription}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <User className="text-blue-700" size={20} />
                <div>
                  <p className="text-sm text-slate-500">Muallif</p>
                  <p className="font-semibold text-slate-900">{book.author}</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <Calendar className="text-blue-700" size={20} />
                <div>
                  <p className="text-sm text-slate-500">Nashr yili</p>
                  <p className="font-semibold text-slate-900">{book.year}</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <BookOpen className="text-blue-700" size={20} />
                <div>
                  <p className="text-sm text-slate-500">Sahifalar</p>
                  <p className="font-semibold text-slate-900">{book.pages} bet</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <Globe className="text-blue-700" size={20} />
                <div>
                  <p className="text-sm text-slate-500">Til</p>
                  <p className="font-semibold text-slate-900">{book.language}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <Star className="text-yellow-500" size={20} />
              <div>
                <p className="text-sm text-slate-500">Reyting</p>
                <p className="font-semibold text-slate-900">{book.rating} / 5.0</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            {book.pdf ? (
              <a
                href={book.pdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
              >
                <FileText size={18} />
                PDF ko‘rish
              </a>
            ) : (
              <button
                disabled
                className="rounded-2xl border border-slate-300 bg-slate-100 px-6 py-3.5 font-semibold text-slate-400"
              >
                PDF mavjud emas
              </button>
            )}
          </div>
        </div>
      </div>

      <ReservationForm bookId={book._id} bookTitle={book.title} />

      {relatedBooks.length > 0 && (
        <div className="mt-20">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">
            O‘xshash kitoblar
          </h2>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {relatedBooks.map((item) => (
              <div
                key={item._id}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="mb-4 h-56 w-full rounded-2xl object-cover"
                />
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{item.author}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
                <Link
                  to={`/books/${item.slug}`}
                  className="mt-5 inline-block rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Batafsil
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default BookDetail;