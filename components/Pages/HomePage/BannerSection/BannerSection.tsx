"use client";

import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Container from "../../../Global/Container";
import BannerCard from "./BannerCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const BannerSection = () => {
  return (
    <Container className=''>
      <h1 className='text-2xl lg:text-4xl text-center mt-9 lg:mt-16 font-black'>Trending</h1>

      {/* Banner card */}
      <div className='mt-8'>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ disableOnInteraction: true, delay: 2500, reverseDirection: false }}
          loop
        >
          <SwiperSlide className='!w-full'>
            <BannerCard />
          </SwiperSlide>
          <SwiperSlide className='!w-full'>
            <BannerCard />
          </SwiperSlide>
          <SwiperSlide className='!w-full'>
            <BannerCard />
          </SwiperSlide>
          <SwiperSlide className='!w-full'>
            <BannerCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};

export default BannerSection;
