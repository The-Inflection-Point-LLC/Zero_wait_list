import { useState } from 'react';
import HighlightText from "@/components/HighlightText";

interface AccordionItemProps {
    title: string;
    content: string;
    color: string;
    isOpen: boolean;
    onToggle: () => void;
}

const AccordionItem = ({ title, content, color, isOpen, onToggle }: AccordionItemProps) => (
    <div
        className={`relative flex flex-col items-center p-4 rounded-lg mb-4 cursor-pointer`}
        style={{ backgroundColor: color }}
        onClick={onToggle}
    >
        <div className="flex justify-between w-full items-center">
            <HighlightText
                text={title}
                className="text-white font-semibold text-lg"
            />
            <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
        {isOpen && (
            <div className="w-full mt-2">
                <HighlightText
                    text={content}
                    className="text-white text-base whitespace-pre-wrap"
                />
            </div>
        )}
    </div>
);

interface CustomAccordionProps {
    items: { id: number; title: string; content: string; color: string }[];
}

const CustomAccordion = ({ items }: CustomAccordionProps) => {
    const [openItem, setOpenItem] = useState<number | null>(null);

    const handleToggle = (id: number) => {
        setOpenItem(openItem === id ? null : id);
    };

    return (
        <div className="flex flex-col items-center gap-4 w-full">
            {items.map((item) => (
                <AccordionItem
                    key={item.id}
                    title={item.title}
                    content={item.content}
                    color={item.color}
                    isOpen={openItem === item.id}
                    onToggle={() => handleToggle(item.id)}
                />
            ))}
        </div>
    );
};

export default CustomAccordion;
