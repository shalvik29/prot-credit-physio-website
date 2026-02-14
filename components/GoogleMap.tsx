'use client';

interface GoogleMapProps {
    address?: string;
    className?: string;
}

export default function GoogleMap({ 
    address = "123 Example Street, Port Credit, Mississauga, ON L5G 123",
    className = "" 
}: GoogleMapProps) {
    // Encode the address for the URL
    const encodedAddress = encodeURIComponent(address);
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    
    return (
        <div className={`w-full h-full rounded-md overflow-hidden ${className}`}>
            <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedAddress}`}
                title="Port Credit Physio Location"
            />
        </div>
    );
}
