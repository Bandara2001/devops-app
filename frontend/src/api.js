const API_BASE = "http://localhost:5000/api"; // Or container name in Docker

// Register user
export const registerUser = async (data) => {
  // Split name into firstName and lastName if provided
  const nameParts = data.name.trim().split(" ");
  const firstName = nameParts[0] || data.name;
  const lastName = nameParts.slice(1).join(" ") || "";

  const payload = {
    firstName,
    lastName,
    username: data.email, // backend expects username
    email: data.email,
    password: data.password,
    age: data.age || 20, // default age if not provided
  };

  const res = await fetch(`${API_BASE}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return res.json();
};

// Login user
export const loginUser = async (data) => {
  const payload = {
    username: data.email, // backend expects username
    password: data.password,
  };

  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return res.json();
};

// Get books
export const getBooks = async () => {
  const res = await fetch(`${API_BASE}/books`);
  return res.json();
};

// Get cart items
export const getCart = async (token) => {
  const res = await fetch(`${API_BASE}/cart`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

// Add to cart
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

// Remove from cart
export const removeFromCart = async (id, token) => {
  const res = await fetch(`${API_BASE}/cart/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};
