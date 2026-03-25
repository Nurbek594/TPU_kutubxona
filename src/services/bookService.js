import { getToken } from "../utils/auth";

const API_URL = "http://localhost:5000/api/books";

export async function fetchBooks() {
  const response = await fetch(API_URL);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Kitoblarni olishda xatolik yuz berdi");
  }

  return data;
}

export async function fetchBookBySlug(slug) {
  const response = await fetch(`${API_URL}/${slug}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Kitobni olishda xatolik yuz berdi");
  }

  return data;
}

export async function createBook(bookData) {
  const token = getToken();

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bookData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Kitob qo‘shishda xatolik yuz berdi");
  }

  return data;
}

export async function updateBook(id, bookData) {
  const token = getToken();

  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bookData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Kitobni yangilashda xatolik yuz berdi");
  }

  return data;
}

export async function deleteBook(id) {
  const token = getToken();

  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Kitobni o‘chirishda xatolik yuz berdi");
  }

  return data;
}