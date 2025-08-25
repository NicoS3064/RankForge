import React, { useState } from 'react';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className = ''
}) => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  
  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenItems(prev => 
        prev.includes(index) 
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenItems(prev => 
        prev.includes(index) ? [] : [index]
      );
    }
  };
  
  return (
    <div className={`divide-y divide-gray-200 border border-gray-200 rounded-lg ${className}`}>
      {items.map((item, index) => {
        const isOpen = openItems.includes(index);
        
        return (
          <div key={index}>
            <button
              onClick={() => toggleItem(index)}
              className="flex w-full items-center justify-between p-4 text-left font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
            >
              <span>{item.title}</span>
              <svg
                className={`h-5 w-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isOpen && (
              <div className="p-4 pt-0 text-gray-600">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};