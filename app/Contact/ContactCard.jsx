'use client';
import { Phone, Mail, MessageSquareText, BadgeInfo } from 'lucide-react';

export default function ContactCard({ title, phone, whatsapp, name, email }) {
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200 overflow-hidden merriweather">
            {/* Header with Name */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-5 text-white text-center">
                <h2 className="text-xl md:text-2xl font-bold ">{name}</h2>
                {title && (
                    <div className="flex justify-center items-center gap-2 text-md md:text-lg mt-1 text-cyan-50">
                        <BadgeInfo className="w-4 h-4" />
                        <span className='mb-[-4px]'>{title}</span>
                    </div>
                )}
            </div>

            {/* Contact Details */}
            <div className="p-6 space-y-4 text-gray-700 text-center">
                {/* Phone */}
                {phone && (
                    <div className="flex items-center justify-start gap-2 text-lg">
                        <Phone className="w-4 h-4 text-green-600" />
                        <a href={`tel:${phone}`} className="underline hover:text-green-600">{phone}</a>
                    </div>
                )}

                {/* WhatsApp */}
                {whatsapp && (
                    <div className="flex items-center justify-start gap-2 text-lg">
                        <MessageSquareText className="w-4 h-4 text-green-500" />
                        <a
                            href={`https://wa.me/${whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-green-600"
                        >
                            WhatsApp
                        </a>
                    </div>
                )}

                {/* Email */}
                {email && (
                    <div className="flex items-center justify-start gap-2 text-lg overflow-auto">
                        <Mail className="min-w-4 min-h-4 max-w-4 max-h-4 text-blue-600" />
                        <a href={`mailto:${email}`} className="underline hover:text-blue-800">{email}</a>
                    </div>
                )}
            </div>
        </div>
    );
}
