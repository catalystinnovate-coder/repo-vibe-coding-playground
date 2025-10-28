
import React from 'react';
import { Testimonial } from '../types';
import TestimonialCard from './TestimonialCard';

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote: "Catalyst Innovation transformed our workflow. Their solution increased our productivity by over 50%. A true game-changer in the tech landscape.",
    name: 'Sarah Johnson',
    title: 'CEO, QuantumLeap Inc.',
    imageUrl: 'https://picsum.photos/id/1011/100/100',
  },
  {
    id: 2,
    quote: "The team's expertise is unparalleled. They understood our complex needs and delivered a product that exceeded all expectations. Highly recommended.",
    name: 'Michael Chen',
    title: 'CTO, Futura Dynamics',
    imageUrl: 'https://picsum.photos/id/1012/100/100',
  },
  {
    id: 3,
    quote: "Working with Catalyst felt like a true partnership. Their communication and dedication to our project's success were evident from day one.",
    name: 'Jessica Rodriguez',
    title: 'Head of Product, Apex Solutions',
    imageUrl: 'https://picsum.photos/id/1027/100/100',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            See what our partners have to say about our innovative solutions.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
