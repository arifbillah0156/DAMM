export default function LoadingPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
            <div className="flex flex-col items-center">
                {/* Spinner */}
                <div className="w-20 h-20 border-4 border-white border-dashed rounded-full animate-spin"></div>

                {/* Loading text */}
                <p className="mt-6 text-white text-lg md:text-xl font-semibold animate-pulse">
                    Loading, please wait...
                </p>
            </div>
        </div>
    );
}