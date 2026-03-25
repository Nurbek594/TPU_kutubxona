import {
  LayoutDashboard,
  BookOpen,
  PlusCircle,
  Pencil,
  CalendarDays,
  RotateCcw,
  LogOut,
} from "lucide-react";

function AdminSidebar({
  activeSection,
  setActiveSection,
  handleLogout,
  handleResetBooks,
}) {
  const itemClass = (name) =>
    activeSection === name
      ? "flex items-center gap-3 rounded-2xl bg-blue-700 px-4 py-3 text-white"
      : "flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-700 transition hover:bg-slate-100";

  return (
    <aside className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Admin Panel</h2>
        <p className="mt-2 text-sm text-slate-500">Kutubxona boshqaruvi</p>
      </div>

      <nav className="space-y-3">
        <button
          onClick={() => setActiveSection("dashboard")}
          className={itemClass("dashboard")}
        >
          <LayoutDashboard size={18} />
          Dashboard
        </button>

        <button
          onClick={() => setActiveSection("books")}
          className={itemClass("books")}
        >
          <BookOpen size={18} />
          Kitoblar
        </button>

        <button
          onClick={() => setActiveSection("add")}
          className={itemClass("add")}
        >
          <PlusCircle size={18} />
          Kitob qo‘shish
        </button>

        <button
          onClick={() => setActiveSection("edit")}
          className={itemClass("edit")}
        >
          <Pencil size={18} />
          Tahrirlash
        </button>

        <button
          onClick={() => setActiveSection("reservations")}
          className={itemClass("reservations")}
        >
          <CalendarDays size={18} />
          Bronlar
        </button>

        <button
          onClick={handleResetBooks}
          className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-amber-700 transition hover:bg-amber-50"
        >
          <RotateCcw size={18} />
          Reset books
        </button>

        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-red-600 transition hover:bg-red-50"
        >
          <LogOut size={18} />
          Chiqish
        </button>
      </nav>
    </aside>
  );
}

export default AdminSidebar;