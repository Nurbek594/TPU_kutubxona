import { useEffect, useMemo, useState } from "react";
import BookCard from "../components/BookCard";
import SectionTitle from "../components/SectionTitle";
import SearchHero from "../components/SearchHero";
import { fetchBooks } from "../services/bookService";

function Books() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Barchasi");
  const [booksData, setBooksData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadBooks = async () => {
      try {
        setLoading(true);
        const data = await fetchBooks();
        setBooksData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  }, []);

  const categories = ["Barchasi", ...new Set(booksData.map((b) => b.category))];

  const filteredBooks = useMemo(() => {
    return booksData.filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase()) ||
        book.category.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "Barchasi" || book.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category, booksData]);

  return (
    <div>
      <SearchHero search={search} setSearch={setSearch} />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <SectionTitle
          badge="Kutubxona fondi"
          title="Barcha kitoblar"
          text="Qidiruv va kategoriyalar orqali kerakli adabiyotlarni tez toping."
        />

        <div className="mb-10 grid gap-4 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-3">
          <input
            type="text"
            placeholder="Qidirish..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-600"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-600"
          >
            {categories.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>

          <button
            onClick={() => {
              setSearch("");
              setCategory("Barchasi");
            }}
            className="rounded-2xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Tozalash
          </button>
        </div>

        {loading && (
          <div className="rounded-[32px] border border-slate-200 bg-white p-10 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">Yuklanmoqda...</h3>
          </div>
        )}

        {error && !loading && (
          <div className="rounded-[32px] border border-red-200 bg-red-50 p-10 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-red-700">Xatolik</h3>
            <p className="mt-3 text-slate-700">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="mb-8 flex items-center justify-between">
              <p className="text-slate-600">
                <span className="font-bold text-slate-900">{filteredBooks.length}</span>{" "}
                ta kitob topildi
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filteredBooks.length > 0 ? (
                filteredBooks.map((book) => <BookCard key={book._id} book={book} />)
              ) : (
                <div className="col-span-full rounded-[32px] border border-slate-200 bg-white p-10 text-center shadow-sm">
                  <h3 className="text-2xl font-bold text-slate-900">Natija topilmadi</h3>
                  <p className="mt-3 text-slate-600">
                    Boshqa kalit so‘z yoki kategoriya bilan qidirib ko‘ring.
                  </p>
                </div>
              )}
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export default Books;