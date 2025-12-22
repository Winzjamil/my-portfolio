import React from 'react';
import home from '../assets/images/home.JPG';
import cart from '../assets/images/cart.JPG';
import login from '../assets/images/login.JPG';
import signup from '../assets/images/signup.JPG';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
function Carousel() {
  const images = [home, signup, login, cart];

  return (
    <div className="w-full max-w-md mx-auto   rounded-t-lg gap-1 bg-gray-400 flex items-center flex-wrap">
      <p className="w-full text-center font-semibold ">Project Review</p>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className=" bg-black/70"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i} className="  rounded px-15 py-5">
            <img
              src={img}
              className="w-full h-64 object-fit rounded border border-stone-300"
              alt={i + 1}
            />
          </SwiperSlide>
        ))}{' '}
      </Swiper>
    </div>
  );
}

export default Carousel;
