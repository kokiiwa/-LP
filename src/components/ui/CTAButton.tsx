import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CTAButton = () => {
  return (
    <button className="bg-white text-[#3A5DAE] px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group">
      無料相談を今すぐ申し込む
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </button>
  );
};