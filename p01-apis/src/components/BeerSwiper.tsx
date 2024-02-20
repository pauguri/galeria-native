import { Pagination } from 'swiper/modules';
import { Beer } from '../@types/types';
import { colorFromEBC } from '../utils/colorUtils';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

export default function BeerSwiper({ beerArray }: { beerArray: Beer[] }) {
  const [activeColor, setActiveColor] = useState<string>("#000");

  const updateActiveColor = (swiper: SwiperClass) => {
    const color = swiper.slides[swiper.activeIndex].dataset.color;
    if (color) {
      setActiveColor(color);
    }
  }

  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true, el: '.swiper-pagination' }}
      spaceBetween={32}
      slidesPerView={1}
      onAfterInit={updateActiveColor}
      onSlideChange={updateActiveColor}
      breakpoints={{
        1024: {
          slidesPerView: 1.2
        },
        1200: {
          slidesPerView: 1.5
        },
        1600: {
          slidesPerView: 1.8
        },
        1800: {
          slidesPerView: 2.2
        }
      }}
    >
      {beerArray.map((beer: Beer) => {
        const color = colorFromEBC(beer.ebc);
        return (
          <SwiperSlide key={beer.id} data-color={color} style={{ borderColor: color, backgroundColor: color + '22' }}>
            <div className="img-container">
              <img src={beer.image_url} alt={beer.name} />
            </div>
            <div className="content">
              <h2>{beer.name}</h2>
              <p className="tagline">{beer.tagline}</p>
              <p className="description">{beer.description}</p>
            </div>
          </SwiperSlide>
        )
      })}
      <div className="swiper-pagination" style={{ "--swiper-pagination-color": activeColor } as React.CSSProperties}></div>
    </Swiper>
  )
}
