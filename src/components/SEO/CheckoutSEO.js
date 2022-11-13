import React from 'react';
import { Helmet } from 'react-helmet-async';

const CheckoutSEO = (props) => {

    const course = props.course

    return (
        <Helmet>
            <title>Checkout - {course.seo_title}</title>
        </Helmet>
    );
};

export default CheckoutSEO;