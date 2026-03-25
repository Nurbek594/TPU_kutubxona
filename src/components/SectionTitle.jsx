function SectionTitle({ badge, title, text }) {
  return (
    <div className="mb-10 text-center">
      {badge && (
        <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
      {text && (
        <p className="mx-auto mt-4 max-w-2xl text-slate-600 leading-7">
          {text}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;