const API_URL = process.env.MIDDLEWARE_URL || "http://localhost:8081"

export async function fetchFromMiddleware(endpoint: string, options = {}) {
  const res = await fetch(`${API_URL}${endpoint}`, options)

  if (!res.ok) {
    throw new Error(`Error: ${res.status}`)
  }

  return res.json();
}
