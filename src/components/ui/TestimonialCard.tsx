import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  company: string;
  comment: string;
  rating: number;
  image: string;
}

export const TestimonialCard = ({ name, company, comment, rating, image }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm text-gray-600">{company}</p>
        </div>
      </div>
      <div className="flex mb-2">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-700">{comment}</p>
    </div>
  );
};