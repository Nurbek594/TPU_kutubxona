import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import AdminStats from "../components/AdminStats";
import AddBookForm from "../components/AddBookForm";
import EditBookForm from "../components/EditBookForm";
import AdminBookTable from "../components/AdminBookTable";
import AdminReservationTable from "../components/AdminReservationTable";
import {
  fetchBooks,
  createBook,
  updateBook,
  deleteBook,
} from "../services/bookService";
import {
  fetchReservations,
  updateReservationStatus,
  deleteReservation,
} from "../services/reservationService";
import { removeToken } from "../utils/auth";
import { useToast } from "../context/ToastContext";

function Admin() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [books, setBooks] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const navigate = useNavigate();
  const { showToast } = useToast();

  const loadBooks = async () => {
    try {
      const data = await fetchBooks();
      setBooks(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const loadReservations = async () => {
    try {
      const data = await fetchReservations();
      setReservations(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    loadBooks();
    loadReservations();
  }, []);

  const handleAddBook = async (newBook) => {
    try {
      await createBook(newBook);
      await loadBooks();
      showToast("Kitob muvaffaqiyatli qo‘shildi");
      setActiveSection("books");
    } catch (error) {
      showToast(error.message, "error");
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await deleteBook(id);
      await loadBooks();
      showToast("Kitob o‘chirildi");

      if (selectedBook?._id === id) {
        setSelectedBook(null);
      }
    } catch (error) {
      showToast(error.message, "error");
    }
  };

  const handleEditBook = (book) => {
    setSelectedBook(book);
    setActiveSection("edit");
  };

  const handleUpdateBook = async (updatedBook) => {
    try {
      await updateBook(updatedBook._id, updatedBook);
      await loadBooks();
      showToast("Kitob yangilandi");
      setSelectedBook(null);
      setActiveSection("books");
    } catch (error) {
      showToast(error.message, "error");
    }
  };

  const handleToggleAvailability = async (id) => {
    try {
      const currentBook = books.find((book) => book._id === id);
      if (!currentBook) return;

      const updatedBook = {
        ...currentBook,
        available: !currentBook.available,
      };

      await updateBook(id, updatedBook);
      await loadBooks();
      showToast("Kitob holati yangilandi");

      if (selectedBook?._id === id) {
        setSelectedBook(updatedBook);
      }
    } catch (error) {
      showToast(error.message, "error");
    }
  };

  const handleReservationStatusChange = async (id, status) => {
    try {
      await updateReservationStatus(id, status);
      await loadReservations();
      showToast("Bron statusi yangilandi");
    } catch (error) {
      showToast(error.message, "error");
    }
  };

  const handleDeleteReservation = async (id) => {
    try {
      await deleteReservation(id);
      await loadReservations();
      showToast("Bron o‘chirildi");
    } catch (error) {
      showToast(error.message, "error");
    }
  };

  const handleResetBooks = async () => {
    showToast("Reset books seed orqali ishlaydi", "info");
  };

  const handleLogout = () => {
    removeToken();
    showToast("Tizimdan chiqildi", "info");
    navigate("/login");
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-8">
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <AdminSidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          handleLogout={handleLogout}
          handleResetBooks={handleResetBooks}
        />

        <div className="space-y-8">
          <div className="rounded-[28px] bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 p-8 text-white shadow-xl">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm">
              Library Admin
            </span>

            <h1 className="mt-4 text-3xl font-bold md:text-4xl">
              Kutubxona boshqaruv paneli
            </h1>

            <p className="mt-3 max-w-2xl leading-7 text-slate-300">
              Kitoblarni boshqarish, katalogni yangilash va kutubxona resurslarini
              nazorat qilish uchun professional admin interfeys.
            </p>
          </div>

          {activeSection === "dashboard" && (
            <AdminStats books={books} reservations={reservations} />
          )}

          {activeSection === "books" && (
            <AdminBookTable
              books={books}
              onDeleteBook={handleDeleteBook}
              onEditBook={handleEditBook}
              onToggleAvailability={handleToggleAvailability}
            />
          )}

          {activeSection === "add" && <AddBookForm onAddBook={handleAddBook} />}

          {activeSection === "edit" && (
            <EditBookForm
              selectedBook={selectedBook}
              onUpdateBook={handleUpdateBook}
            />
          )}

          {activeSection === "reservations" && (
            <AdminReservationTable
              reservations={reservations}
              onChangeStatus={handleReservationStatusChange}
              onDeleteReservation={handleDeleteReservation}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default Admin;