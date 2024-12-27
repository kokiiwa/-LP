import React from 'react';
import { CTAButton } from './ui/CTAButton';

export const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#3A5DAE] to-[#9068E4] text-white">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-3xl font-bold mb-6">今すぐ無料相談を申し込む</h2>
        <p className="text-xl mb-8">わずか30分で、あなたのビジネス課題が解決します！</p>
        <CTAButton />
      </div>
    </section>
  );
};