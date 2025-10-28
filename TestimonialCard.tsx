
import React from 'react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="flex flex-col bg-slate-800/50 p-6 rounded-lg ring-1 ring-white/10">
      <div className="flex-grow">
        <p className="text-slate-300">"{testimonial.quote}"</p>
      </div>
      <div className="mt-6 flex items-center">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src={testimonial.imageUrl}
          alt={testimonial.name}
        />
        <div className="ml-4">
          <p className="font-semibold text-white">{testimonial.name}</p>
          <p className="text-sm text-slate-400">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
