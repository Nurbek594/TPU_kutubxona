import { getToken } from "../utils/auth";

const API_URL =
  import.meta.env.VITE_UPLOAD_URL || "http://localhost:5000/api/upload";

export async function uploadImage(file) {
  const token = getToken();
  const formData = new FormData();
  formData.append("image", file);

  const response = await fetch(`${API_URL}/image`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Rasm yuklashda xatolik yuz berdi");
  }

  return data;
}

export async function uploadPdf(file) {
  const token = getToken();
  const formData = new FormData();
  formData.append("pdf", file);

  const response = await fetch(`${API_URL}/pdf`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "PDF yuklashda xatolik yuz berdi");
  }

  return data;
}