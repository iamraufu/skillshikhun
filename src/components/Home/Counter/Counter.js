import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CountUp from 'react-countup';

const Counter = () => {
    const [lg, setlg] = useState(0);
    const [nlg, setnlg] = useState(0);
    const [users, setUsers] = useState(0);
    const [free, setFree] = useState(0);

    useEffect(() => {
        fetch('https://skillshikhun.herokuapp.com/getTrackedLoggedInUsers')
            .then(response => response.json())
            .then(data => setlg(data.length))
    }, [])

    useEffect(() => {
        fetch('https://skillshikhun.herokuapp.com/getTrackedLoggedOutUsers')
            .then(response => response.json())
            .then(data => setnlg(data.length))
    }, [])

    useEffect(() => {
        fetch('https://skillshikhun.herokuapp.com/users')
            .then(response => response.json())
            .then(data => setUsers(data.length))
    }, [])

    useEffect(() => {
        fetch('https://skillshikhun.herokuapp.com/demoClasses')
            .then(response => response.json())
            .then(data => setFree(data.length))
    }, [])



    return (
        <section className='container my-5'>
            <div className="row justify-content-center align-items-center p-3">
                <CountUp start={0} end={lg + nlg + 10324} delay={0}>
                    {({ countUpRef }) => (
                        <div style={{ border: '1px solid #dde7f3', borderRadius: '15px' }} className='col-md-3 p-5 mx-2 my-2'>
                            <span className="text-center mx-auto d-block fs-2 fw-bold" ref={countUpRef} />
                            <p className='text-center'>ওয়েবসাইট ভিজিট করেছেন</p>
                        </div>
                    )}
                </CountUp>

                <CountUp start={0} end={free} delay={0}>
                    {({ countUpRef }) => (
                        <div style={{ border: '1px solid #dde7f3', borderRadius: '15px' }} className='col-md-4 p-5 mx-2 my-2'>
                            <span className="text-center mx-auto d-block fs-2 fw-bold" ref={countUpRef} />
                            <p className='text-center'>ফ্রি ক্লাস করেছেন</p>
                        </div>
                    )}
                </CountUp>

                <CountUp start={0} end={users} delay={0}>
                    {({ countUpRef }) => (
                        <div style={{ border: '1px solid #dde7f3', borderRadius: '15px' }} className='col-md-3 p-5 mx-2 my-2'>
                            <span className="text-center mx-auto d-block fs-2 fw-bold" ref={countUpRef} />
                            <p className='text-center'>সর্বমোট লার্নার্স</p>
                        </div>
                    )}
                </CountUp>
            </div>
        </section>
    );
};

export default Counter;