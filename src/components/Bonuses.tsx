import React from 'react';
import { Book, CheckSquare, FileText } from 'lucide-react';
import { BonusCard } from './ui/BonusCard';

const bonuses = [
  {
    icon: <Book className="w-12 h-12 text-[#3A5DAE]" />,
    title: 'UTAGE運用ガイド',
    description: '効率的な運用方法を詳しく解説',
  },
  {
    icon: <FileText className="w-12 h-12 text-[#3A5DAE]" />,
    title: '成功事例集',
    description: '実際の導入企業の成功事例を紹介',
  },
  {
    icon: <CheckSquare className="w-12 h-12 text-[#3A5DAE]" />,
    title: '運用チェックリスト',
    description: '効果を最大化するためのチェックリスト',
  },
];

export const Bonuses = () => {
  return (
    <section className="py-16 bg-[#F0F5FC]">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">無料相談限定特典</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {bonuses.map((bonus, index) => (
            <BonusCard key={index} {...bonus} />
          ))}
        </div>
      </div>
    </section>
  );
};