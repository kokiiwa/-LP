import React from 'react';

interface BonusCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const BonusCard = ({ icon, title, description }: BonusCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};