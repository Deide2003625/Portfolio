'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Maison', href: '#accueil' },
    { name: 'Sur moi', href: '#apropos' },
    { name: 'Compétences', href: '#competences' },
    { name: 'Ce que je fais', href: '#experiences' },
    { name: 'Portfolio', href: '#projets' },
    { name: 'Contactez-moi', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-sm backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#accueil')}
              className="font-black text-[2rem] leading-none tracking-[-0.08em] text-transparent"
              aria-label="Aller à l'accueil"
            >
              <span className="inline-block text-blue-600">&lt;/</span>
              <span className="inline-block text-gray-900">WEB-CREATION</span>
              <span className="inline-block text-blue-600">&gt;</span>
            </button>
          </div>

          <div className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="xl:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
