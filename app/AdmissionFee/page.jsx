import React from "react";
import Section_1 from "./Section_1";
import Section_2 from "./Section_2";
import Section_3 from "./Section_3";
import Section_4 from "./Section_4";

export default function AdmissionFees() {
    return (
        <div className="px-4 py-8 max-w-5xl lg:text-lg mx-auto text-gray-900 mt-4">
            {/* <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white bg-gradient-to-r from-gray-900 to-gray-700 py-3 rounded">
                Addmission Fee
            </h2> */}

            <Section_1 />
            <Section_2 />
            <Section_3 />
            <Section_4 />






        </div>
    );
}
