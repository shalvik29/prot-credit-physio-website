'use client';

import { useState } from 'react';

interface AccordionItemProps {
    question: string;
    answer: React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
}

function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
    return (
        <div className="border-b border-gray-200">
            <button
                className="w-full text-left py-5 px-4 md:px-6 flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span className="font-semibold text-lg text-navy-dark leading-tight pr-4">
                    {question}
                </span>
                <span className="flex-shrink-0 text-steel-blue">
                    <svg
                        className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-4 md:px-6 pb-6 text-gray-700 leading-relaxed bg-gray-50/50">
                    {answer}
                </div>
            </div>
        </div>
    );
}

interface AccordionProps {
    items: {
        id: string;
        question: string;
        answer: React.ReactNode;
    }[];
}

export default function Accordion({ items }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleItem = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            {items.map((item, index) => (
                <AccordionItem
                    key={item.id}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === index}
                    onClick={() => toggleItem(index)}
                />
            ))}
        </div>
    );
}
