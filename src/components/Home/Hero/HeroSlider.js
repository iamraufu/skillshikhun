import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';

import FG from '../../../images/courses/fg/FG.png'
import VE from '../../../images/courses/1_9/VE.png'
import DM from '../../../images/courses/1_9/DM.png'
import GD from '../../../images/courses/1_9/GD.png'
import WD from '../../../images/courses/1_9/WD.png'

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
                                <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src={FG} alt='Course' />
                            </Link>
                        </div>

                        <div className="col-sm-2">
                            <Link onClick={() => { window.scrollTo(0, 0); }} to='/web-development'>
                                <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src={WD} alt='Course' />
                            </Link>
                        </div>

                        <div className="col-sm-2">
                            <Link onClick={() => { window.scrollTo(0, 0); }} to='/video-editing'>
                                <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src={VE} alt='Course' />
                            </Link>
                        </div>

                        <div className="col-sm-2">
                            <Link onClick={() => { window.scrollTo(0, 0); }} to='/graphics-design'>
                                <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src={GD} alt='Course' />
                            </Link>
                        </div>

                        <div className="col-sm-2">
                            <Link onClick={() => { window.scrollTo(0, 0); }} to='/digital-marketing'>
                                <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src={DM} alt='Course' />
                            </Link>
                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide className='d-lg-none pb-5'>
                    <div className="d-flex justify-content-center ">
                        <div className="col-sm-6">
                            <Link onClick={() => { window.scrollTo(0, 0); }} to='/shobar-jnno-freelancing'>
                                <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src={FG} alt='Course' />
                            </Link>
                        </div>

                        <div className="col-sm-6">
                            <Link onClick={() => { window.scrollTo(0, 0); }} to='/web-development'>
                                <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src={WD} alt='Course' />
                            </Link>
                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide className='d-lg-none pb-5'>
                    <div className="d-flex justify-content-center ">
                        <div className="col-sm-6">
                            <Link onClick={() => { window.scrollTo(0, 0); }} to='/digital-marketing'>
                                <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src={DM} alt='Course' />
                            </Link>
                        </div>

                        <div className="col-sm-6">
                            <Link onClick={() => { window.scrollTo(0, 0); }} to='/graphics-design'>
                                <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src={GD} alt='Course' />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='d-lg-none pb-5'>
                    <div className="d-flex justify-content-center ">
                        <div className="col-sm-6">
                            <Link onClick={() => { window.scrollTo(0, 0); }} to='/shobar-jnno-freelancing'>
                                <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src={FG} alt='Course' />
                            </Link>
                        </div>

                        <div className="col-sm-6">
                            <Link onClick={() => { window.scrollTo(0, 0); }} to='/video-editing'>
                                <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src={VE} alt='Course' />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default HeroSlider;