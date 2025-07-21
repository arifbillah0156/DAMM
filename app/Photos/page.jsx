'use client';

import { useState } from 'react';

export default function ImageGallery() {
    const images = Array.from({ length: 12 }, (_, i) => `/PhotosGallery/img${i + 1}.jpg`);
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            {/* Gallery Section */}
            <section className="px-4 py-8 mt-4 max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-lc galada-regular  tracking-wider"><i className="fa-solid fa-images mr-3 text-2xl md:text-3xl"></i>Photos Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-lg border p-2 shadow-lg transform transition duration-300 hover:scale-105 cursor-zoom-in"
                            onClick={() => setSelectedImage(src)}
                        >
                            <img
                                src={src}
                                alt={`Gallery Image ${index + 1}`}
                                className="w-full h-60 object-cover"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Fullscreen Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <img
                        src={selectedImage}
                        alt="Full Screen"
                        className="max-w-full max-h-[90vh] rounded-lg shadow-2xl transition-all duration-300 cursor-zoom-out"
                    />
                    <button
                        className="absolute top-4 right-4 text-white text-3xl font-bold"
                        onClick={() => setSelectedImage(null)}
                    >
                        &times;
                    </button>
                </div>
            )}
        </>
    );
}
