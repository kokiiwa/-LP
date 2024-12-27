import React from 'react';
import { CaseStudyCard } from './ui/CaseStudyCard';

const caseStudies = [
  {
    title: 'SNS活用で集客数が大幅に増加',
    before: '月間新規顧客 10件',
    after: '月間新規顧客 50件以上',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: '運用効率化で時間創出',
    before: '日々の運用に4時間',
    after: '日々の運用が1時間に短縮',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

export const CaseStudies = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">実際の成功事例</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
};