function Footer() {
  return (
    <footer className="mt-16 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3 md:px-8">
        <div>
          <h3 className="mb-3 text-xl font-bold">University Library</h3>
          <p className="text-sm leading-7 text-slate-300">
            Talabalar, o‘qituvchilar va tadqiqotchilar uchun zamonaviy raqamli
            kutubxona platformasi.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-lg font-semibold">Bo‘limlar</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Bosh sahifa</li>
            <li>Kitoblar katalogi</li>
            <li>Elektron resurslar</li>
            <li>Bog‘lanish</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-lg font-semibold">Aloqa</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Email: library@university.uz</li>
            <li>Tel: +998 90 123 45 67</li>
            <li>Manzil: Toshkent, Universitet hududi</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4 text-center text-sm text-slate-400">
        © 2026 University Library. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
}

export default Footer;