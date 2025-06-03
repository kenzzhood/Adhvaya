import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "My son's math scores improved dramatically after joining Advaya Coaching. The teachers make complex concepts simple and engaging!",
    author: "Priya Sharma",
    role: "Parent of 8th Grader",
    imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    content: "The personalized attention at Advaya Coaching helped me overcome my fear of science. I now love physics and chemistry!",
    author: "Rahul Verma",
    role: "10th Grade Student",
    imageUrl: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    content: "The teaching methodology at Advaya is exceptional. My daughter enjoys learning and has developed a strong foundation in mathematics.",
    author: "Anil Kumar",
    role: "Parent of 7th Grader",
    imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    content: "I struggled with science for years until I joined Advaya. Their approach to teaching made all the difference. I'm now one of the top students in my class!",
    author: "Sneha Patel",
    role: "9th Grade Student",
    imageUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayCount, setDisplayCount] = useState(3);

  const updateDisplayCount = () => {
    if (window.innerWidth < 768) {
      setDisplayCount(1);
    } else if (window.innerWidth < 1024) {
      setDisplayCount(2);
    } else {
      setDisplayCount(3);
    }
  };

  useEffect(() => {
    updateDisplayCount();
    window.addEventListener('resize', updateDisplayCount);
    return () => {
      window.removeEventListener('resize', updateDisplayCount);
    };
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => 
      (prev + 1) % (testimonials.length - (displayCount - 1))
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - displayCount : prev - 1
    );
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + displayCount);

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, displayCount]);

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <h2 className="section-title">What Our Students Say</h2>
        <div className="flex space-x-2">
          <button 
            onClick={goToPrev}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>
          <button 
            onClick={goToNext}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="fade-in">
            <TestimonialCard
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              imageUrl={testimonial.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;