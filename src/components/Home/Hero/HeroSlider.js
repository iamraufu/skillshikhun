import React from 'react';
import './HeroSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import courseData from '../../../data/course/courseData';
import { Link } from 'react-router-dom';
import f400 from '../../../images/courses/f400.png'
import ve400 from '../../../images/courses/ve400.png'
import dm400 from '../../../images/courses/dm400.png'
import gd400 from '../../../images/courses/gd400.png'
import wd400 from '../../../images/courses/wd400.png'

const HeroSlider = () => {

    return (
        <section
            style={{ marginTop: '-2rem' }}
            className="">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    courseData.map(course =>
                        <>
                            <SwiperSlide>
                                <Link to={course.route}>
                                    <div className="container">
                                        <div className="d-flex">
                                            <div className="col-sm-4">
                                                <img className='img-fluid mx-auto d-block swiper_image p-5' src={f400} alt={course.name} />
                                            </div>

                                            <div className="col-sm-4">
                                                <img className='img-fluid mx-auto d-block swiper_image p-5' src={ve400} alt={course.name} />
                                            </div>

                                            <div className="col-sm-4">
                                                <img className='img-fluid mx-auto d-block swiper_image p-5' src={dm400} alt={course.name} />
                                            </div>

                                            <div className="col-sm-4">
                                                <img className='img-fluid mx-auto d-block swiper_image p-5' src={gd400} alt={course.name} />
                                            </div>

                                            <div className="col-sm-4">
                                                <img className='img-fluid mx-auto d-block swiper_image p-5' src={wd400} alt={course.name} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        </>
                    )
                }
            </Swiper>
        </section>
    );
};

export default HeroSlider;