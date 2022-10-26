import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";

import hq from '../../images/highQuality.svg'
import sm from '../../images/socialMedia.svg'
import hr from '../../images/24Hour.svg'
import ep from '../../images/easyToPractice.svg'

const LoginSlider = () => {
    return (
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper pb-5"
            >
                <SwiperSlide className='d-none d-lg-block'>
                    <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src={hq} alt='Course' />
                    <h3 style={{ fontSize: '20px', lineHeight: '30px', fontWeight: '600', color: '#343b6d' }} className="text-center">এক্সক্লুসিভ কন্টেন্ট</h3>
                </SwiperSlide>

                <SwiperSlide className='d-none d-lg-block'>
                    <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src={sm} alt='Course' />
                    <h3 style={{ fontSize: '20px', lineHeight: '30px', fontWeight: '600', color: '#343b6d' }} className="text-center">সোশ্যাল মিডিয়ায় নিয়মিত আপডেট</h3>
                </SwiperSlide>

                <SwiperSlide className='d-none d-lg-block'>
                    <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src={hr} alt='Course' />
                    <h3 style={{ fontSize: '20px', lineHeight: '30px', fontWeight: '600', color: '#343b6d' }} className="text-center">২৪ ঘন্টা সাপোর্ট সিস্টেম</h3>
                </SwiperSlide>

                <SwiperSlide className='d-none d-lg-block'>
                    <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src={ep} alt='Course' />
                    <h3 style={{ fontSize: '20px', lineHeight: '30px', fontWeight: '600', color: '#343b6d' }} className="text-center">হাতে-কলমে শেখানো</h3>
                </SwiperSlide>

            </Swiper>
    );
};

export default LoginSlider;