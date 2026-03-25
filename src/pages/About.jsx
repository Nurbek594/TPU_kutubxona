function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <div className="rounded-[32px] bg-white p-8 shadow-sm border border-slate-200 md:p-12">
        <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
          Biz haqimizda
        </span>

        <h1 className="mt-4 text-4xl font-bold">Universitet kutubxonasi</h1>

        <p className="mt-6 max-w-4xl text-slate-600 leading-8">
          Universitet kutubxonasi talabalar, magistrlar, professor-o‘qituvchilar
          va ilmiy tadqiqotchilar uchun axborot-resurs markazi sifatida xizmat qiladi.
          Bizning maqsadimiz — foydalanuvchilarga kitoblar, ilmiy maqolalar,
          elektron resurslar va zamonaviy o‘quv materiallariga qulay kirish imkonini yaratish.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-slate-50 p-6">
            <h3 className="text-xl font-bold">Missiya</h3>
            <p className="mt-3 text-slate-600 leading-7">
              Bilimga tezkor va zamonaviy kirish imkonini yaratish.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-6">
            <h3 className="text-xl font-bold">Maqsad</h3>
            <p className="mt-3 text-slate-600 leading-7">
              O‘quv jarayonini va ilmiy faoliyatni raqamli resurslar bilan qo‘llab-quvvatlash.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-6">
            <h3 className="text-xl font-bold">Qadriyatlar</h3>
            <p className="mt-3 text-slate-600 leading-7">
              Sifat, qulaylik, tezkorlik va foydalanuvchiga yo‘naltirilgan xizmat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;