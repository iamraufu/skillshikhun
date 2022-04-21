import React from 'react';
import './CourseReview.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import reviewData from '../../data/course/reviewData';

const CourseReview = (props) => {
    const course = props.course;
    const review = reviewData.filter(review => review.courseName === course.slug);

    return (
        <div style={{ backgroundColor: 'white', borderRadius: '15px', border: '1px solid #ececec' }} className="course-review-container container mt-5">
            <h1 style={{ fontSize: '22px',lineHeight: '26px'}} className='text-center mt-4 pb-2 fw-bold'>আমাদের শিক্ষার্থীরা যা বলছে</h1>
            <AwesomeSlider className='review_slider'
  >
      {
        review.map(review => (
            <div key={review.id} className="review-container">
                <div className="">
                    <img style={{borderRadius:'50%'}} width={100} src={review.image} alt={review.name} className="img-fluid mx-auto d-block" />
                </div>
                <div className="px-2">
                    <h2 style={{ color: '#343b6d', fontSize: '22px' }} className='fw-bold text-center my-3'>{review.name}</h2>
                    <p style={{textAlign:'justify'}} className='px-3'>{review.description}</p>
                </div>
            </div>
        ))
    }
  </AwesomeSlider>
        </div>
    );
};

export default CourseReview;