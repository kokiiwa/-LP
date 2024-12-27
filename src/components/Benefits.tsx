import React from 'react';
import { CheckCircle } from 'lucide-react';
import { BenefitItem } from './ui/BenefitItem';

const benefits = [
  'UTAGE導入前の不安を解消',
  '専門的なアドバイスで具体的な解決策を提示',
  'ビジネスの課題に即したカスタムプランを提案',
  '実績豊富な専門家による無料相談',
];

const pastConsultations = [
  'SNSマーケティングの効率化について',
  '顧客管理システムの最適化相談',
  '売上向上のための戦略立案',
];

export const Benefits = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">30分無料相談で得られるもの</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <BenefitItem key={index} text={benefit} />
            ))}
          </div>
          <div className="bg-[#F0F5FC] p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">過去の相談例</h3>
            <ul className="space-y-4">
              {pastConsultations.map((consultation, index) => (
                <li key={index}>✓ {consultation}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};