import React from 'react';
import { CheckCircle } from 'lucide-react';

interface BenefitItemProps {
  text: string;
}

export const BenefitItem = ({ text }: BenefitItemProps) => {
  return (
    <div className="flex items-start gap-4">
      <CheckCircle className="w-6 h-6 text-[#3A5DAE] flex-shrink-0 mt-1" />
      <p className="text-lg">{text}</p>
    </div>
  );
};