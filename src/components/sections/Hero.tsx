'use client';

import Image from 'next/image';
import { personalInfo } from '@/lib/data';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen overflow-hidden bg-[#f5f5f5] px-4 pb-12 pt-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex min-h-[calc(100vh-5rem)] flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full lg:w-[57%]">
            <p className="mb-8 text-[0.7rem] font-medium uppercase tracking-[0.35em] text-gray-500 sm:text-sm">
              Bienvenue sur webcreation
            </p>

            <h1 className="max-w-[1100px] text-[clamp(2.4rem,4vw,5.6rem)] font-black leading-[0.82] tracking-[-0.08em] text-gray-900">
              <span className="block whitespace-nowrap">
                Salut, je suis{' '}
                <span className="text-blue-600">{personalInfo.name}</span>
              </span>
              <span className="mt-1 block whitespace-nowrap text-gray-900">{personalInfo.title}</span>
            </h1>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-5">
              <a
                href="/cv/CV_Chedide_GAHOU.pdf"
                download="CV_Chedide_GAHOU.pdf"
                className="inline-flex items-center justify-center rounded-[0.35rem] bg-blue-600 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 sm:text-lg"
              >
                Télécharger le CV
              </a>
              <button
                onClick={() => scrollToSection('#experiences')}
                className="inline-flex items-center justify-center rounded-[0.35rem] bg-blue-600 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 sm:text-lg"
              >
                Ce que je fais
              </button>
            </div>
          </div>

          <div className="relative mt-10 flex w-full items-end justify-center lg:mt-0 lg:w-[43%] lg:justify-end">
            <div className="relative w-[86%] max-w-[560px]">
              <div className="absolute left-1/2 top-3 h-[72%] w-[78%] -translate-x-1/2 rounded-[45%] bg-white/70 blur-3xl" />
              <div className="relative overflow-hidden rounded-[42%_42%_18%_18%] bg-[#f2f2f2] shadow-[0_30px_80px_rgba(15,23,42,0.12)] ring-8 ring-white/40">
                <Image
                  src="/images/img.jpg"
                  alt={personalInfo.name}
                  width={700}
                  height={860}
                  priority
                  className="h-[540px] w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center lg:mt-0">
          <button
            onClick={() => scrollToSection('#apropos')}
            aria-label="Voir plus"
            className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-300 bg-white/80 shadow-md transition hover:scale-105 hover:bg-white"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-7 w-7 text-gray-700"
            >
              <path d="M12 4v12m0 0 4-4m-4 4-4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
