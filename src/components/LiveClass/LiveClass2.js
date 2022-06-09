import React from 'react';

import ZoomMtgEmbedded from '@zoomus/websdk/embedded';

const LiveClass2 = () => {

    const client = ZoomMtgEmbedded.createClient();

    let signatureEndpoint = 'http://localhost:5000/liveClass'
    let sdkKey = '87rXfpYIpyQYMZSrjmcYKvF72lEqinAuroje'
    let meetingNumber = "92187931261"
    let role = 0
    let userName = 'Eftykhar Raufu'
    let userEmail = 'eftykharraufu@gmail.com'
    let passWord = 'skill2022'
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

        let meetingSDKElement = document.getElementById('meetingSDKElement');

        client.init({
            debug: true,
            zoomAppRoot: meetingSDKElement,
            language: 'en-US',
            customize: {
                meetingInfo: ['topic', 'host', 'mn', 'pwd', 'telPwd', 'invite', 'participant', 'dc', 'enctype'],
                toolbar: {
                    buttons: [
                        {
                            text: 'Custom Button',
                            className: 'CustomButton',
                            onClick: () => {
                                console.log('custom button');
                            }
                        }
                    ]
                }
            }
        });

        client.join({
            sdkKey: sdkKey,
            signature: signature,
            meetingNumber: meetingNumber,
            password: passWord,
            userName: userName,
            userEmail: userEmail,
            tk: registrantToken
        })
    }
    return (
        <div className="App">
            <main>
                <h1 className='mt-5'>Skill Shikhun Live Class</h1>

                <div id="meetingSDKElement"></div>

                <button onClick={getSignature}>Join Meeting</button>
            </main>
        </div>
    );
};

export default LiveClass2;