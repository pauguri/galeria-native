import { useRef, useState } from 'react';
import './App.css';
import Logo from './assets/logo.png';
import Loader from './components/Loader';
import { fetchGiphyApi } from './api';

function App() {
  const inputElement = useRef<HTMLInputElement>(null);
  const [results, setResults] = useState<GiphyImageData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputElement.current && inputElement.current.value.length > 0) {
      fetchGifs(inputElement.current.value);
    } else {
      setResults([]);
    }
  }

  const fetchGifs = async (query: string) => {
    try {
      setResults([]);
      setLoading(true);

      const data = await fetchGiphyApi(query);
      setResults(data.data);
      setError(null);
    } catch (error: any) {
      setError('https://http.cat/' + error.status);
    } finally {
      setLoading(false);
    }
  }

  const reset = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    event.preventDefault();
    setResults([]);
    setError(null);
    setLoading(false);

    if (inputElement.current) {
      inputElement.current.value = '';
    }
  }

  return (
    <main>
      <form className='search' onSubmit={handleSubmit}>
        <img className='logo' src={Logo} alt='Giphy Logo' onClick={reset} />
        <input type="text" placeholder="Search for gifs" ref={inputElement} />
        <button type="submit">Search</button>
      </form>

      {loading && <Loader />}

      {error && <div className='error'>
        <img src={error} alt='Error' />
      </div>}

      <div className='results'>
        {results.map((result) => (
          <img key={result.id} src={result.images.original.url} alt={result.title} />
        ))}
      </div>
    </main>
  )
}

export default App
