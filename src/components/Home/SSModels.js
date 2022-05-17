import React from 'react';
import recorded_class from '../../images/recorded_class.png';
import live_class from '../../images/live_class.png';
// import tuition_solution from '../../images/tuition_solution.png';

const SSModels = () => {
    return (
        <div style={{ backgroundColor: 'rgb(243,245,249)' }} className="py-5">
            <div className='container'>
                <h2 style={{ fontSize: '32px', lineHeight: '46px', color: '#343b6d', fontWeight: '600' }} className='py-5 text-center'>আপনার প্রয়োজন অনুযায়ী আমাদের আছে দুটি স্মার্ট মডেল</h2>
                <div className="row">
                    
                    <div className='py-3 col-lg-6 col-xl-6 col-md-12'>
                        <div className="">
                            <h2 style={{ fontSize: '28px', lineHeight: '48px', fontWeight: '600', color: '#343b6d', backgroundColor: 'rgba(208,222,239,0.8)', padding: '16px', borderTopRightRadius: '20px', borderTopLeftRadius: '20px' }} className='text-center'>মডেল - ১</h2>
                            <div style={{ marginTop: '-10px', borderBottomRightRadius: '20px', borderBottomLeftRadius: '20px', height:'600px' }} className="bg-white py-5">
                                <img style={{ borderRadius: '15px' }} src={recorded_class} alt="video-lesson" width={'85%'} loading="lazy" className='img-fluid mx-auto d-block' />
                                <div style={{fontSize:'18px',lineHeight:'31px',fontWeight:'500',color:'#454c7e'}} className="row pt-5 ps-5">
                                    <div className="col-md-6">
                                        <p>⚡️ ভিডিও লেসন</p>
                                        <p>⚡️ প্রবলেম সলভিং</p>
                                        <p>⚡️ অ্যানালাইসিস</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p>⚡️ কুইজ এবং এক্সাম</p>
                                        <p>⚡️ ড্যাশবোর্ড</p>
                                        <p>⚡️ ভিডিও ডাউনলোড</p>
                                    </div>
                                </div>
                                <button className='see-details mx-auto d-block w-75'>বিস্তারিত দেখুন</button>
                            </div>

                        </div>
                    </div>

                    <div className='py-3 col-lg-6 col-xl-6 col-md-12'>
                        <div className="">
                            <h2 style={{ fontSize: '28px', lineHeight: '48px', fontWeight: '600', color: '#343b6d', backgroundColor: 'rgba(208,222,239,0.8)', padding: '16px', borderTopRightRadius: '20px', borderTopLeftRadius: '20px' }} className='text-center'>মডেল - ২</h2>
                            <div style={{ marginTop: '-10px', borderBottomRightRadius: '20px', borderBottomLeftRadius: '20px', height:'600px' }} className="bg-white py-5">
                                <img style={{ borderRadius: '15px' }} src={live_class} alt="live-class" width={'85%'} loading="lazy" className='img-fluid mx-auto d-block' />
                                <div style={{fontSize:'18px',lineHeight:'31px',fontWeight:'500',color:'#454c7e'}} className="row ps-5 pt-5">
                                    <div className="col-md-6">
                                        <p>⚡️ লাইভ ক্লাস</p>
                                        <p>⚡️ ওয়েব পোর্টাল</p>
                                        <p>⚡️ অ্যানালাইসিস</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p>⚡️ লেকচার স্লাইড</p>
                                        <p>⚡️ ড্যাশবোর্ড</p>
                                        <p>⚡️ ভিডিও ডাউনলোড</p>
                                    </div>
                                </div>
                                <button className='see-details mx-auto d-block w-75'>বিস্তারিত দেখুন</button>
                            </div>

                        </div>

                    </div>

                    {/* <div className='py-3 col-lg-4 col-xl-4 col-md-12'>
                        <div className="">
                            <h2 style={{ fontSize: '28px', lineHeight: '48px', fontWeight: '600', color: '#343b6d', backgroundColor: 'rgba(208,222,239,0.8)', padding: '16px', borderTopRightRadius: '20px', borderTopLeftRadius: '20px' }} className='text-center'>মডেল - ৩</h2>
                            <div style={{ marginTop: '-10px', borderBottomRightRadius: '20px', borderBottomLeftRadius: '20px', height:'600px' }} className="bg-white py-5">
                                <img style={{ borderRadius: '15px' }} src={tuition_solution} alt="live-class" width={'85%'} loading="lazy" className='img-fluid mx-auto d-block' />
                                <div style={{fontSize:'18px',lineHeight:'31px',fontWeight:'500',color:'#454c7e'}} className="row ps-5 pt-5">
                                    <div className="col-md-6">
                                        <p>⚡️ লাইভ ক্লাস</p>
                                        <p>⚡️ ওয়েব পোর্টাল</p>
                                        <p>⚡️ অ্যানালাইসিস</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p>⚡️ লেকচার স্লাইড</p>
                                        <p>⚡️ ড্যাশবোর্ড</p>
                                        <p>⚡️ ভিডিও ডাউনলোড</p>
                                    </div>
                                </div>
                                <button className='see-details mx-auto d-block mt-4 w-75'>বিস্তারিত দেখুন</button>
                            </div>

                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default SSModels;