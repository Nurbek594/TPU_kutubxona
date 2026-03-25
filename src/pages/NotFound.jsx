import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="max-w-xl rounded-[32px] border border-slate-200 bg-white p-10 text-center shadow-sm">
        <h1 className="text-6xl font-bold text-slate-900">404</h1>
        <h2 className="mt-4 text-3xl font-bold text-slate-900">Sahifa topilmadi</h2>
        <p className="mt-4 leading-7 text-slate-600">
          Siz ochmoqchi bo‘lgan sahifa mavjud emas yoki o‘chirib yuborilgan.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-2xl bg-blue-700 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-800"
        >
          Bosh sahifaga qaytish
        </Link>
      </div>
    </section>
  );
}

export default NotFound;