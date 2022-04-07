import React from 'react';
import './SSFeatures.css';
import h24 from '../../images/24Hour.svg';
import easy from '../../images/easyToPractice.svg';
import hq from '../../images/highQuality.svg';
import social from '../../images/socialMedia.svg';

const SSFeatures = () => {

    const featuresData =[
        {
            id:1,
            image: hq,
            title:'হাই কোয়ালিটি কন্টেন্ট',
            description:'সেরা এবং অভিজ্ঞ মেন্টরদের দ্বারা তৈরি ও যাচাইকৃত মানসম্মত কন্টেন্ট। তাছাড়া কোর্সগুলো করতে কোনো পূর্ব অভিজ্ঞতারও প্রয়োজন নেই'
        },
        {
            id:2,
            image: social,
            title:'সোশ্যাল মিডিয়ায় নিয়মিত আপডেট',
            description:'আমাদের কোর্স সম্পর্কিত রেগুলার আপডেট এবং ক্লাসের সময়, সিলেবাস বা কোর্স ফি এর উপর ডিস্কাউট অফারসহ যেকোনো তথ্য পেতে আমাদের সোশ্যাল মিডিয়ার সাথে যুক্ত থাকুন'
        },
        {
            id:3,
            image:h24,
            title:'২৪ ঘন্টা সাপোর্ট সিস্টেম',
            description:'আপনাদের ছোট-বড় সব প্রয়োজনে সহায়তা করার জন্য নির্দ্বিধায় যোগাযোগ করুন আমাদের সার্বক্ষনিক এক্টিভ সাপোর্ট টিমের সাথে'
        },
        {
            id:4,
            image:easy,
            title:'সহজ ও সাবলীল উপস্থাপন',
            description:'কোর্সগুলো সহজ ও সাবলীলভাবে সাজানো হয়েছে সকল মেধার শিক্ষার্থীর জন্য। এছাড়াও প্রতিটি লাইভ কোর্সে ক্লাসের সাথে থাকছে পর্যাপ্ত প্রব্লেম সলভিং সেশন'
        }
    ]

    return (
        <div className='container my-5 py-5'>
            <h2 style={{fontSize:'32px',lineHeight:'46px',color:'#343b6d',fontWeight:'600'}} className='text-center'>স্কিলশিখুন কেন বেছে নেবেন? <br /> ফিচারগুলো দেখে নিন!</h2>
            <div className="row">
                {
                    featuresData.map(feature => {
                        return (
                            <div key={feature.id} className='features-container col-xl-3 col-md-6 col-md-3 my-5'>
                                <div style={{backgroundColor:'rgb(243,245,249)',borderRadius:'20px',height:'360px'}} className='py-3'>
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