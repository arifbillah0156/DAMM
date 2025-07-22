'use client';
import { Phone, Mail, MessageSquareText } from 'lucide-react';

export default function ContactCard({ title, phone, whatsapp, email }) {
    return (
        <div className="bg-white shadow-xl rounded-2xl p-6 space-y-3 border border-gray-200 hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-lc abril-fatface-regular">{title}</h3>
            <div className="text-gray-700 space-y-1 text-md">
                <a href={`tel:${whatsapp}`} className="flex items-center gap-2"><Phone className="w-4 h-4 text-green-600" /> {phone}</a>
                {whatsapp && (
                    <p className="flex items-center gap-2">
                        <MessageSquareText className="w-4 h-4 text-green-500" />
                        <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="underline hover:text-green-700">
                            WhatsApp
                        </a>
                    </p>
                )}
                {email && (
                    <p className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-blue-600" />
                        <a href={`mailto:${email}`} className="underline hover:text-blue-800">
                            {email}
                        </a>
                    </p>
                )}
            </div>
        </div>
    );
}
