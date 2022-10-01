import React from 'react';
import './CourseReview.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import reviewData from '../../data/course/reviewData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const CourseReview = (props) => {
    const course = props.course;
    const review = reviewData.filter(review => review.courseName === course?.slug);
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <div style={{ backgroundColor: 'white', borderRadius: '15px', border: '1px solid #ececec', margin: '10rem 0'}} className="course-review-container container mt-5">
            <h1 style={{ fontSize: '20px', lineHeight: '26px', fontWeight: '400' }} className='text-center mt-4 pb-2 fw-bold'>আমাদের শিক্ষার্থীরা যা বলছে</h1>
            <AutoplaySlider 
            play={true}
            cancelOnInteraction={false}
            interval={10000}
            className='review_slider'>
      {
        review.map(review => (
            <div key={review.id} className="review-container">
                <div className="">
                    <img style={{borderRadius:'50%'}} width={60} src={review.image} alt={review.name} className="img-fluid mx-auto d-block" />
                </div>
                <div className="px-2">
                    <h2 style={{ color: '#343b6d', fontSize: '22px' }} className='fw-bold text-center my-3'>{review.name}</h2>
                    <p style={{textAlign:'justify'}} className='px-3'>{review.description}</p>
                    <div className="d-flex justify-content-center">
                        <FontAwesomeIcon style={{ fontSize: '16px', lineHeight: '24px' }} className='text-warning' icon={faStar} />
                        <FontAwesomeIcon style={{ fontSize: '16px', lineHeight: '24px' }} className='text-warning' icon={faStar} />
                        <FontAwesomeIcon style={{ fontSize: '16px', lineHeight: '24px' }} className='text-warning' icon={faStar} />
                        <FontAwesomeIcon style={{ fontSize: '16px', lineHeight: '24px' }} className='text-warning' icon={faStar} />
                        <FontAwesomeIcon style={{ fontSize: '16px', lineHeight: '24px' }} className='text-warning' icon={faStar} />
                        <small className="ps-2 text-center">(5.0)</small>
                    </div>
                </div>
            </div>
        ))
    }
  </AutoplaySlider>
        </div>
    );
};

export default CourseReview;