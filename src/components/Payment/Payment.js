import React, { useEffect, useState } from 'react';

const Payment = () => {

    const [payment_url, setPayment_url] = useState('');
    const [tran_id, setTran_id] = useState("");

    useEffect(() => {
        setTran_id(Math.floor(Math.random() * 9000 + 1000));
        fetch('https://sandbox.aamarpay.com/jsonpost.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                store_id: "aamarpaytest",
                signature_key: "dbb74894e82415a2f7ff0ec3a97e4183",
                cus_name: "Imtiaz Akil",
                cus_email: "imtiaz.akil@softbd.com",
                cus_phone: "01870762472",
                cus_add1: "53, Gausul Azam Road, Sector-14, Dhaka, Bangladesh",
                cus_add2: "Dhaka",
                cus_city: "Dhaka",
                cus_country: "Bangladesh",
                amount: "10.00",
                tran_id: `SkillShikhun_${tran_id}`,
                currency: "BDT",
                success_url: "https://example.com/success.php",
                fail_url: "https://example.com/fail.php",
                cancel_url: "https://example.com/cancel.php",
                desc: "Lend Money",
                type: "json"
            })
        })
            .then(res => res.json())
            .then(data => setPayment_url(data))
            .catch(err => console.log(err))
        // eslint-disable-next-line
    }, [])

    fetch('https://sandbox.aamarpay.com/paynow.php?track=AAM1652037425103848')

    return (
        <div>
            <h3>Payment</h3>
            <p>Payment URL is: {payment_url.payment_url}</p>
        </div>
    );
};

export default Payment;