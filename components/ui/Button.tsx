import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    style?: React.CSSProperties;
    target?: string;
    rel?: string;
}

export default function Button({
    children,
    href,
    onClick,
    variant = 'primary',
    className = '',
    type = 'button',
    style,
    target,
    rel,
}: ButtonProps) {
    const baseStyles =
        'inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200';

    const variants = {
        primary: 'border-transparent text-white bg-navy-dark hover:bg-navy-medium focus:ring-navy-dark',
        secondary: 'border-transparent text-white bg-steel-blue hover:bg-navy-medium focus:ring-steel-blue',
        outline: 'border-navy-dark text-navy-dark bg-transparent hover:bg-gray-50 focus:ring-navy-dark',
    };

    const styles = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={styles} style={style} target={target} rel={rel}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={styles} onClick={onClick} style={style}>
            {children}
        </button>
    );
}
