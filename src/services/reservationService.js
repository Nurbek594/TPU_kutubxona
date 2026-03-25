import { getToken } from "../utils/auth";

const API_URL = "http://localhost:5000/api/reservations";

export async function createReservation(reservationData) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reservationData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Bron qilishda xatolik yuz berdi");
  }

  return data;
}

export async function fetchReservations() {
  const token = getToken();

  const response = await fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Bronlarni olishda xatolik yuz berdi");
  }

  return data;
}

export async function updateReservationStatus(id, status) {
  const token = getToken();

  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Bron statusini yangilashda xatolik yuz berdi");
  }

  return data;
}

export async function deleteReservation(id) {
  const token = getToken();

  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Bronni o‘chirishda xatolik yuz berdi");
  }

  return data;
}