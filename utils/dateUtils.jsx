// utils/dateUtils.js
export const formatDateWithBengaliMonth = (dateString) => {
    if (!dateString) return '';

    const date = new Date(dateString);
    const day = date.getDate();
    const year = date.getFullYear();

    const bengaliMonths = [
        'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
        'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
    ];

    const month = bengaliMonths[date.getMonth()];

    return `${day} ${month}, ${year}`;
};