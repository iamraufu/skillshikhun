import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import reviews from '../../../data/course/reviewData';

import Slider from "react-slick";
import { Link, useNavigate } from 'react-router-dom';

const MainReviews = () => {

    const navigate = useNavigate();

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000
    };

    return (
        <div className='container d-none d-lg-block'>
            <h1 style={{ fontSize: '30px', lineHeight: '38px', fontWeight: '600', color: '#343b6d', textAlign: 'center' }}>টেস্টিমোনিয়াল</h1>

            <div className='my-5'>

                <Slider {...settings}>
                    {
                        reviews.map(review =>
                            <div style={{maxHeight:'260px'}} key={review.id} className='p-2'>
                                <div style={{ backgroundColor: 'white', boxShadow: '0 5px 15px #c4c4c44d', minHeight:'260px' }} className="">
                                    <div style={{ backgroundColor: '#f3f5f9' }} className="d-flex my-2 p-2">
                                        <div className="">
                                            <img style={{ borderRadius: '50%' }} width={60} src={review.image} alt={review.courseName} />
                                        </div>
                                        <div className="ms-2">
                                            <h3 style={{ fontSize: '18px', lineHeight: '26px',fontWeight:'700', color: '#343b6d' }}>{review.name}</h3>
                                            <Link onClick={()=>{
                                                window.scrollTo(0, 0)
                                                navigate(review.route)
                                                }} to={review.route} className='text-decoration-none'><h5 style={{ fontSize: '16px', lineHeight: '24px', color: '#343b6d' }}>{review.courseName}</h5></Link>
                                        </div>
                                    </div>
                                    {review.description.length > 250 ?
                                        <p style={{ fontSize: '14px', lineHeight: '22px', color: 'grey', textAlign: 'justify' }} className='mt-2 p-2'>{review.description.slice(0, 250)} ...</p> : <p style={{ fontSize: '14px', lineHeight: '22px', color: 'grey', textAlign: 'justify' }} className='mt-2 p-2'>{review.description}</p>
                                    }
                                </div>
                            </div>
                        )
                    }
                </Slider>
            </div>
        </div>
    );
};

export default MainReviews;