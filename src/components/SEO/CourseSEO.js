import React from 'react';
import { Helmet } from 'react-helmet-async';

const CourseSEO = (props) => {

    console.log(props)

    return (
        <Helmet>
        <title>{}</title>
        <meta name="description" content='' />
        <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <link rel="canonical" href="https://skillshikhun.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Skill Shikhun - Learn Digital Skills via LIVE Online Class" />
        <meta property="og:description" content="Learn Digital Skills via LIVE Online classes from Great Instructors and build a career in Digital Marketing, Video Editing, Graphics Design or Web Development." />
        <meta property="og:url" content="https://skillshikhun.com/" />
        <meta property="og:site_name" content="Skill Shikhun" />
        <meta property="og:updated_time" content="2022-03-01T10:41:31+00:00" />
        <meta property="og:image" content="https://i.ibb.co/9H0D8ky/logo.png" />
        <meta property="og:image:secure_url" content="https://i.ibb.co/9H0D8ky/logo.png" />
        <meta property="og:image:width" content="361" />
        <meta property="og:image:height" content="361" />
        <meta property="og:image:alt" content="Skill Shikhun" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Skill Shikhun - Learn Digital Skills via LIVE Online Class" />
        <meta name="twitter:description" content="Learn Digital Skills via LIVE Online classes from Great Instructors and build a career in Digital Marketing, Video Editing, Graphics Design or Web Development." />
        <meta name="twitter:image" content="https://i.ibb.co/9H0D8ky/logo.png" />
      </Helmet>
    );
};

export default CourseSEO;