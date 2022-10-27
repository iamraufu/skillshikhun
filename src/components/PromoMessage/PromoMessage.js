import React, { 
    // useEffect, useReducer, 
    useState } from 'react';
import './PromoMessage.css';
// import playStore from '../../images/playStoreIcon.svg';
// import TextSkeleton from '../Skeleton/TextSkeleton';
import PromoImages from './PromoImages';

const PromoMessage = () => {

    // eslint-disable-next-line
    const [marketingMessage, setMarketingMessage] = useState([]);
    // const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);

    // useEffect(() => {
    //     fetch('https://backend-skill-shikhun.herokuapp.com/marketingMessages')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMarketingMessage(data[0].message)
    //             forceUpdate();

    //         })
    // }, [reducerValue])

    return (
        <div className="">
            <div id='promo_message_container' >
                <PromoImages />
                {/* <div className='d-flex justify-content-center align-items-center' style={{ backgroundColor: '#653dae', height: '90px' }}>
                    {
                        marketingMessage?.length ?
                        <div className='px-3 d-flex justify-content-center align-items-center'>
                        <h1 className='promo-text text-white text-center'>{marketingMessage}</h1>
                    </div> : 
                    <div className="px-3 d-flex justify-content-center align-items-center">
                        <TextSkeleton />
                    </div>
                    }
                    <a href="https://play.google.com/store/apps/details?id=com.skillshikhun.skillshikhun" target="_blank" rel="noreferrer">
                        <div style={{ border: '1px solid lightgrey', borderRadius: '15px' }} className="p-3">
                            <img src={playStore} className='img-fluid float-right' width={120} alt="Download App" />
                        </div>
                    </a>
                </div> */}
            </div>

            <div>
                <button onClick={() => document.getElementById('promo_message_container').style.display = 'none'} style={{ position: 'absolute', top: '0', right: '0', 
                backgroundColor:'white', height:'30px', width:'30px', borderRadius: '50%', opacity:'0.8' 
                }} className='btn btn-sm text-secondary m-2 fw-bold'>X</button>
            </div>
        </div>
    );
};

export default PromoMessage;