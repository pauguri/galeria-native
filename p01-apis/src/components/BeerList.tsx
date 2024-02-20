import { useEffect, useState } from "react"
import { fetchPunkApi } from "../utils/api"
import { Beer } from "../@types/types";
import Loader from "./Loader";
import './BeerList.css';
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import { colorFromEBC } from "../utils/colorUtils";
import { Pagination } from "swiper/modules";
import BeerSwiper from "./BeerSwiper";

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
      {beers && <div className="beer-list">
        <BeerSwiper beerArray={beers} />
      </div>}
    </section>
  )
}
