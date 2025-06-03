import React from 'react';
import HeroSection from '../components/HeroSection';
import TestimonialCard from '../components/TestimonialCard';
import { Star } from 'lucide-react';

const TestimonialsPage: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      content: "My son's math scores improved dramatically after joining Advaya Coaching. The teachers make complex concepts simple and engaging!",
      author: "Priya Sharma",
      role: "Parent of 8th Grader",
      imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    },
    {
      id: 2,
      content: "The personalized attention at Advaya Coaching helped me overcome my fear of science. I now love physics and chemistry!",
      author: "Rahul Verma",
      role: "10th Grade Student",
      imageUrl: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    },
    {
      id: 3,
      content: "The teaching methodology at Advaya is exceptional. My daughter enjoys learning and has developed a strong foundation in mathematics.",
      author: "Anil Kumar",
      role: "Parent of 7th Grader",
      imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4
    },
    {
      id: 4,
      content: "I struggled with science for years until I joined Advaya. Their approach to teaching made all the difference. I'm now one of the top students in my class!",
      author: "Sneha Patel",
      role: "9th Grade Student",
      imageUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    },
    {
      id: 5,
      content: "The teachers at Advaya are not just knowledgeable but also approachable. My son can ask questions without hesitation, which has boosted his confidence.",
      author: "Rajesh Gupta",
      role: "Parent of 9th Grader",
      imageUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    },
    {
      id: 6,
      content: "The regular assessments and feedback have helped me identify my strengths and weaknesses. I've seen significant improvement in my grades.",
      author: "Kavita Singh",
      role: "10th Grade Student",
      imageUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4
    },
    {
      id: 7,
      content: "The flexible batch timings have been a blessing for our busy schedule. My daughter can attend classes without compromising on her other activities.",
      author: "Mohan Reddy",
      role: "Parent of 8th Grader",
      imageUrl: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    },
    {
      id: 8,
      content: "The hands-on activities in science classes have made learning fun and memorable. I never thought I'd enjoy studying so much!",
      author: "Ananya Joshi",
      role: "7th Grade Student",
      imageUrl: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    },
  ];

  // Calculate statistics
  const totalTestimonials = testimonials.length;
  const averageRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / totalTestimonials;
  const fiveStarPercentage = (testimonials.filter(t => t.rating === 5).length / totalTestimonials) * 100;

  return (
    <div>
      <HeroSection
        title="Success Stories"
        subtitle="Hear what our students and parents have to say about their experience with Advaya Coaching Centre"
        imageUrl="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        showCta={false}
      />

      {/* Testimonial Stats */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">{totalTestimonials}+</div>
              <p className="text-xl text-gray-700">Happy Students & Parents</p>
            </div>
            
            <div className="card text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">{averageRating.toFixed(1)}</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-6 w-6 ${
                      i < Math.round(averageRating)
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-xl text-gray-700">Average Rating</p>
            </div>
            
            <div className="card text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">{Math.round(fiveStarPercentage)}%</div>
              <p className="text-xl text-gray-700">5-Star Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Students & Parents Say</h2>
            <p className="section-subtitle mx-auto">
              Real stories from those who have experienced the Advaya difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="fade-in">
                <div className="mb-2 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
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
      </section>

      {/* Video Testimonial */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Featured Success Stories</h2>
            <p className="section-subtitle mx-auto">
              Watch our students share their journey and academic transformation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
              {/* Placeholder for video testimonial */}
              <p className="text-gray-500">Video Testimonial Placeholder</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                From Struggling to Excelling: Rahul's Story
              </h3>
              <p className="text-gray-600 mb-6">
                Rahul was struggling with physics concepts and his grades were dropping.
                After joining Advaya Coaching Centre, our personalized approach and
                hands-on teaching methods helped him not only understand the concepts
                but also develop a passion for the subject.
              </p>
              <p className="text-gray-600 mb-6">
                Within six months, Rahul's grades improved from C to A, and he went on to
                participate in the regional science competition. His success story is a
                testament to our teaching methodology and dedication to student success.
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Rahul Verma"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Rahul Verma</h4>
                  <p className="text-sm text-gray-600">10th Grade Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leave a Testimonial */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Share Your Experience</h2>
            <p className="section-subtitle mx-auto">
              Are you a student or parent of Advaya Coaching Centre? We'd love to hear about your experience!
            </p>
            <a href="/contact" className="btn btn-primary mt-6">
              Submit Your Testimonial
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the Advaya Difference</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied students and parents. Book a free demo class today!
          </p>
          <a href="/#book-demo" className="btn bg-white text-primary-600 hover:bg-gray-100">
            Book Free Demo Class
          </a>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;