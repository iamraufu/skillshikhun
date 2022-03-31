import React from 'react';
import './SSFeatures.css';

const SSFeatures = () => {

    const featuresData =[
        {
            id:1,
            image: 'https://via.placeholder.com/150/92c952',
            title:'হাই কোয়ালিটি কন্টেন্ট',
            description:'সেরা মেন্টরদের তৈরি ও যাচাইকৃত প্রতিটি কন্টেন্ট উন্নত মানসম্মত'
        },
        {
            id:2,
            image: 'https://via.placeholder.com/150/771796',
            title:'স্টাডি ম্যাটেরিয়াল',
            description:'ভিডিও, স্মার্টনোট, লাইভ ক্লাস, কুইজ সহ আছে প্রয়োজনীয় সবকিছু!'
        },
        {
            id:3,
            image:'https://via.placeholder.com/150/f66b97',
            title:'সাবলীল উপস্থাপন',
            description:'সকল মেধার শিক্ষার্থীর জন্য সহজ ও সাবলীল উপস্থাপন!'
        },
        {
            id:4,
            image:'https://via.placeholder.com/150/56a8c2',
            title:'স্বল্প খরচে অনেক কিছু',
            description:'স্বল্প মূল্যে সেরা ইন্সট্রাক্টরদের গাইডলাইন ও পড়াশোনার উপকরণ!'
        }
    ]

    return (
        <div className='container my-5 py-5'>
            <h2 style={{fontSize:'32px',lineHeight:'46px',color:'#343b6d',fontWeight:'600'}} className='text-center'>ক্যারিয়ার এ সফল হওয়ার জন্য স্কিল শিখুন এর <br /> ফিচারগুলো দেখে নিন !</h2>
            <div className="row">
                {
                    featuresData.map(feature => {
                        return (
                            <div key={feature.id} className='features-container col-xl-3 col-md-6 col-md-3 my-5'>
                                <div style={{backgroundColor:'rgb(243,245,249)',borderRadius:'20px'}} className='py-3'>
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