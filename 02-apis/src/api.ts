const API_ENDPOINT = "https://api.giphy.com/v1/gifs/search/";
const API_KEY = "eV7EZhlXZA8iHzVIxnRU34zcW3mb320J";

export async function fetchGiphyApi(query: string, limit = 5): Promise<GiphyAPIResponse> {
    const res = await fetch(`${API_ENDPOINT}?api_key=${API_KEY}&q=${query}&limit=${limit}`);
    if (!res.ok) {
        throw new Error();
    }
    return await res.json();
}