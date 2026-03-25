function AdminBookTable({ books, onDeleteBook, onEditBook, onToggleAvailability }) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Barcha kitoblar</h2>
        <span className="rounded-full bg-slate-100 px-4 py-1 text-sm font-semibold text-slate-700">
          {books.length} ta
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-3">
          <thead>
            <tr className="text-left text-sm text-slate-500">
              <th className="px-4">Kitob</th>
              <th className="px-4">Muallif</th>
              <th className="px-4">Kategoriya</th>
              <th className="px-4">Yil</th>
              <th className="px-4">Holat</th>
              <th className="px-4">Amallar</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book) => (
              <tr key={book._id} className="rounded-2xl bg-slate-50">
                <td className="rounded-l-2xl px-4 py-4 font-semibold text-slate-900">
                  <div className="flex items-center gap-3">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="h-14 w-14 rounded-xl object-cover"
                    />
                    <span>{book.title}</span>
                  </div>
                </td>

                <td className="px-4 py-4 text-slate-700">{book.author}</td>
                <td className="px-4 py-4 text-slate-700">{book.category}</td>
                <td className="px-4 py-4 text-slate-700">{book.year}</td>

                <td className="px-4 py-4">
                  <button
                    onClick={() => onToggleAvailability(book._id)}
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      book.available
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {book.available ? "Mavjud" : "Band"}
                  </button>
                </td>

                <td className="rounded-r-2xl px-4 py-4">
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => onEditBook(book)}
                      className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                      Tahrirlash
                    </button>

                    <button
                      onClick={() => onDeleteBook(book._id)}
                      className="rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
                    >
                      O‘chirish
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {books.length === 0 && (
          <div className="py-10 text-center text-slate-500">
            Hozircha kitoblar mavjud emas.
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminBookTable;