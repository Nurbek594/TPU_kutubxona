import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, LibraryBig } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    isActive
      ? "text-blue-700 font-semibold"
      : "text-slate-700 hover:text-blue-700 transition";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="rounded-2xl bg-blue-700 p-2 text-white shadow-md">
            <LibraryBig size={24} />
          </div>

          <div>
            <h1 className="text-lg font-bold md:text-xl">University Library</h1>
            <p className="text-xs text-slate-500">Digital Knowledge Center</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navClass}>
            Bosh sahifa
          </NavLink>

          <NavLink to="/books" className={navClass}>
            Kitoblar
          </NavLink>

          <NavLink to="/e-library" className={navClass}>
            E-Library
          </NavLink>

          <NavLink to="/about" className={navClass}>
            Biz haqimizda
          </NavLink>

          <NavLink to="/contact" className={navClass}>
            Bog‘lanish
          </NavLink>

          <NavLink to="/login" className={navClass}>
            Admin
          </NavLink>
        </nav>

        <div className="hidden md:block">
          <Link
            to="/books"
            className="rounded-xl bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-800 transition"
          >
            Katalogga o‘tish
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-slate-200 p-2 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4">
            <NavLink to="/" className={navClass} onClick={() => setOpen(false)}>
              Bosh sahifa
            </NavLink>

            <NavLink
              to="/books"
              className={navClass}
              onClick={() => setOpen(false)}
            >
              Kitoblar
            </NavLink>

            <NavLink
              to="/e-library"
              className={navClass}
              onClick={() => setOpen(false)}
            >
              E-Library
            </NavLink>

            <NavLink
              to="/about"
              className={navClass}
              onClick={() => setOpen(false)}
            >
              Biz haqimizda
            </NavLink>

            <NavLink
              to="/contact"
              className={navClass}
              onClick={() => setOpen(false)}
            >
              Bog‘lanish
            </NavLink>

            <NavLink
              to="/login"
              className={navClass}
              onClick={() => setOpen(false)}
            >
              Admin
            </NavLink>

            <Link
              to="/books"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-blue-700 px-5 py-3 text-center font-semibold text-white"
            >
              Katalogga o‘tish
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;