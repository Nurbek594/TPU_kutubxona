const STORAGE_KEY = "library_books";

export function getStoredBooks(defaultBooks) {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultBooks));
    return defaultBooks;
  }

  try {
    return JSON.parse(data);
  } catch (error) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultBooks));
    return defaultBooks;
  }
}

export function saveBooks(books) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
}

export function resetBooks(defaultBooks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultBooks));
  return defaultBooks;
}