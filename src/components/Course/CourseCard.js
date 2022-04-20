import React from 'react';

const CourseCard = (props) => {

    const course = props.course;

    return (
        <div className="row">
            <div className="col-sm-6">
                <div style={{ top: '120px', borderRadius: '25px' }} className="position-sticky">
                    <h1 style={{ fontSize: '22px', lineHeight: '32px' }} className='text-center course-alt-title fw-bold'>{course.alt_title}</h1>

                    <div className="responsive-embed-youtube">
                        <iframe className='' width="100%" height='auto' src={`${course.source}?controls=0`} title={course.slug} style={{ borderRadius: '22px' }} allowFullScreen srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=${course.source}?controls=0><img src=${course.image} alt=${course.alt_title} loading="lazy"><span>▶</span></a>`}
                        ></iframe>
                    </div>

                    <div style={{ marginTop: '-1rem', backgroundColor: 'white', borderRadius: '15px', border: '1px solid #ececec' }} className="container row">
                        <div className="col-md-6">
                            <h2 style={{ fontSize: '20px', lineHeight: '30px' }} className='fs-4 text-center'>{course.next_batch} ২০২২ ব্যাচ এ ভর্তি চলছে</h2>
                        </div>
                        <div className="col-md-6">
                            <h2 style={{ textAlign: 'right' }} className='fs-3 me-2 fw-bold'>&#2547; {course.offer_price_per_month}/মাস</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;