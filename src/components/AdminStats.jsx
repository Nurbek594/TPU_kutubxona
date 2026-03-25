import { BookOpen, CheckCircle2, XCircle, Star, CalendarDays } from "lucide-react";

function AdminStats({ books, reservations = [] }) {
  const totalBooks = books.length;
  const availableBooks = books.filter((book) => book.available).length;
  const unavailableBooks = books.filter((book) => !book.available).length;
  const totalReservations = reservations.length;

  const averageRating =
    books.length > 0
      ? (
          books.reduce((sum, book) => sum + Number(book.rating || 0), 0) /
          books.length
        ).toFixed(1)
      : 0;

  const cards = [
    {
      title: "Jami kitoblar",
      value: totalBooks,
      icon: <BookOpen size={22} />,
    },
    {
      title: "Mavjud kitoblar",
      value: availableBooks,
      icon: <CheckCircle2 size={22} />,
    },
    {
      title: "Band kitoblar",
      value: unavailableBooks,
      icon: <XCircle size={22} />,
    },
    {
      title: "O‘rtacha reyting",
      value: averageRating,
      icon: <Star size={22} />,
    },
    {
      title: "Bronlar soni",
      value: totalReservations,
      icon: <CalendarDays size={22} />,
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
      {cards.map((card, index) => (
        <div
          key={index}
          className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="mb-4 inline-flex rounded-2xl bg-blue-100 p-3 text-blue-700">
            {card.icon}
          </div>
          <p className="text-sm text-slate-500">{card.title}</p>
          <h3 className="mt-2 text-3xl font-bold text-slate-900">{card.value}</h3>
        </div>
      ))}
    </div>
  );
}

export default AdminStats;