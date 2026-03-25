import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import BookCard from "../components/BookCard";
import SectionTitle from "../components/SectionTitle";
import SearchHero from "../components/SearchHero";
import BookSkeletonCard from "../components/BookSkeletonCard";
import { fetchBooks } from "../services/bookService";

function Books() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [booksData, setBooksData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const initialSearch = searchParams.get("search") || "";
  const initialCategory = searchParams.get("category") || "Barchasi";
  const initialPage = Number(searchParams.get("page") || 1);

  const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState(initialCategory);
  const [currentPage, setCurrentPage] = useState(initialPage);

  const booksPerPage = 6;

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

  useEffect(() => {
    const params = {};
    if (search) params.search = search;
    if (category !== "Barchasi") params.category = category;
    if (currentPage > 1) params.page = String(currentPage);

    setSearchParams(params);
  }, [search, category, currentPage, setSearchParams]);

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

  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
  const paginatedBooks = filteredBooks.slice(
    (currentPage - 1) * booksPerPage,
    currentPage * booksPerPage
  );

  const handleReset = () => {
    setSearch("");
    setCategory("Barchasi");
    setCurrentPage(1);
  };

  return (
    <div>
      <SearchHero search={search} setSearch={setSearch} />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <SectionTitle
          badge="Kutubxona fondi"
          title="Barcha kitoblar"
          text="Qidiruv va kategoriyalar orqali kerakli adabiyotlarni tez toping."
        />

        <div className="mb-10 grid gap-4 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-3 dark-card dark-border">
          <input
            type="text"
            placeholder="Qidirish..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-600 dark-input"
          />

          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setCurrentPage(1);
            }}
            className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-600 dark-input"
          >
            {categories.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>

          <button
            onClick={handleReset}
            className="rounded-2xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Tozalash
          </button>
        </div>

        {loading && (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <BookSkeletonCard key={index} />
            ))}
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
              <p className="text-slate-600 dark-muted">
                <span className="font-bold text-slate-900 dark:text-white">
                  {filteredBooks.length}
                </span>{" "}
                ta kitob topildi
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {paginatedBooks.length > 0 ? (
                paginatedBooks.map((book) => (
                  <BookCard key={book._id} book={book} />
                ))
              ) : (
                <div className="col-span-full rounded-[32px] border border-slate-200 bg-white p-10 text-center shadow-sm dark-card dark-border">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Natija topilmadi
                  </h3>
                  <p className="mt-3 text-slate-600 dark-muted">
                    Boshqa kalit so‘z yoki kategoriya bilan qidirib ko‘ring.
                  </p>
                </div>
              )}
            </div>

            {totalPages > 1 && (
              <div className="mt-12 flex flex-wrap justify-center gap-3">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  className="rounded-xl border border-slate-200 px-4 py-2 disabled:opacity-50 dark-border"
                >
                  Oldingi
                </button>

                {Array.from({ length: totalPages }).map((_, index) => {
                  const page = index + 1;

                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`rounded-xl px-4 py-2 font-semibold ${
                        currentPage === page
                          ? "bg-blue-700 text-white"
                          : "border border-slate-200 dark-border"
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  className="rounded-xl border border-slate-200 px-4 py-2 disabled:opacity-50 dark-border"
                >
                  Keyingi
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}

export default Books;