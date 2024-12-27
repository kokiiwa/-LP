import React from 'react';
import { TestimonialCard } from './ui/TestimonialCard';

const testimonials = [
  {
    name: '山田 太郎',
    company: '株式会社Innovation',
    comment: 'UTAGE導入後、売上が200%アップしました！効率的な運用が可能になり、時間的な余裕も生まれました。',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
  },
  {
    name: '鈴木 美咲',
    company: 'テックソリューション株式会社',
    comment: '運用コストが削減され、新規プロジェクトに注力できるようになりました。サポートも手厚く、安心して利用できています。',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
  },
];

export const Testimonials = () => {
  return (
    <section className="py-16 bg-[#F0F5FC]">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">UTAGEで成果を出したお客様の声</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};