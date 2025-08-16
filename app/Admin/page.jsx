// 'use client';
// import { useState, useEffect } from 'react';
// import { Eye, EyeOff } from 'lucide-react';
// import { useRouter } from 'next/navigation';


// export default function AdminLogin() {
//     const [showPassword, setShowPassword] = useState(false);

//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//     });

//     const router = useRouter();


//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const getCookie = (name) => {
//         const cookies = document.cookie.split('; ');
//         for (const cookie of cookies) {
//             const [cookieName, cookieValue] = cookie.split('=');
//             if (cookieName === name) return decodeURIComponent(cookieValue);
//         }
//         return null;
//     }

//     const setCookie = (name, value, days) => {
//         const date = new Date();
//         date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//         const expires = 'expires=' + date.toUTCString();
//         document.cookie = `${name}=${value}; ${expires}; path=/`;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (formData.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL && formData.password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
//             setCookie('email', formData.email, 3);
//             setCookie('password', formData.password, 3);
//             router.push("/Admin/Dashboard")
//         } else {
//             alert("Email or Password is Wrong!!!")
//             setFormData({
//                 email: '',
//                 password: '',
//             })
//         }
//     };



//     useEffect(() => {

//         const cookieEmail = getCookie('email');
//         const cookiePass = getCookie('password');

//         if (cookieEmail === process.env.NEXT_PUBLIC_ADMIN_EMAIL && cookiePass === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
//             router.push('/Admin/Dashboard');
//         }

//     }, [])

//     return (
//         <div className="min-h-[80vh] mt-4 rounded-lg mx-1 lg:mx-4 bg-gradient-to-br from-sky-200 via-blue-100 to-indigo-100 flex items-center justify-center px-4">
//             <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full">
//                 <div className="text-center mb-6">
//                     <div className="text-3xl font-bold text-lc abril-fatface-regular">Admin Panel</div>
//                     <p className="text-sm text-gray-500 mt-2">Login to manage dashboard</p>
//                 </div>

//                 <form className="space-y-5" onSubmit={handleSubmit}>
//                     <div>
//                         <label className="block text-md font-medium text-gray-800 mb-1">Email</label>
//                         <input
//                             type="email"
//                             name="email" // ✅ required for controlled input
//                             value={formData.email} // ✅
//                             placeholder="admin@example.com"
//                             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lc"
//                             required
//                             onChange={handleChange}
//                         />
//                     </div>

//                     <div>
//                         <label className="block text-md font-medium text-gray-800 mb-1">Password</label>
//                         <div className="relative">
//                             <input
//                                 type={showPassword ? 'text' : 'password'}
//                                 name="password" // ✅
//                                 value={formData.password} // ✅
//                                 placeholder="••••••••"
//                                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lc"
//                                 required
//                                 onChange={handleChange}
//                             />
//                             <button
//                                 type="button"
//                                 className="absolute right-3 top-2.5 text-gray-500"
//                                 onClick={() => setShowPassword(!showPassword)}
//                             >
//                                 {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                             </button>
//                         </div>
//                     </div>

//                     <button
//                         type="submit"
//                         className="w-full py-3 px-4 bg-lc hover:ring-2 hover:ring-offset-2 hover:ring-lc text-white rounded-lg font-semibold transition-all"
//                     >
//                         Login
//                     </button>
//                 </form>

//                 <div className="text-center mt-6 text-sm text-gray-500">
//                     © DAMM Admin Portal. All rights reserved.
//                 </div>
//             </div>
//         </div>
//     );
// }

'use client';
import { useState, useEffect } from 'react';
import { Eye, EyeOff, Shield, Mail, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [isMounted, setIsMounted] = useState(false);
    const [focusedInput, setFocusedInput] = useState(null);
    const router = useRouter();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        if (error) setError('');
    };

    const getCookie = (name) => {
        const cookies = document.cookie.split('; ');
        for (const cookie of cookies) {
            const [cookieName, cookieValue] = cookie.split('=');
            if (cookieName === name) return decodeURIComponent(cookieValue);
        }
        return null;
    };

    const setCookie = (name, value, days) => {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = 'expires=' + date.toUTCString();
        document.cookie = `${name}=${value}; ${expires}; path=/`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 800));

        if (formData.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL && formData.password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
            setCookie('email', formData.email, 1);
            setCookie('password', formData.password, 1);
            router.push("/Admin/Dashboard");
        } else {
            setError("Invalid email or password");
            setFormData({
                email: '',
                password: '',
            });
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setIsMounted(true);
        const cookieEmail = getCookie('email');
        const cookiePass = getCookie('password');
        if (cookieEmail === process.env.NEXT_PUBLIC_ADMIN_EMAIL && cookiePass === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
            router.push('/Admin/Dashboard');
        }
    }, []);

    return (
        <div className="min-h-screen m-0 lg:m-1 lg:rounded-md lg:pb-28 lg:pt-12 flex items-center justify-center p-4 bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 overflow-hidden">


            {/* Login card */}
            <div className={`relative z-0 w-full max-w-md transition-all duration-1000 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden transform transition-all duration-500">
                    <div className="p-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                        <div className="bg-gray-900/90 rounded-xl p-8">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 mb-4 shadow-lg relative overflow-hidden">
                                    <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
                                    <Shield className="h-12 w-12 text-white relative z-0" />
                                </div>
                                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">Admin Portal</h1>
                                <p className="text-gray-400">Enter your credentials to access the dashboard</p>
                            </div>

                            {error && (
                                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-300 text-sm animate-pulse flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {error}
                                </div>
                            )}

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-300">Email Address</label>
                                    <div className="relative group">
                                        <div className={`absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none transition-colors duration-300 ${focusedInput === 'email' ? 'text-cyan-400' : 'text-gray-500'}`}>
                                            <Mail className="h-5 w-5 mt-[-4px]" />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            placeholder="admin@example.com"
                                            className={`w-full outline-none pl-10 pr-4 py-3 bg-gray-800/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white transition-all duration-300 group-hover:border-cyan-500/50 ${focusedInput === 'email' ? 'border-cyan-500/50' : 'border-gray-700'}`}
                                            required
                                            onChange={handleChange}
                                            onFocus={() => setFocusedInput('email')}
                                            onBlur={() => setFocusedInput(null)}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    {/* <div className="flex justify-between items-center">
                                        <label className="block text-sm font-medium text-gray-300">Password</label>
                                        <a href="#" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">Forgot password?</a>
                                    </div> */}
                                    <div className="relative group">
                                        <div className={`absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none transition-colors duration-300 ${focusedInput === 'password' ? 'text-cyan-400' : 'text-gray-500'}`}>
                                            <Lock className="h-5 w-5 mt-[-4px]" />
                                        </div>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            value={formData.password}
                                            placeholder="••••••••"
                                            className={`w-full outline-none pl-10 pr-12 py-3 bg-gray-800/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white transition-all duration-300 group-hover:border-cyan-500/50 ${focusedInput === 'password' ? 'border-cyan-500/50' : 'border-gray-700'}`}
                                            required
                                            onChange={handleChange}
                                            onFocus={() => setFocusedInput('password')}
                                            onBlur={() => setFocusedInput(null)}
                                        />
                                        <button
                                            type="button"
                                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-cyan-400 transition-colors"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>

                                {/* <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-cyan-500 focus:ring-cyan-500 border-gray-600 rounded bg-gray-800/50"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                                        Remember me
                                    </label>
                                </div> */}

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg shadow-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                                >
                                    {isLoading ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Signing in...
                                        </>
                                    ) : 'Sign in'}
                                </button>
                            </form>

                            <div className="mt-8 pt-6 border-t border-gray-800">
                                <p className="text-center text-xs text-gray-500">
                                    © {new Date().getFullYear()} DAMM Admin Portal. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 text-center text-sm text-gray-400">
                    <p>Secure access only for authorized personnel</p>
                </div>
            </div>

            {/* <style jsx global>{`
                @keyframes float {
                    0% { transform: translate(0, 0) rotate(0deg); }
                    50% { transform: translate(${Math.random() > 0.5 ? '-' : ''}${Math.random() * 20 + 10}px, ${Math.random() * 20 + 10}px) rotate(${Math.random() > 0.5 ? '-' : ''}${Math.random() * 10}deg); }
                    100% { transform: translate(0, 0) rotate(0deg); }
                }
            `}</style> */}
        </div>
    );
}