import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";

const FeaturedSlider = () => {
    
    return (
        <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper pb-5"
            >
                <SwiperSlide>
                    
                </SwiperSlide>
            </Swiper>
    );
};

export default FeaturedSlider;