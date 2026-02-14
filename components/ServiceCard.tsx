import Link from 'next/link';

interface ServiceCardProps {
    title: string;
    description: string;
    href?: string;
    className?: string;
    imageUrl?: string;
}

export default function ServiceCard({
    title,
    description,
    href = '/services',
    className = '',
    imageUrl,
}: ServiceCardProps) {
    const CardContent = (
        <div className={`rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 overflow-hidden ${className}`} style={{ backgroundColor: '#F4F8F8' }}>
            {imageUrl && (
                <div className="w-full h-48 overflow-hidden">
                    <img 
                        src={imageUrl} 
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
            )}
            <div className="p-6">
                <h3 className="text-xl font-bold text-navy-dark mb-3">{title}</h3>
                <p className="text-navy-medium mb-4">{description}</p>
                <span className="text-steel-blue font-medium inline-flex items-center group-hover:text-navy-dark transition-colors">
                    Learn more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </span>
            </div>
        </div>
    );

    if (href) {
        return (
            <Link href={href} className="block group h-full">
                {CardContent}
            </Link>
        );
    }

    return <div className="h-full">{CardContent}</div>;
}
