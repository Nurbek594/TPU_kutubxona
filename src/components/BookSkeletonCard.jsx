function BookSkeletonCard() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark-card dark-border">
      <div className="h-64 animate-pulse bg-slate-200 dark-soft"></div>

      <div className="p-5">
        <div className="mb-3 h-4 w-24 animate-pulse rounded bg-slate-200 dark-soft"></div>
        <div className="mb-3 h-6 w-3/4 animate-pulse rounded bg-slate-200 dark-soft"></div>
        <div className="mb-2 h-4 w-1/2 animate-pulse rounded bg-slate-200 dark-soft"></div>
        <div className="mb-2 h-4 w-full animate-pulse rounded bg-slate-200 dark-soft"></div>
        <div className="mb-5 h-4 w-5/6 animate-pulse rounded bg-slate-200 dark-soft"></div>
        <div className="h-11 w-full animate-pulse rounded-2xl bg-slate-200 dark-soft"></div>
      </div>
    </div>
  );
}

export default BookSkeletonCard;