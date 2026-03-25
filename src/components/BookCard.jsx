import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative h-64 overflow-hidden">
        <img
          src={book.image}
          alt={book.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 shadow">
            {book.category}
          </span>
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold shadow ${
              book.available
                ? "bg-emerald-100 text-emerald-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {book.available ? "Mavjud" : "Band"}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm text-slate-500">{book.author}</span>
          <span className="text-sm text-slate-500">{book.year}</span>
        </div>

        <h3 className="mb-2 text-xl font-bold leading-7 text-slate-900">
          {book.title}
        </h3>

        <p className="mb-4 text-sm leading-6 text-slate-600">
          {book.description}
        </p>

        <div className="mb-5 flex items-center justify-between text-sm text-slate-500">
          <span>{book.pages} bet</span>
          <span>⭐ {book.rating}</span>
        </div>

        <Link
          to={`/books/${book.slug}`}
          className="block w-full rounded-2xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Batafsil ko‘rish
        </Link>
      </div>
    </div>
  );
}

export default BookCard;