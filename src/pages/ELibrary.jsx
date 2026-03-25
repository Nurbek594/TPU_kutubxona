import { useEffect, useState } from "react";
import { FileText, Download, ExternalLink } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { fetchBooks } from "../services/bookService";

function ELibrary() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const data = await fetchBooks();
        setBooks(data.filter((book) => book.pdf));
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <SectionTitle
        badge="Elektron kutubxona"
        title="PDF resurslar"
        text="Elektron kitoblar va o‘quv materiallarini online ko‘rish yoki yuklab olish mumkin."
      />

      {loading ? (
        <div className="rounded-[32px] border border-slate-200 bg-white p-10 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900">Yuklanmoqda...</h3>
        </div>
      ) : books.length === 0 ? (
        <div className="rounded-[32px] border border-slate-200 bg-white p-10 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900">PDF resurslar topilmadi</h3>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {books.map((book) => (
            <div
              key={book._id}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-blue-100 p-3 text-blue-700">
                <FileText size={24} />
              </div>

              <h3 className="text-xl font-bold text-slate-900">{book.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{book.author}</p>
              <p className="mt-4 text-sm leading-6 text-slate-600">{book.description}</p>

              <div className="mt-6 flex gap-3">
                <a
                  href={book.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                >
                  <ExternalLink size={16} />
                  Ko‘rish
                </a>

                <a
                  href={book.pdf}
                  download
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                >
                  <Download size={16} />
                  Yuklash
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ELibrary;