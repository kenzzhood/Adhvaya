import React, { useEffect, useState } from 'react';
import ContactForm from '../components/ContactForm';
import { Calculator, FlaskRound as Flask, Code, Users, Clock, Award, BarChart, CheckCircle, ArrowDown, Mail } from 'lucide-react';

const HomePage: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const subjects = [
    {
      id: 1,
      title: 'Mathematics',
      description: 'Strong foundations in algebra, geometry, and advanced mathematics for grades.',
      icon: Calculator,
      image: 'https://images.pexels.com/photos/5088007/pexels-photo-5088007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      outcomes: [
        'Develop problem-solving skills through concept-based learning',
        'Master core topics like algebra, geometry, statistics, and number systems',
        'Build confidence to tackle competitive and board-level exams',
      ]
    },
    {
      id: 2,
      title: 'Science',
      description: 'Comprehensive coverage of physics, chemistry, and biology with practical demonstrations.',
      icon: Flask,
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1600',
      outcomes: [
        'Explore fundamental principles of physics, chemistry, and biology',
        'Conduct experiments and understand scientific methodologies',
        'Prepare for advanced science studies and competitive exams',
      ]
    },
    {
      id: 3,
      title: 'Computer Science',
      description: 'Introduction to programming, algorithms, and computational thinking.',
      icon: Code,
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1600',
      outcomes: [
        'Learn foundational programming concepts and logic',
        'Understand data structures and algorithms',
        'Develop skills for building simple applications',
      ]
    },
  ];

  const features = [
    {
      id: 1,
      title: 'Small Batch Size',
      description: 'Maximum attention with 3-5 students per batch',
      icon: Users,
    },
    {
      id: 2,
      title: 'Flexible Timing',
      description: 'Multiple batches to suit your schedule',
      icon: Clock,
    },
    {
      id: 3,
      title: 'Expert Faculty',
      description: 'Experienced teachers passionate about education',
      icon: Award,
    },
    {
      id: 4,
      title: 'Progress Tracking',
      description: 'Regular assessments and detailed feedback',
      icon: BarChart,
    },
  ];

  const achievements = [
    { number: '100+', label: 'Students Taught' },
    { number: '95%', label: 'Success Rate' },
    { number: '10+', label: 'Years Experience' },
    { number: '100%', label: 'Parent Satisfaction' },
  ];

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Hero Section with Parallax */}
      <section id="home" className="relative h-screen flex items-center">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-primary-900/40"></div> {/* Gradient overlay */}
        </div>
        
        <div className="container relative z-10 text-white">
          <div className="max-w-3xl slide-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Excellence in Education
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Empowering students with personalized learning and strong academic foundations
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#book-demo" className="btn bg-primary-600 hover:bg-primary-700 text-white transform hover:scale-105 transition-all">
                Book Free Demo Class
              </a>
              <a href="tel:+919876543210" className="btn bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 transform hover:scale-105 transition-all">
                Call Now
              </a>
            </div>
          </div>
        </div>

        <button 
          onClick={scrollToNext}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        >
          <ArrowDown size={32} />
        </button>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-primary-50/50 to-white/0"
          style={{
            transform: `translateY(${(scrollY - 500) * 0.2}px)`,
          }}
        ></div>
        
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="About Advaya"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-lg shadow-xl transform hover:scale-110 transition-transform duration-500">
                <p className="text-3xl font-bold">10+</p>
                <p>Years of Excellence</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold mb-6">About Advaya Coaching</h2>
              <div className="w-20 h-1 bg-primary-600 mb-6"></div>
              <p className="text-gray-600 mb-6">
                Founded in 2016, Advaya Coaching Centre has been at the forefront of educational excellence, 
                providing quality education in Mathematics, Science, and Computer Science to students from 
                grades 6 to 10.
              </p>
              <p className="text-gray-600 mb-6">
                Our mission is to nurture young minds through personalized attention and innovative teaching 
                methods. We believe in building strong foundations that prepare students not just for 
                examinations, but for life-long learning.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-primary-50 p-6 rounded-lg transform hover:scale-105 transition-all">
                  <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                  <p className="text-gray-600">To provide quality education that empowers students to achieve academic excellence.</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-lg transform hover:scale-105 transition-all">
                  <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                  <p className="text-gray-600">To be the leading institute in transforming education through personalized learning.</p>
                </div>
              </div>

              {/* Online/Offline Classes and Boards */}
              <div className="mt-8 p-6 bg-primary-50 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Boards Covered:</h4>
                <ul className="list-disc list-inside text-gray-700">
                  <li>State</li>
                  <li>CBSE</li>
                  <li>ICSE</li>
                  <li>IGCSE</li>
                  <li>IB</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Available Section */}
      <section id="classes-available" className="relative py-20 overflow-hidden min-h-[400px] flex items-center">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1329571/pexels-photo-1329571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          }}
        >
          <div className="absolute inset-0 bg-primary-900/60"></div> {/* Lighter overlay */}
        </div>
        <div className="container relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Classes Available</h2> {/* Increased size and white text */}
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto"> {/* Increased size and lighter text */}
            We offer both online and offline classes to suit your learning preferences and schedule.
          </p>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-12 bg-primary-600 text-white transform">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center transform hover:scale-110 transition-all cursor-pointer"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{achievement.number}</div>
                <div className="text-primary-100">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section with Images */}
      <section id="subjects" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Subjects</h2>
            <p className="section-subtitle mx-auto">
              Comprehensive programs designed to build strong foundations
            </p>
          </div>

          {subjects.map((subject, index) => (
            <div key={subject.id} 
                 className={`flex flex-col md:flex-row items-center gap-12 ${
                   index !== subjects.length - 1 ? 'mb-20' : ''
                 } ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2">
                <img
                  src={subject.image}
                  alt={subject.title}
                  className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <subject.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{subject.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{subject.description}</p>
                <ul className="space-y-3">
                  {subject.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section with Parallax Background */}
      <section id="features" className="py-20 relative">
        <div className="absolute inset-0 bg-fixed bg-center bg-cover" style={{
          backgroundImage: `url('https://images.pexels.com/photos/5428012/pexels-photo-5428012.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
          transform: 'translateZ(0)',
        }}>
          <div className="absolute inset-0 bg-primary-900/90"></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-12">
            <h2 className="section-title text-white">Why Choose Us</h2>
            <p className="section-subtitle mx-auto text-primary-100">
              What makes Advaya Coaching Centre different
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.id} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
                  <div className="text-white text-center">
                    <div className="mx-auto bg-white/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-primary-100">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">Get In Touch</h2>
              <p className="section-subtitle">
                Book a free demo class or send us a message. We'll get back to you as soon as possible.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-center">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Gmail</h3>
                    <p className="text-gray-600">advayacoaching@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Call Us</h3>
                    <a 
                      href="tel:+919876543210" 
                      className="text-3xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      +91 90087 91445
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 bg-primary-600 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <ArrowDown className="transform rotate-180" />
      </button>
    </div>
  );
};

export default HomePage;
