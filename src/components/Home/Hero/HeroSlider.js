import React from 'react';
import './HeroSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';
// import fl from '../../../images/courses/offer/FL.png'
import ve from '../../../images/courses/offer/VE.png'
import dm from '../../../images/courses/offer/DM.png'
import gd from '../../../images/courses/offer/GD.png'
import wd from '../../../images/courses/offer/WD.png'

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
                        {/* <div className="col-sm-2">
                            <Link to='/'>
                                <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src={fl} alt='Course' />
                            </Link>
                        </div> */}

                        <div className="col-sm-2">
                            <Link to='/video-editing'>
                                <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src={ve} alt='Course' />
                            </Link>
                        </div>

                        <div className="col-sm-2">
                            <Link to='/graphics-design'>
                                <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src={gd} alt='Course' />
                            </Link>
                        </div>

                        <div className="col-sm-2">
                            <Link to='/web-development'>
                                <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src={wd} alt='Course' />
                            </Link>
                        </div>

                        <div className="col-sm-2">
                            <Link to='/digital-marketing'>
                                <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src={dm} alt='Course' />
                            </Link>
                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide className='d-lg-none pb-5'>
                    <div className="d-flex justify-content-center ">
                        {/* <div className="col-sm-6">
                            <Link to='/'>
                                <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src={fl} alt='Course' />
                            </Link>
                        </div> */}

                        <div className="col-sm-6">
                            <Link to='/digital-marketing'>
                                <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src={dm} alt='Course' />
                            </Link>
                        </div>

                        <div className="col-sm-6">
                            <Link to='/video-editing'>
                                <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src={ve} alt='Course' />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='d-lg-none pb-5'>
                    <div className="d-flex justify-content-center ">
                        <div className="col-sm-6">
                            <Link to='/graphics-design'>
                                <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src={gd} alt='Course' />
                            </Link>
                        </div>

                        <div className="col-sm-6">
                            <Link to='/web-development'>
                                <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src={wd} alt='Course' />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                {/* <SwiperSlide className='d-lg-none pb-5'>
                    <div className="d-flex justify-content-center ">

                        <div className="col-sm-6">
                             <Link to='/'>
                                <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src={fl} alt='Course' />
                            </Link>
                        </div>

                        <div className="col-sm-6">
                            <Link to='/digital-marketing'>
                                <img width={200} style={{ borderRadius: '15px' }} className='img-fluid mx-auto d-block swiper_image p-2' src={dm} alt='Course' />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide> */}
            </Swiper>
        </section>
    );
};

export default HeroSlider;