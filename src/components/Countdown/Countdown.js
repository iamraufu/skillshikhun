import React, { useState } from 'react';
import { useEffect } from 'react';

const Countdown = (props) => {

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

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

    }

    const formatTime = (time) => {
        return time < 10 ? (`0${time}`) : time;
    }

    useEffect(() => {
        // countDownTimer();
        setInterval(countdown, 1000)
        // eslint-disable-next-line
    }, [])
    // console.log(new Date().getTime());

    return (
        <div className="countdown-container">
            <div className="d-flex justify-content-center align-items-center text-center">
                <div className="col-sm-3"><p className='fs-6 fw-bold' id='days'>{days}</p><span style={{ fontSize: '10px' }}>Days</span></div>
                <div className="col-sm-3"><p className='fs-6 fw-bold' id='hours'>{hours}</p><span style={{ fontSize: '10px' }}>Hours</span></div>
                <div className="col-sm-3"><p className='fs-6 fw-bold' id='minutes'>{minutes}</p><span style={{ fontSize: '10px' }}>Minutes</span></div>
                <div className="col-sm-3"><p className='fs-6 fw-bold' id='seconds'>{seconds}</p><span style={{ fontSize: '10px' }}>Seconds</span></div>
            </div>

        </div>
    );
};

export default Countdown;