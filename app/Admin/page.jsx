'use client';
import { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';


export default function AdminLogin() {
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const router = useRouter();


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const getCookie = (name) => {
        const cookies = document.cookie.split('; ');
        for (const cookie of cookies) {
            const [cookieName, cookieValue] = cookie.split('=');
            if (cookieName === name) return decodeURIComponent(cookieValue);
        }
        return null;
    }

    const setCookie = (name, value, days) => {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = 'expires=' + date.toUTCString();
        document.cookie = `${name}=${value}; ${expires}; path=/`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL && formData.password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
            setCookie('email', formData.email, 3);
            setCookie('password', formData.password, 3);
            router.push("/Admin/Dashboard")
        } else {
            alert("Email or Password is Wrong!!!")
            setFormData({
                email: '',
                password: '',
            })
        }
    };



    useEffect(() => {

        const cookieEmail = getCookie('email');
        const cookiePass = getCookie('password');

        if (cookieEmail === process.env.NEXT_PUBLIC_ADMIN_EMAIL && cookiePass === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
            router.push('/Admin/Dashboard');
        }

    }, [])

    return (
        <div className="min-h-[80vh] mt-4 rounded-lg mx-1 lg:mx-4 bg-gradient-to-br from-sky-200 via-blue-100 to-indigo-100 flex items-center justify-center px-4">
            <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full">
                <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-lc abril-fatface-regular">Admin Panel</div>
                    <p className="text-sm text-gray-500 mt-2">Login to manage dashboard</p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-md font-medium text-gray-800 mb-1">Email</label>
                        <input
                            type="email"
                            name="email" // ✅ required for controlled input
                            value={formData.email} // ✅
                            placeholder="admin@example.com"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lc"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-md font-medium text-gray-800 mb-1">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password" // ✅
                                value={formData.password} // ✅
                                placeholder="••••••••"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lc"
                                required
                                onChange={handleChange}
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-2.5 text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-lc hover:ring-2 hover:ring-offset-2 hover:ring-lc text-white rounded-lg font-semibold transition-all"
                    >
                        Login
                    </button>
                </form>

                <div className="text-center mt-6 text-sm text-gray-500">
                    © DAMM Admin Portal. All rights reserved.
                </div>
            </div>
        </div>
    );
}
