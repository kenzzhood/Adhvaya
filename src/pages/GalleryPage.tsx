import React from 'react';
import HeroSection from '../components/HeroSection';
import GalleryGrid from '../components/GalleryGrid';

const GalleryPage: React.FC = () => {
  return (
    <div>
      <HeroSection
        title="Our Gallery"
        subtitle="Take a peek into our learning environment and student activities"
        imageUrl="https://images.pexels.com/photos/267491/pexels-photo-267491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        showCta={false}
      />

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Moments at Advaya</h2>
            <p className="section-subtitle mx-auto">
              Browse through our gallery to see our classrooms, activities, and happy students
            </p>
          </div>

          <GalleryGrid />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Be Part of Our Story?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join Advaya Coaching Centre and be featured in our gallery of success stories!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/#book-demo" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Book Free Demo Class
            </a>
            <a href="/contact" className="btn bg-primary-700 hover:bg-primary-800 text-white">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;