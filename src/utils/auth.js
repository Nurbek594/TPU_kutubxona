export function saveToken(token) {
  localStorage.setItem("adminToken", token);
}

export function getToken() {
  return localStorage.getItem("adminToken");
}

export function removeToken() {
  localStorage.removeItem("adminToken");
}

export function isAuthenticated() {
  return !!localStorage.getItem("adminToken");
}