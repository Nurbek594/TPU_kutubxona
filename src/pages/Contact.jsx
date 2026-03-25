function Contact() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-[32px] bg-white p-8 shadow-sm border border-slate-200">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
            Bog‘lanish
          </span>

          <h1 className="mt-4 text-4xl font-bold">Biz bilan aloqa</h1>

          <div className="mt-8 space-y-4 text-slate-600 leading-7">
            <p><strong>Email:</strong> library@university.uz</p>
            <p><strong>Telefon:</strong> +998 90 123 45 67</p>
            <p><strong>Manzil:</strong> Toshkent shahri, Universitet kutubxonasi</p>
            <p><strong>Ish vaqti:</strong> 08:00 - 20:00</p>
          </div>
        </div>

        <div className="rounded-[32px] bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold">Xabar yuborish</h2>

          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Ismingiz"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
            />
            <textarea
              rows="5"
              placeholder="Xabaringiz"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
            ></textarea>

            <button
              type="submit"
              className="w-full rounded-2xl bg-blue-700 px-4 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              Yuborish
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;