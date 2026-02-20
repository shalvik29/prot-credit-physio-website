'use client';

import { useState, FormEvent } from 'react';
import Button from './ui/Button';

interface FormData {
    name: string;
    email: string;
    phone: string;
    service: string;
    preferredDate: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    service?: string;
    message?: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        service: '',
        preferredDate: '',
        message: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const services = [
        'Physiotherapy',
        'Massage Therapy',
        'Chiropractic Care',
        'Acupuncture',
        'Pelvic Floor Physiotherapy',
        'Sports Rehabilitation',
    ];

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        if (!formData.service) {
            newErrors.service = 'Please select a service';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // TODO: Replace with your actual API endpoint
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    service: '',
                    preferredDate: '',
                    message: '',
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy-dark mb-2">
                    Full Name *
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-steel-blue focus:border-transparent outline-none transition-colors ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy-dark mb-2">
                    Email Address *
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-steel-blue focus:border-transparent outline-none transition-colors ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="john@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-navy-dark mb-2">
                    Phone Number *
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-steel-blue focus:border-transparent outline-none transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="(555) 123-4567"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
            </div>

            {/* Service */}
            <div>
                <label htmlFor="service" className="block text-sm font-medium text-navy-dark mb-2">
                    Service Interested In *
                </label>
                <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-steel-blue focus:border-transparent outline-none transition-colors ${
                        errors.service ? 'border-red-500' : 'border-gray-300'
                    }`}
                >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                        <option key={service} value={service}>
                            {service}
                        </option>
                    ))}
                </select>
                {errors.service && <p className="mt-1 text-sm text-red-500">{errors.service}</p>}
            </div>

            {/* Preferred Date */}
            <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-navy-dark mb-2">
                    Preferred Date (Optional)
                </label>
                <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-steel-blue focus:border-transparent outline-none transition-colors"
                />
            </div>

            {/* Message */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy-dark mb-2">
                    Message *
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-steel-blue focus:border-transparent outline-none transition-colors resize-none ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your condition or what you'd like help with..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <div>
                <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    onClick={undefined}
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
            </div>

            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                    <p className="text-green-800 text-sm">
                        Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                    </p>
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-red-800 text-sm">
                        Sorry, there was an error sending your message. Please try again or call us directly.
                    </p>
                </div>
            )}
        </form>
    );
}
