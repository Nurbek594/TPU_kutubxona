import { useNavigate } from "react-router-dom";
import { Search, BookOpen, Sparkles } from "lucide-react";

function SearchHero({ search, setSearch }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/books");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-400 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
            <Sparkles size={16} />
            Professional kutubxona katalogi
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Kerakli kitobni soniyalar ichida toping
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Kitob nomi, muallif, yo‘nalish yoki kategoriya bo‘yicha qidiruv
            qiling va kerakli adabiyotlarni tez toping.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 max-w-4xl rounded-[28px] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex flex-col gap-3 rounded-2xl bg-white p-3 md:flex-row md:items-center">
            <div className="flex flex-1 items-center gap-3 rounded-2xl px-3 py-2">
              <Search className="text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Kitob nomi, muallif yoki kategoriya yozing..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border-none bg-transparent text-slate-900 outline-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              <BookOpen size={18} />
              Qidirish
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SearchHero;