import React from 'react';
import './HeroSlider.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';

const HeroSlider = () => {

    return (
        <section className="">
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
                <SwiperSlide className='d-none d-lg-block'>
                    <div className="d-flex justify-content-center ">
                        <div className="col-sm-2">
                            <Link onClick={() => { window.scrollTo(0, 0); }} to='/shobar-jnno-freelancing'>
                                <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src='https://cdn.skillshikhun.com/images/courses/fg/FG.png' alt='Course' />
                            </Link>
                        </div>

                        <div className="col-sm-2">
                            <Link onClick={() => { window.scrollTo(0, 0); }} to='/video-editing'>
                                <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src='https://cdn.skillshikhun.com/images/courses/1500/VE.png' alt='Course' />
                            </Link>
                        </div>

                        <div className="col-sm-2">
                            <Link onClick={() => { window.scrollTo(0, 0); }} to='/graphics-design'>
                                <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src='https://cdn.skillshikhun.com/images/courses/1500/GD.png' alt='Course' />
                            </Link>
                        </div>

                        <div className="col-sm-2">
                            <Link onClick={() => { window.scrollTo(0, 0); }} to='/web-development'>
                                <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src='https://cdn.skillshikhun.com/images/courses/1500/WD.png' alt='Course' />
                            </Link>
                        </div>

                        <div className="col-sm-2">
                            <Link onClick={() => { window.scrollTo(0, 0); }} to='/digital-marketing'>
                                <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src='https://cdn.skillshikhun.com/images/courses/1500/DM.png' alt='Course' />
                            </Link>
                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide className='d-lg-none pb-5'>
                    <div className="d-flex justify-content-center ">
                        <div className="col-sm-6">
                            <Link onClick={() => { window.scrollTo(0, 0); }} to='/shobar-jnno-freelancing'>
                                <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src='https://cdn.skillshikhun.com/images/courses/fg/FG.png' alt='Course' />
                            </Link>
                        </div>

                        <div className="col-sm-6">
                            <Link onClick={() => { window.scrollTo(0, 0); }} to='/web-development'>
                                <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src='https://cdn.skillshikhun.com/images/courses/1500/WD.png' alt='Course' />
                            </Link>
                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide className='d-lg-none pb-5'>
                    <div className="d-flex justify-content-center ">
                        <div className="col-sm-6">
                            <Link onClick={() => { window.scrollTo(0, 0); }} to='/digital-marketing'>
                                <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src='https://cdn.skillshikhun.com/images/courses/1500/DM.png' alt='Course' />
                            </Link>
                        </div>

                        <div className="col-sm-6">
                            <Link onClick={() => { window.scrollTo(0, 0); }} to='/graphics-design'>
                                <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src='https://cdn.skillshikhun.com/images/courses/1500/GD.png' alt='Course' />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='d-lg-none pb-5'>
                    <div className="d-flex justify-content-center ">
                        <div className="col-sm-6">
                            <Link onClick={() => { window.scrollTo(0, 0); }} to='/shobar-jnno-freelancing'>
                                <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src='https://cdn.skillshikhun.com/images/courses/fg/FG.png' alt='Course' />
                            </Link>
                        </div>

                        <div className="col-sm-6">
                            <Link onClick={() => { window.scrollTo(0, 0); }} to='/video-editing'>
                                <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src='https://cdn.skillshikhun.com/images/courses/1500/VE.png' alt='Course' />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default HeroSlider;