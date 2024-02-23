import { useEffect, useState } from "react";
import { Beer } from "../@types/types";
import { fetchPunkApi } from "../utils/api";
import BeerItem from "./BeerItem";
import './BeerList.css';
import Loader from "./Loader";

export default function BeerList({ fromEBC, toEBC }: { fromEBC: number, toEBC: number }) {
  const [beers, setBeers] = useState<Beer[] | null>(null);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    fetchBeers();
  }, [fromEBC, toEBC])

  const fetchBeers = async () => {
    try {
      setLoading(true);
      const beers: Beer[] = await fetchPunkApi(`?ebc_lt=${toEBC}&ebc_gt=${fromEBC}&per_page=10`);
      beers.sort((a, b) => a.ebc - b.ebc);
      setBeers(beers);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }


  return (
    <section className="beer-list-container">
      {loading && <Loader />}
      {beers && <ul className="beer-list">
        {beers.map(beer => <BeerItem key={beer.id} beer={beer} />)}
      </ul>}
    </section>
  )
}
