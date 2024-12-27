import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  title: string;
  before: string;
  after: string;
  image: string;
}

export const CaseStudyCard = ({ title, before, after, image }: CaseStudyCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-600">Before</p>
            <p className="font-bold">{before}</p>
          </div>
          <ArrowRight className="w-6 h-6 text-[#3A5DAE]" />
          <div className="flex-1">
            <p className="text-sm text-gray-600">After</p>
            <p className="font-bold text-[#3A5DAE]">{after}</p>
          </div>
        </div>
      </div>
    </div>
  );
};