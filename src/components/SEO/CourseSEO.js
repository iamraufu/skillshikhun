import React from 'react';
import { Helmet } from 'react-helmet-async';

const CourseSEO = (props) => {

    const course = props.course
    let today = new Date().toISOString()

    return (
        <Helmet>
            <title>{course.seo_title}</title>
            <meta name="description" content={course.seo_description} />
            <meta name='keywords' content={course.seo_keywords} />
            <meta name='author' content = 'Skill Shikhun' />
            <meta name='publisher' content = 'Skill Shikhun' />
            <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
            <link rel="canonical" href={`https://skillshikhun.com${course.seo_URL}`} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={course.seo_title} />
            <meta property="og:description" content={course.seo_description} />
            <meta property="og:url" content={`https://skillshikhun.com${course.seo_URL}`} />
            <meta property="og:site_name" content={course.seo_title} />
            <meta property="og:updated_time" content={today} />
            <meta property="og:image" content={course.image} />
            <meta property="og:image:secure_url" content={course.image} />
            <meta property="og:image:width" content="361" />
            <meta property="og:image:height" content="361" />
            <meta property="og:image:alt" content={course.seo_title} />
            <meta property="og:image:type" content="image/png" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={course.seo_title} />
            <meta name="twitter:description" content={course.seo_description} />
            <meta name="twitter:image" content={course.image} />
        </Helmet>
    );
};

export default CourseSEO;