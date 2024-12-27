import React from 'react';
import { Target, DollarSign, TrendingUp } from 'lucide-react';
import { FeatureCard } from './ui/FeatureCard';

const features = [
  {
    icon: <Target className="w-12 h-12 text-[#3A5DAE]" />,
    title: '集客の自動化',
    description: '効率的な集客システムで新規顧客の獲得を自動化',
  },
  {
    icon: <DollarSign className="w-12 h-12 text-[#3A5DAE]" />,
    title: '運用コストの削減',
    description: '無駄な作業を削減し、運用コストを最小限に',
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-[#3A5DAE]" />,
    title: '売上の最大化',
    description: 'データ分析に基づく最適化で売上を向上',
  },
];

export const Overview = () => {
  return (
    <section className="py-16 bg-[#F0F5FC]">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">UTAGEとは？</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};