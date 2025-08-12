// utils/dateUtils.js

export const formatDate = (dateString, format = 'bengali') => {
    if (!dateString) return '';

    const date = new Date(dateString);
    const day = date.getDate();
    const year = date.getFullYear();
    const monthIndex = date.getMonth();

    if (format === 'bengali') {
        const bengaliMonths = [
            'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
            'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
        ];

        return `${day} ${bengaliMonths[monthIndex]}, ${year}`;
    } else {
        const paddedDay = day.toString().padStart(2, '0');
        const paddedMonth = (monthIndex + 1).toString().padStart(2, '0');

        return `${paddedDay}/${paddedMonth}/${year}`;
    }
};

export const formatTime = (dateString) => {
    if (!dateString) return '';

    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');

    // Convert to 12-hour format
    const period = hours >= 12 ? 'অপরাহ্ণ' : 'পূর্বাহ্ণ';
    const displayHours = hours % 12 || 12;

    return `${displayHours}:${minutes} ${period}`;
};