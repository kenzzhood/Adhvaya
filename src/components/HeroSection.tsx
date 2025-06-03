import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  showCta?: boolean;
  imageUrl?: string;
  overlayOpacity?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  showCta = true,
  imageUrl = 'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  overlayOpacity = 'bg-black/50',
}) => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayOpacity}`}></div>
      
      {/* Content */}
      <div className="container relative z-10 text-white">
        <div className="max-w-3xl fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{title}</h1>
          <p className="text-xl md:text-2xl mb-8">{subtitle}</p>
          
          {showCta && (
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#book-demo" className="btn bg-primary-600 hover:bg-primary-700 text-white">
                Book Free Demo Class
              </a>
              <a href="/courses" className="btn bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30">
                Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;