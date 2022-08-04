import React, { useState } from 'react';
import { useEffect } from 'react';
// import moment from 'moment';
// moment().format();

const Countdown = (props) => {
    
    // const [time, setTime] = useState(moment(props.deadline).diff(moment()));
    
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setTime(moment(props.deadline).diff(moment()));
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, [props.deadline]);
    
    // const days = moment.duration(time).as('days');
    // const hours = moment.duration(time).as('hours');
    // const minutes = moment.duration(time).as('minutes');
    // const seconds = moment.duration(time).as('seconds');

    // difference between props.deadline and current time
    // const time = moment(props.deadline).diff(moment());
    // console.log(moment(props.deadline).format('MMMM Do YYYY, h:mm:ss a'));
    // console.log(moment(props.deadline).isValid());
    // console.log(moment().format());


    // console.log(days, hours, minutes, seconds);

    // console.log(moment().format('MMMM Do YYYY, h:mm:ss a')-moment(props.deadline).format('MMMM Do YYYY, h:mm:ss a'));
    
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    // const [message, setMessage] = useState('');

    const countdown = () => {

        const deadline = new Date(props.deadline);
        const currentDate = new Date();
        const totalSeconds = (deadline - currentDate) / 1000;
        const daysCount = Math.floor(totalSeconds / (3600 * 24));
        const hoursCount = Math.floor(totalSeconds % (3600 * 24) / 3600);
        const minutesCount = Math.floor(totalSeconds % 3600 / 60);
        const secondsCount = Math.floor(totalSeconds % 60);

        setDays(formatTime(daysCount));
        setHours(formatTime(hoursCount));
        setMinutes(formatTime(minutesCount));
        setSeconds(formatTime(secondsCount));

        // nextCountDown(totalSeconds);
    }

    const formatTime = (time) => {
        return time < 10 ? (`0${time}`) : time;
    }

    // const nextCountDown = (time) => {
    //     if (time < 0) {
    //         setMessage('The Class is Over!');
    //     } else {
    //         setTimeout(() => {
    //             countdown();
    //         }, 1000);
    //     }

    //     if(time === 0){
    //         setMessage('The Class is ongoing!');
    //         document.getElementById('countdown_container').style.display = 'none';
    //         document.getElementById('message_container').style.display = 'block'
    //     }
    //     else{
    //         document.getElementById('countdown_container').style.display = 'block';
    //         document.getElementById('message_container').style.display = 'none'
    //     }
    // }

    useEffect(() => {
        setInterval(countdown, 1000)
        // eslint-disable-next-line
    }, [])

    return (
        <div className="container text-black">
            <div id='countdown_container'>
                <h2 style={{ color: '#b94a8f' }} className='fs-6 text-center fw-bold'>{props.text}</h2>
                {/* <div className="d-flex justify-content-between align-items-center text-center"> */}
                <div className="d-flex text-center justify-content-center">
                    {/* <div className="col-sm-3"><p className='fs-6 fw-bold' id='days'>{days}</p><span style={{ fontSize: '12px' }}>Days</span></div>
                    <div className="col-sm-3"><p className='fs-6 fw-bold' id='hours'>{hours}</p><span style={{ fontSize: '12px' }}>Hours</span></div>
                    <div className="col-sm-3"><p className='fs-6 fw-bold' id='minutes'>{minutes}</p><span style={{ fontSize: '12px' }}>Minutes</span></div>
                    <div className="col-sm-3"><p className='fs-6 fw-bold' id='seconds'>{seconds}</p><span style={{ fontSize: '12px' }}>Seconds</span></div> */}
                    <p className='fs-6 fw-bold px-2' id='days'>{days}<span className='mt-1' style={{ fontSize: '12px' }}>D</span></p>
                    <p className='fs-6 fw-bold px-2' id='hours'>{hours}<span className='mt-1' style={{ fontSize: '12px' }}>H</span></p>
                    <p className='fs-6 fw-bold px-2' id='minutes'>{minutes}<span className='mt-1' style={{ fontSize: '12px' }}>M</span></p>
                    <p className='fs-6 fw-bold px-2' id='seconds'>{seconds}<span className='mt-1' style={{ fontSize: '12px' }}>S</span></p>
                    {/* <div className="col-sm-3"></div>
                    <div className="col-sm-3"></div>
                    <div className="col-sm-3"></div>
                    <div className="col-sm-3"></div> */}
                </div>
            </div>

            {/* <div id="message_container" style={{display: 'none' }}>
                <p className='fs-6 fw-bold text-center mt-3' id='message'>{message}</p>
            </div> */}

        </div>
    );
};

export default Countdown;