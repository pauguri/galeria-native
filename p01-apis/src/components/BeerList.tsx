import { useEffect, useState } from "react";
import { Beer, ErrorWithStatus, NumberRange } from "../@types/types";
import { fetchPunkApi } from "../utils/api";
import BeerItem from "./BeerItem";
import './BeerList.css';
import Loader from "./Loader";

export default function BeerList({ ebcRange }: { ebcRange: NumberRange }) {
  const [beers, setBeers] = useState<Beer[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBeers();
  }, [ebcRange])

  const fetchBeers = async () => {
    try {
      setBeers(null);
      setError(null);
      setLoading(true);

      const beers: Beer[] = await fetchPunkApi(`?ebc_lt=${ebcRange.to}&ebc_gt=${ebcRange.from}&per_page=10`);
      beers.sort((a, b) => a.ebc - b.ebc);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setBeers(beers);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  }


  return (
    <section className="beer-list-container">
      {loading && <Loader />}
      {error && <div className="error">{error}</div>}
      {beers && <ul className="beer-list">
        {beers.map(beer => <BeerItem key={beer.id} beer={beer} />)}
      </ul>}
    </section>
  )
}
