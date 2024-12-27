import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CTAButton } from './ui/CTAButton';

export const Header = () => {
  return (
    <header className="bg-gradient-to-br from-[#3A5DAE] to-[#9068E4] text-white py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            UTAGEで"課題解決"と"効率化"を実現！
            <br />
            30分無料相談でビジネスを加速
          </h1>
          <p className="text-xl mb-8">導入から運用まで、プロが徹底サポートします。</p>
          <CTAButton />
        </div>
      </div>
    </header>
  );
};