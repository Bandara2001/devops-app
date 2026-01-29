const API_BASE = "http://localhost:5000/api"; // Or container name in Docker

export const registerUser = async (data) => {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const loginUser = async (data) => {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getBooks = async () => {
  const res = await fetch(`${API_BASE}/books`);
  return res.json();
};

export const getCart = async (token) => {
  const res = await fetch(`${API_BASE}/cart`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const addToCart = async (bookId, token) => {
  const res = await fetch(`${API_BASE}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ bookId }),
  });
  return res.json();
};

export const removeFromCart = async (id, token) => {
  const res = await fetch(`${API_BASE}/cart/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};
