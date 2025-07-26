"use client"
import React, { useEffect } from 'react';

const AdSenseAd = ({ slotId, format = 'auto', responsive = true, style = {} }) => {
    useEffect(() => {
        try {
            // AdSense স্ক্রিপ্ট লোড হয়েছে কিনা তা নিশ্চিত করার জন্য
            if (typeof window !== 'undefined' && window.adsbygoogle) {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
        } catch (err) {
            console.error('AdSense error:', err);
        }
    }, []); // কম্পোনেন্ট মাউন্ট হওয়ার পর একবার চালানো হবে

    // যদি slotId না থাকে, তাহলে Ad রেন্ডার করব না
    if (!slotId) {
        console.warn("AdSenseAd: 'slotId' prop is missing.");
        return null;
    }

    return (
        <ins
            className="adsbygoogle"
            style={{ display: 'block', ...style }} // ডিফল্ট স্টাইল এবং কাস্টম স্টাইল মার্জ করুন
            data-ad-client="ca-pub-আপনার-প্রকাশক-আইডি" // আপনার Publisher ID এখানে দিন
            data-ad-slot={slotId}
            data-ad-format={format}
            data-full-width-responsive={responsive ? 'true' : 'false'}
        ></ins>
    );
};

export default AdSenseAd;