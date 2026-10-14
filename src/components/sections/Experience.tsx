'use client';

import { useEffect, useState } from 'react';

const services = [
  {
    title: 'Application Web',
    description:
      'Je conçois et développe des applications web modernes, évolutives et réactives, adaptées aux besoins des utilisateurs et aux objectifs commerciaux, en combinant un code propre et une expérience utilisateur fluide.',
  },
  {
    title: 'Système de gestion intégré',
    description:
      'Je conçois des systèmes de gestion intégrés qui centralisent et optimisent les opérations commerciales, permettant une meilleure prise de décision et une productivité accrue.',
  },
];

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('experiences');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experiences" className="bg-[#f5f5f5] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="mb-12 text-center text-4xl font-bold tracking-[-0.04em] text-gray-800 sm:text-5xl">
            Ce que je fais
          </h2>

          <div className="mx-auto mb-2 h-1 w-20 rounded-full bg-blue-600" />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`px-4 pt-2 md:px-8 ${
                  index === 1 ? 'border-l border-slate-300 pl-8 md:pl-10' : ''
                }`}
              >
                <div className="mb-6 text-3xl font-black leading-tight tracking-[-0.05em] text-gray-900 md:text-5xl">
                  {service.title}
                </div>

                <p className="max-w-[32rem] text-lg leading-relaxed text-gray-700 sm:text-xl">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
