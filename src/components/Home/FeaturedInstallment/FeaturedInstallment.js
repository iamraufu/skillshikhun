import React from 'react';
import { Link } from 'react-router-dom';
import InstallMentsImage from '../../../images/Installments.png';

const FeaturedInstallment = () => {
    return (
        <section className='container my-5'>
            <div className="row justify-content-center align-items-center py-5">
                <div className="col-md-6 my-4">
                    <h2 className='fw-bold fs-4 p-2'>বাংলাদেশের এই প্রথম কিস্তিতে পেমেন্ট করার সুব্যবস্থা ! ! !</h2>
                    <p style={{textAlign: 'justify'}} className='text-muted p-2'>স্কিল শিখে কাজ করতে চাচ্ছেন কিন্তু ফি পরিশোধ করতে পারছেন না? ২মাস কিংবা ৩মাস মেয়াদি যেকোনো কোর্স এ পাচ্ছেন কিস্তিতে ফি পরিশোধ এর সুব্যবস্থা | আগে আসলে আগে পাবেন ভিত্তিতে সিট কিন্তু সীমিত ! ! </p>
                    <Link to='/courses'><button className='see-details-fade text-black fw-bold px-5 py-2'>কোর্স সমূহ</button></Link>
                </div>
                <div className="col-md-6 my-4">
                    <img width={400} style={{borderRadius: '15px'}} className="img-fluid mx-auto d-block" src={InstallMentsImage} alt="Installments Pay" />
                </div>
            </div>
        </section>
    );
};

export default FeaturedInstallment;