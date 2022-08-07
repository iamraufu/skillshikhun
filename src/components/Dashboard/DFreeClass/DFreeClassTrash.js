import React from 'react';

const DFreeClassTrash = () => {
    return (
        <div style={{ borderRadius: '10px' }} className="col-md-5 bg-white dashboard-content-card">
            <div style={{ margin: 'auto' }}>

                {
                    demoClasses?.length === 1 &&
                    <div className="row justify-content-center">
                        <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700', textAlign: 'center' }} className='mt-3'>আপনার ফ্রি ক্লাস সমূহ</h2>
                        {freeClasses?.map(course => {
                            return (
                                <div key={course.id} className='col-xl-10 col-md-12 my-3'>
                                    {/* <Link className='text-decoration-none' to='/'> */}
                                    <div style={{ border: '1px solid #dde7f3' }}>

                                        <div
                                            // style={{ minHeight: '120px' }} 
                                            className="bg-white py-3">
                                            <h3 style={{ fontSize: '16px', lineHeight: '26px', fontWeight: '600', color: '#354895' }} className='px-3'><span style={{ color: '#b94a8f' }}>{course.title}</span>
                                                <br />তারিখ - <small>{course.class_date_1}</small></h3>
                                            <h4 style={{ fontSize: '16px', lineHeight: '26px', fontWeight: '600', color: '#069654' }} className=' px-3 price mt-2'>
                                                <span style={{ color: '#354895', fontSize: '14px' }}>সময়: </span>{course.class_time}<small style={{ color: '#354895' }}></small>
                                            </h4>

                                            {/* <h2 style={{ color: '#b94a8f' }} className='fs-6 text-center my-3'>লাইভ ক্লাস শুরু হতে সময় বাকি</h2> */}
                                            <Countdown
                                                deadline={course.class_date_1_deadline}
                                                text={'লাইভ ক্লাস শুরু হতে সময় বাকি'}
                                            />

                                        </div>

                                        <div style={{
                                            // justifyContent: 'center', 
                                            backgroundColor: 'rgb(236,238,255)'
                                        }} className="d-flex py-3 justify-content-between">
                                            {
                                                userPhoneData?.name ?
                                                    <>
                                                        <div className="px-2">
                                                            <button style={{ height: '40px', backgroundColor: '#5468ff' }} onClick={() => getSignature(course.free_number, course.free_password)} className='see-details text-white'>জয়েন লাইভ ক্লাস</button>

                                                            {/* <div onClick={()=> navigate('/dashboard/previous/free-class/' + course.id)} style={{ backgroundColor: '#f1f1f1', borderRadius: '15px', cursor:'pointer', fontSize:'14px', boxShadow: '0 5px 5px #c4c4c44d' }} className="p-3 text-center m-3"><img src={video_library} width={20} alt={course.title} /> ক্লাসের ভিডিও দেখুন</div> */}
                                                        </div>
                                                        <div onClick={() => navigate('/dashboard/previous/free-class/' + course.id)} className="px-2"><button className='class-video'>ক্লাসের ভিডিও দেখুন</button></div>
                                                    </>
                                                    :
                                                    <button className='see-details-fade w-100'><div className="spinner-border" style={{ height: '15px', width: '15px' }} role="status">
                                                    </div> জয়েন ক্লাস</button>
                                            }
                                        </div>
                                    </div>
                                    {/* </Link> */}
                                    {/* <p className='text-center mt-2 text-primary'>অথবা ভিডিও দেখুন</p>
                                                            <div onClick={()=> navigate('/dashboard/previous/free-class/' + course.id)} style={{ backgroundColor: '#f1f1f1', borderRadius: '15px', cursor:'pointer', fontSize:'14px', boxShadow: '0 5px 5px #c4c4c44d' }} className="p-3 text-center m-3"><img src={video_library} width={20} alt={course.title} /> {course.title}</div> */}
                                </div>
                            )
                        })}

                        {/* {
                                                freeClasses.map(course =>
                                                    <div key={course.id} style={{
                                                        justifyContent: 'center', minHeight: '150px'
                                                        // , backgroundColor: 'rgb(236,238,255)' 
                                                    }}
                                                        // className="d-flex py-3"
                                                        className='col-xl-8 py-3'
                                                    >
                                                        {
                                                            userPhoneData?.name ?
                                                                <button onClick={() => getSignature(course.free_number, course.free_password)}
                                                                    className='see-details w-100 mx-1'
                                                                >{course.title} জয়েন ক্লাস</button>
                                                                :
                                                                <button className='see-details-fade w-100'><div className="spinner-border" style={{ height: '15px', width: '15px' }} role="status">
                                                                </div> {course.title} জয়েন ক্লাস</button>
                                                        }
                                                        <p className='text-center mt-2 text-primary'>অথবা ভিডিও দেখুন</p>
                                                        <div onClick={() => navigate('/dashboard/previous/free-class/' + course.id)} style={{ backgroundColor: '#f1f1f1', borderRadius: '15px', cursor: 'pointer', fontSize: '14px', boxShadow: '0 5px 5px #c4c4c44d', border: '1px solid lightgrey' }} className="p-3 text-center w-100"><img src={video_library} width={20} alt={course.title} /> {course.title}</div>
                                                    </div>
                                                )
                                            } */}

                    </div>
                }

                {demoClasses?.length > 1 &&
                    <div className="row justify-content-center">
                        <h2 style={{ fontSize: '24px', lineHeight: '36px', color: '#343b6d', fontWeight: '700', textAlign: 'center' }} className='mt-3'>আপনার ফ্রি ক্লাস সমূহ</h2>

                        {freeClasses?.map(course => {
                            return (
                                <div key={course.id} className='featured-courses col-md-6 my-3'>
                                    {/* <Link className='text-decoration-none' to='/'> */}
                                    <div style={{ border: '1px solid #dde7f3' }}>

                                        <div style={{ minHeight: '180px' }} className="bg-white py-3">
                                            <h3 style={{ fontSize: '16px', lineHeight: '26px', fontWeight: '600', color: '#354895' }} className='px-3'><span style={{ color: '#b94a8f' }}>{course.title}</span>
                                                <br />তারিখ - <small>{course.class_date_1}</small></h3>
                                            <h4 style={{ fontSize: '16px', lineHeight: '26px', fontWeight: '600', color: '#069654' }} className=' px-3 price mt-2'>
                                                <span style={{ color: '#354895', fontSize: '14px' }}>সময়: </span>{course.class_time}<small style={{ color: '#354895' }}></small>
                                            </h4>

                                            {/* <h2 style={{ color: '#b94a8f' }} className='fs-6 text-center my-3'>লাইভ ক্লাস শুরু হতে সময় বাকি</h2> */}
                                            <Countdown
                                                deadline={course.class_date_1_deadline}
                                                text={'লাইভ ক্লাস শুরু হতে সময় বাকি'}
                                            />
                                        </div>

                                        <div style={{
                                            // justifyContent: 'center', 
                                            backgroundColor: 'rgb(236,238,255)'
                                        }} className="d-flex py-3 justify-content-between">
                                            {
                                                userPhoneData?.name ?
                                                    <>
                                                        <div className="">
                                                            <button onClick={() => getSignature(course.free_number, course.free_password)} className='see-details w-100 mx-1' to=''>{course.category} জয়েন ক্লাস</button>
                                                        </div>
                                                        <div onClick={() => navigate('/dashboard/previous/free-class/' + course.id)} className="px-2"><button className='class-video'>ক্লাসের ভিডিও দেখুন</button></div>
                                                    </>
                                                    :
                                                    <button className='see-details-fade w-100'><div className="spinner-border" style={{ height: '15px', width: '15px' }} role="status">
                                                    </div> জয়েন ক্লাস</button>
                                            }
                                        </div>
                                    </div>
                                    {/* </Link> */}
                                    {/* <p className='text-center mt-2 text-primary'>অথবা ভিডিও দেখুন</p> */}
                                    {/* <div onClick={()=> navigate('/dashboard/previous/free-class/' + course.id)} style={{ backgroundColor: '#f1f1f1', borderRadius: '15px', cursor:'pointer', fontSize:'14px', boxShadow: '0 5px 5px #c4c4c44d' }} className="p-3 text-center m-3"><img src={video_library} width={20} alt={course.title} /> {course.title}</div> */}
                                </div>
                            )
                        })}

                        {/* {
                                                freeClasses.map(course =>
                                                    <div key={course.id} style={{
                                                        justifyContent: 'center', minHeight: '150px'
                                                        , backgroundColor: 'rgb(236,238,255)'
                                                    }}
                                                        // className="d-flex py-3"
                                                        className='col-md-6 py-3'
                                                    >
                                                        {
                                                            userPhoneData?.name ?
                                                                <button style={{ height: '80px' }} onClick={() => getSignature(course.free_number, course.free_password)}
                                                                    className='see-details w-100 mx-1'
                                                                ><span style={{ fontSize: '14px' }} className='fw-bold pe-2'>{course.title}</span> <span>জয়েন ক্লাস</span></button>
                                                                :
                                                                <button className='see-details-fade w-100'><div className="spinner-border" style={{ height: '15px', width: '15px' }} role="status">
                                                                </div> {course.title} জয়েন ক্লাস</button>
                                                        }
                                                        <p className='text-center mt-2 text-primary'>অথবা ভিডিও দেখুন</p>
                                                        <div onClick={() => navigate('/dashboard/previous/free-class/' + course.id)} style={{ backgroundColor: '#f1f1f1', borderRadius: '15px', cursor: 'pointer', fontSize: '14px', boxShadow: '0 5px 5px #c4c4c44d', height: '100px', border: '1px solid lightgrey' }} className="p-3 text-center d-flex justify-content-center align-items-center w-100"><img src={video_library} width={20} alt={course.title} /> {course.title}</div>
                                                    </div>
                                                )
                                            } */}
                        {/* <br />
                                            <hr />
                                            <br />
                                         */}
                    </div>
                }

                {
                    demoClasses?.length === 0 &&
                    <p className='mt-3 text-center text-danger'>আপনি কোনো ফ্রি ক্লাস রেজিস্ট্রেশন করেননি </p>
                }
            </div>
        </div>
    );
};

export default DFreeClassTrash;