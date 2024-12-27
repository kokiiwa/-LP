import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ConcernItemProps {
  text: string;
  highlight: string;
}

export const ConcernItem = ({ text, highlight }: ConcernItemProps) => {
  const parts = text.split(highlight);
  
  return (
    <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative">
      <div className="absolute -top-2 -right-2">
        <CheckCircle className="w-6 h-6 text-[#3A5DAE]" />
      </div>
      <p className="text-lg leading-relaxed">
        {parts[0]}
        <span className="text-red-500 font-bold">{highlight}</span>
        {parts[1]}
      </p>
    </div>
  );
};