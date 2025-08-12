"use client";
import { useEffect, useState } from "react";

export default function Loading() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        import("ldrs").then((ldrs) => {
            ldrs.quantum.register();
            setIsClient(true);
        });
    }, []);

    if (!isClient) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-lc text-white z-50">
            <l-quantum size="65" speed="1.75" color="white"></l-quantum>
        </div>
    );
}
