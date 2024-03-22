const API_URL = "https://api.punkapi.com/v2";

export const fetchPunkApi = async (params: string) => {

  if (!params.startsWith("?")) {
    params = "?" + params;
  }

  const res = await fetch(`${API_URL}/beers${params}`);

  if (!res.ok) {
    throw new Error("Error fetching data from the API");
  }

  console.log("Rate limit remaining: " + res.headers.get('x-ratelimit-remaining'))
  return res.json();
}