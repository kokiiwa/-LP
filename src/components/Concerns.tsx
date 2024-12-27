import React from 'react';
import { ConcernItem } from './ui/ConcernItem';
import { Wind } from 'lucide-react';

const concerns = [
  {
    text: 'マーケティング知識ゼロだけど\n売上アップを狙いたい...',
    highlight: '売上アップを狙いたい'
  },
  {
    text: 'UTAGEの機能が多すぎて\n何を使うべきなのかわからない...',
    highlight: '何を使うべきなのかわからない'
  },
  {
    text: 'UTAGEを構築する\n時間がない...',
    highlight: '時間がない'
  },
  {
    text: 'UTAGE構築の作業を\nまとめて安く依頼したい！',
    highlight: 'まとめて安く依頼したい'
  },
  {
    text: '集客導線の設計が面倒で\nマネタイズできていない...',
    highlight: 'マネタイズできていない'
  }
];

export const Concerns = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Wind className="w-8 h-8 text-gray-400 rotate-180" />
            <h2 className="text-4xl font-bold">こんなお悩みありませんか？</h2>
            <Wind className="w-8 h-8 text-gray-400" />
          </div>
        </div>
        
        <div className="relative">
          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            {concerns.map((concern, index) => (
              <ConcernItem key={index} {...concern} />
            ))}
          </div>
          
          {/* Center illustration */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
              alt="悩む人" 
              className="w-64 h-64 object-cover rounded-full opacity-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};