// utils/numberConverter.js
const convertBengaliToEnglish = (bengaliNumber) => {
    const mapping = {
        '1': '১',
        '2': '২',
        '3': '৩',
        '4': '৪',
        '5': '৫',
        '6': '৬',
        '7': '৭',
        '8': '৮',
        '9': '৯',
        '10': '১০'
    };

    // Return converted number or original if not found
    return mapping[bengaliNumber] || bengaliNumber;
};

export default convertBengaliToEnglish;