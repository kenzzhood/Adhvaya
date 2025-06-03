import React from 'react';
import HeroSection from '../components/HeroSection';
import { BookOpen, Calculator, FlaskRound as Flask, Microscope, LineChart, Atom, PenTool, Clock, Users, Check } from 'lucide-react';

const CoursesPage: React.FC = () => {
  const subjects = [
    {
      id: 1,
      title: 'Mathematics',
      icon: Calculator,
      description: 'Our mathematics curriculum is designed to build strong foundations and develop problem-solving skills.',
      topics: [
        'Algebra & Functions',
        'Geometry & Trigonometry',
        'Calculus (for higher grades)',
        'Statistics & Probxability',
        'Number Theory'
      ],
      grades: '6-10',
      boards: ['State Board', 'CBSE', 'ICSE'],
      image: 'https://images.pexels.com/photos/6238048/pexels-photo-6238048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      title: 'Physics',
      icon: Atom,
      description: 'Our physics program focuses on conceptual understanding through theory and practical demonstrations.',
      topics: [
        'Mechanics & Motion',
        'Electricity & Magnetism',
        'Optics & Waves',
        'Thermodynamics',
        'Modern Physics'
      ],
      grades: '8-10',
      boards: ['State Board', 'CBSE', 'ICSE'],
      image: 'https://images.pexels.com/photos/6266915/pexels-photo-6266915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      title: 'Chemistry',
      icon: Flask,
      description: 'Our chemistry courses make abstract concepts accessible through visual aids and experiments.',
      topics: [
        'Periodic Table & Elements',
        'Chemical Bonding',
        'Organic Chemistry',
        'Acids, Bases & Salts',
        'Electrochemistry'
      ],
      grades: '8-10',
      boards: ['State Board', 'CBSE', 'ICSE'],
      image: 'https://images.pexels.com/photos/8851651/pexels-photo-8851651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 4,
      title: 'Biology',
      icon: Microscope,
      description: 'Our biology program covers both theoretical knowledge and practical understanding of living systems.',
      topics: [
        'Cell Biology & Genetics',
        'Human Physiology',
        'Plant Biology',
        'Ecology & Environment',
        'Evolution & Adaptation'
      ],
      grades: '8-10',
      boards: ['State Board', 'CBSE', 'ICSE'],
      image: 'https://images.pexels.com/photos/3825368/pexels-photo-3825368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const programs = [
    {
      id: 1,
      title: 'Regular Batch Program',
      description: 'Year-round coaching with systematic coverage of the curriculum.',
      features: [
        '3 sessions per week',
        'Comprehensive study materials',
        'Regular assessments',
        'Doubt clearing sessions',
        'Parent-teacher meetings'
      ]
    },
    {
      id: 2,
      title: 'Exam Preparation',
      description: 'Intensive coaching for board exams and competitive tests.',
      features: [
        'Focus on exam-oriented preparation',
        'Previous years\' question practice',
        'Mock tests and evaluations',
        'Performance analysis',
        'Stress management techniques'
      ]
    },
    {
      id: 3,
      title: 'Summer Intensive',
      description: 'Accelerated learning during summer breaks to build a strong foundation.',
      features: [
        'Daily sessions',
        'Hands-on activities',
        'Foundational concept building',
        'Preview of upcoming academic year',
        'Project-based learning'
      ]
    }
  ];

  return (
    <div>
      <HeroSection
        title="Our Courses"
        subtitle="Comprehensive programs designed to build strong foundations in Mathematics and Science"
        imageUrl="https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        showCta={false}
      />

      {/* Subjects Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Subjects We Offer</h2>
            <p className="section-subtitle mx-auto">
              Comprehensive coverage of Mathematics and Science subjects with personalized attention
            </p>
          </div>

          {subjects.map((subject, index) => (
            <div 
              key={subject.id} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index !== subjects.length - 1 ? 'mb-20' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <subject.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{subject.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{subject.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Topics</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {subject.topics.map((topic, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Grades</h4>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-primary-600 mr-2" />
                      <span>{subject.grades}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Boards</h4>
                    <ul className="space-y-1">
                      {subject.boards.map((board, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{board}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <a href="/#book-demo" className="btn btn-primary">
                  Book Demo Class
                </a>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img
                  src={subject.image}
                  alt={subject.title}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Program Types */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Programs</h2>
            <p className="section-subtitle mx-auto">
              Choose the program that best suits your learning goals and schedule
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.id} className="card h-full flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                
                <div className="mb-6 flex-grow">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Features</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a href="/contact" className="btn btn-primary">
                  Inquire Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Teaching Methodology</h2>
            <p className="section-subtitle mx-auto">
              How we ensure effective learning and academic success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/5428012/pexels-photo-5428012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Teaching methodology"
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Conceptual Understanding</h3>
                  <p className="text-gray-600">
                    We focus on building a strong conceptual foundation rather than rote memorization,
                    enabling students to apply their knowledge to solve complex problems.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Attention</h3>
                  <p className="text-gray-600">
                    With small batch sizes of 8-10 students, our teachers can identify individual
                    learning needs and provide targeted support.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Learning</h3>
                  <p className="text-gray-600">
                    We incorporate discussions, demonstrations, and hands-on activities to make
                    learning engaging and effective.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Regular Assessment</h3>
                  <p className="text-gray-600">
                    We conduct periodic tests and provide detailed feedback to track progress
                    and address areas that need improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle mx-auto">
              Answers to common questions about our courses and teaching approach
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-2">What are the batch sizes?</h3>
                <p className="text-gray-600">
                  We maintain small batch sizes of 8-10 students to ensure personalized attention and effective learning.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-2">How do you assess student progress?</h3>
                <p className="text-gray-600">
                  We conduct regular assessments, including weekly quizzes, monthly tests, and comprehensive examinations. 
                  Detailed performance reports are shared with parents to track progress.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Do you provide study materials?</h3>
                <p className="text-gray-600">
                  Yes, we provide comprehensive study materials, including notes, practice problems, and additional resources 
                  tailored to each subject and board curriculum.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-2">How can I enroll my child?</h3>
                <p className="text-gray-600">
                  You can start by booking a free demo class through our website or by contacting us directly. 
                  After the demo, our counselors will guide you through the enrollment process.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Are online classes available?</h3>
                <p className="text-gray-600">
                  Yes, we offer both offline and online classes. Our online classes use interactive platforms 
                  to ensure an engaging learning experience similar to our physical classroom environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Academic Performance?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join Advaya Coaching Centre and experience our personalized approach to Mathematics and Science education.
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

export default CoursesPage;