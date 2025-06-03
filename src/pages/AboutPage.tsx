import React from 'react';
import HeroSection from '../components/HeroSection';
import { Users, BookOpen, Award, Target, Heart, Lightbulb } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      id: 1,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from teaching methodologies to student support.',
      icon: Award,
    },
    {
      id: 2,
      title: 'Personalization',
      description: 'We believe in adapting our teaching approach to meet the individual needs of each student.',
      icon: Users,
    },
    {
      id: 3,
      title: 'Integrity',
      description: 'We uphold the highest standards of honesty, ethics, and professional conduct.',
      icon: Heart,
    },
    {
      id: 4,
      title: 'Innovation',
      description: 'We continuously seek innovative teaching methods to make learning more effective and engaging.',
      icon: Lightbulb,
    },
  ];

  const team = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Mathematics Specialist',
      image: 'https://images.pexels.com/photos/5212665/pexels-photo-5212665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: '15+ years of experience teaching mathematics at various levels. Masters in Mathematics from IIT.',
    },
    {
      id: 2,
      name: 'Ananya Sharma',
      role: 'Physics Instructor',
      image: 'https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Specializes in making physics concepts accessible through practical demonstrations. Ph.D. in Physics.',
    },
    {
      id: 3,
      name: 'Vikram Singh',
      role: 'Chemistry Expert',
      image: 'https://images.pexels.com/photos/8617857/pexels-photo-8617857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Passionate about chemistry education with innovative teaching methods. 10+ years of teaching experience.',
    },
  ];

  return (
    <div>
      <HeroSection
        title="About Advaya Coaching Centre"
        subtitle="Our mission, values, and the team behind our success"
        imageUrl="https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        showCta={false}
      />

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="slide-up">
              <h2 className="section-title text-4xl font-extrabold text-gray-900 mb-6">Our Mission & Vision</h2>
              <div className="w-24 h-1.5 bg-primary-600 mb-10 rounded-full"></div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Mission</h3>
              <p className="mb-8 text-gray-700 text-lg leading-relaxed">
                To provide quality education in Mathematics and Science that empowers students to achieve academic excellence and develop critical thinking skills.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Vision</h3>
              <p className="mb-10 text-gray-700 text-lg leading-relaxed">
                To be recognized as the premier coaching centre that transforms students' academic journey by instilling a love for learning and building strong foundations in Mathematics and Science.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Students learning"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden mt-8 shadow-lg transform transition duration-300 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/4143791/pexels-photo-4143791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Classroom"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/6238972/pexels-photo-6238972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Teacher explaining"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden mt-8 shadow-lg transform transition duration-300 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/8197519/pexels-photo-8197519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Science experiment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online/Offline Classes and Boards - Highlighted Section */}
      <section className="py-56 bg-gradient-to-br from-blue-950 to-purple-950 text-white overflow-hidden relative">
        <div className="container text-center relative z-10">
          <div className="flex items-center justify-center mb-24">
            <BookOpen className="h-48 w-48 text-white mr-20 drop-shadow-2xl animate-pulse" />
            <h2 className="text-9xl font-black drop-shadow-2xl">Classes & Boards</h2>
          </div>
          <p className="text-5xl mb-28 max-w-8xl mx-auto leading-relaxed drop-shadow-xl">
            We offer both online and offline classes to suit your learning preferences and schedule, covering a wide range of educational boards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32 max-w-9xl mx-auto">
            <div className="p-24 bg-white text-gray-900 rounded-4xl shadow-4xl transform transition duration-700 hover:scale-110 hover:shadow-5xl">
              <h3 className="text-8xl font-bold mb-12 text-blue-950">Classes</h3>
              <p className="text-5xl leading-relaxed">Online & Offline</p>
            </div>
            <div className="p-24 bg-white text-gray-900 rounded-4xl shadow-4xl transform transition duration-700 hover:scale-110 hover:shadow-5xl">
              <h3 className="text-8xl font-bold mb-12 text-purple-950">Boards Covered</h3>
              <ul className="list-disc list-inside text-5xl text-left mx-auto w-fit space-y-8">
                <li>State Board</li>
                <li>CBSE</li>
                <li>ICSE</li>
                <li>IB</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-100">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title text-4xl font-extrabold text-gray-900">Our Story</h2>
            <div className="w-24 h-1.5 bg-primary-600 mb-8 mx-auto rounded-full"></div>
            <p className="section-subtitle text-xl text-gray-700 max-w-3xl mx-auto">
              The journey of Advaya Coaching Centre - Empowering students since 2010
            </p>
          </div>

          <div className="max-w-4xl mx-auto text-gray-700 space-y-8 text-lg leading-relaxed">
            <p>
              Advaya Coaching Centre was founded in 2010 by a group of passionate educators who shared a common vision: to create a nurturing and effective learning environment where every student could thrive. What began as a humble initiative with just 15 students has blossomed into a leading institution, trusted by hundreds of families each year.
            </p>
            <p>
              Our founders, seasoned educators with years of experience, recognized the limitations of conventional teaching methods. They envisioned a coaching center that prioritized personalized attention, fostered a deep conceptual understanding, and ignited a genuine passion for learning in Mathematics and Science.
            </p>
            <p>
              Driven by a commitment to continuous improvement, we have consistently refined our curriculum and teaching methodologies. We integrate the latest educational research and technology, while always keeping the individual needs of our students at the forefront. Our success is measured not just by academic results, but by the confidence and lifelong love for learning we instill in our students.
            </p>
            <p>
              Today, Advaya Coaching Centre stands as a beacon of educational excellence, dedicated to helping students unlock their full potential and achieve their academic dreams. We are proud of our journey and excited about the future, as we continue to empower the next generation of learners.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title text-4xl font-extrabold text-gray-900">Our Core Values</h2>
            <div className="w-24 h-1.5 bg-primary-600 mb-8 mx-auto rounded-full"></div>
            <p className="section-subtitle text-xl text-gray-700 max-w-3xl mx-auto">
              The principles that guide our commitment to student success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.id} className="card text-center p-6 bg-gray-50 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="mx-auto bg-primary-200 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                    <Icon className="h-10 w-10 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-700 text-base leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title text-4xl font-extrabold text-gray-900">Meet Our Expert Team</h2>
            <div className="w-24 h-1.5 bg-primary-600 mb-8 mx-auto rounded-full"></div>
            <p className="section-subtitle text-xl text-gray-700 max-w-3xl mx-auto">
              Our dedicated educators are committed to guiding you towards success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member) => (
              <div key={member.id} className="card overflow-hidden bg-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <div className="h-72 mb-6 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary-700 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-700 text-base leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-extrabold mb-6">Ready to Join Advaya Coaching Centre?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Take the first step towards academic excellence. Book a free demo class or contact us to learn more about our programs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="/#book-demo" className="btn text-primary-800 bg-white hover:bg-gray-100 text-lg px-8 py-4 rounded-full shadow-lg transform transition duration-300 hover:scale-105">
              Book Free Demo Class
            </a>
            <a href="/contact" className="btn bg-primary-700 hover:bg-primary-900 text-white text-lg px-8 py-4 rounded-full shadow-lg transform transition duration-300 hover:scale-105">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
