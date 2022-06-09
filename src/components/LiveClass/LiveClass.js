import React, { useEffect, useState } from 'react';
import './LiveClass.css';
import { useParams } from 'react-router-dom';
import courseData from '../../data/course/courseData.js';

import { ZoomMtg } from '@zoomus/websdk';

ZoomMtg.setZoomJSLib('https://source.zoom.us/2.4.5/lib', '/av');
ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();
ZoomMtg.i18n.load('en-US');
ZoomMtg.i18n.reload('en-US');


const LiveClass = () => {

    const phone = localStorage.getItem('phone');
    const { courseId } = useParams();
    const course = courseData.filter(course => course.id === courseId);

    // eslint-disable-next-line
    const [liveCourses, setLiveCourses] = useState([]);
    const [purchasedLiveCourses, setPurchasedLiveCourses] = useState([]);
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:5000/api/get-payment/Live/${phone}`);
            const data = await res.json();
            setLiveCourses(data);
        }
        fetchData();
    }, [phone])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:5000/api/get-payments/${phone}`);
            const data = await res.json();
            setPayments(data[0].course);
        }
        fetchData();
    }, [phone])

    useEffect(() => {
        // setPurchasedLiveCourses(courseData.filter(course => course?.name === payments[0]?.course || course?.name === payments[1]?.course || course?.name === payments[2]?.course || course?.name === payments[3]?.course))
        const purchasedCourse = courseData?.find(course => course?.name === payments);
        // setPurchasedLiveCourses(courseData?.find(course => course?.name === payments?.course))

        console.log(purchasedCourse);
    }, [payments])

    // console.log(purchasedLiveCourses);
    // console.log(payments);

    let signatureEndpoint = 'http://localhost:5000/liveClass'
    let sdkKey = '87rXfpYIpyQYMZSrjmcYKvF72lEqinAuroje'
    let meetingNumber = "87039970025"
    let role = 0
    let userName = 'Eftykhar Raufu'
    let userEmail = 'eftykharraufu@gmail.com'
    let passWord = '071289'
    let leaveUrl = 'http://localhost:3000'
    let registrantToken = ''

    function getSignature(e) {
        e.preventDefault();

        fetch(signatureEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                meetingNumber: meetingNumber,
                role: role
            })
        }).then(res => res.json())
            .then(response => {
                startMeeting(response.signature)
            }).catch(error => {
                console.error(error)
            })
    }

    function startMeeting(signature) {

        document.getElementById('zmmtg-root').style.display = 'block'

        ZoomMtg.init({
            leaveUrl: leaveUrl,
            success: (success) => {
                console.log(success)

                ZoomMtg.join({
                    signature: signature,
                    meetingNumber: meetingNumber,
                    userName: userName,
                    sdkKey: sdkKey,
                    userEmail: userEmail,
                    passWord: passWord,
                    tk: registrantToken,
                    success: (success) => {
                        console.log(success)
                    },
                    error: (error) => {
                        console.log(error)
                    }
                })

            },
            error: (error) => {
                console.log(error)
            }
        })
    }

    return (
        <div className="">
            <main>
                <h1>Skill Shikhun Live Class</h1>


                <div id="meetingSDKElement"></div>

                <button id='join_meeting' onClick={getSignature} className='mx-auto d-block'>জয়েন করুন</button>

            </main>
        </div>
    );
};

export default LiveClass;