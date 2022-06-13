import React from 'react';
import './SSFeatures.css';
import h24 from '../../../images/24Hour.svg';
import easy from '../../../images/easyToPractice.svg';
import hq from '../../../images/highQuality.svg';
import social from '../../../images/socialMedia.svg';
import AOS from 'aos';
import "aos/dist/aos.css";

const SSFeatures = () => {

    const featuresData =[
        {
            id:1,
            image: hq,
            title:'এক্সক্লুসিভ কন্টেন্ট',
            description:'সেরা এবং অভিজ্ঞ মেন্টরদের দ্বারা তৈরি ও যাচাইকৃত মানসম্মত কন্টেন্ট'
        },
        {
            id:2,
            image: social,
            title:'সোশ্যাল মিডিয়ায় নিয়মিত আপডেট',
            description:'কোর্স সম্পর্কিত আপডেট এবং তথ্য পাবেন নিয়মিত'
        },
        {
            id:3,
            image:h24,
            title:'২৪ ঘন্টা সাপোর্ট সিস্টেম',
            description:'সব প্রয়োজনে সহায়তার জন্য থাকছে সার্বক্ষনিক এক্টিভ সাপোর্ট টিম'
        },
        {
            id:4,
            image:easy,
            title:'হাতে-কলমে শেখানো',
            description:'কোর্সগুলো সাজানো হয়েছে পূর্ব অভিজ্ঞতা ছাড়া সকল মেধার শিক্ষার্থীর জন্য'
        }
    ]

    AOS.init({
        duration : 1000
    });

    return (
        <div className='container my-5 py-5'>
            <h2 style={{fontSize:'32px',lineHeight:'46px',color:'#343b6d',fontWeight:'600'}} className='text-center'>স্কিলশিখুন কেন বেছে নেবেন? <br /> ফিচারগুলো দেখে নিন!</h2>
            <div className="row">
                {
                    featuresData.map(feature => {
                        return (
                            <div key={feature.id} className='features-container col-xl-3 col-md-6 col-md-3 my-5'>
                                <div style={{backgroundColor:'rgb(243,245,249)',borderRadius:'20px',height:'310px'}} className='py-3'>
                                    <img style={{borderRadius:"15px"}} src={feature.image} width={120} alt={feature.title} className='img-fluid mx-auto d-block mt-3' loading="lazy" />
                                    <div className="mt-4">
                                        <h3 style={{fontSize:'20px', lineHeight:'30px', fontWeight:'600', color:'#343b6d'}} className="text-center">{feature.title}</h3>
                                        <p style={{fontSize:'16px', lineHeight:'24px', fontWeight:'500', color:'#454c7e'}} className="text-center px-4">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    }   
                    )}
            </div>
        </div>
    );
};

export default SSFeatures;