import React from 'react';
import HeroSection from '../components/HeroSection';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const contactInfo = [
    {
      id: 1,
      title: 'Our Location',
      details: '123 Education Street, Knowledge City, 560001',
      icon: MapPin,
    },
    {
      id: 2,
      title: 'Call Us',
      details: '+91 98765 43210',
      link: 'tel:+919876543210',
      icon: Phone,
    },
    {
      id: 3,
      title: 'Email Us',
      details: 'info@advayacoaching.com',
      link: 'mailto:info@advayacoaching.com',
      icon: Mail,
    },
    {
      id: 4,
      title: 'Office Hours',
      details: 'Monday - Saturday: 9:00 AM - 7:00 PM',
      icon: Clock,
    },
  ];

  return (
    <div>
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with us for any inquiries or to schedule a demo class"
        imageUrl="https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        showCta={false}
      />

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="card text-center">
                  <div className="mx-auto bg-primary-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  {item.link ? (
                    <a href={item.link} className="text-gray-600 hover:text-primary-600 transition-colors">
                      {item.details}
                    </a>
                  ) : (
                    <p className="text-gray-600">{item.details}</p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">Get In Touch</h2>
              <p className="section-subtitle">
                We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>

            <div>
              <h2 className="section-title mb-6">Find Us</h2>
              <div className="h-96 bg-gray-200 rounded-lg mb-6">
                {/* Here you would typically embed a Google Map */}
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.6600799609!2d77.30127822706685!3d12.954294764827326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1654123456789!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Advaya Coaching Centre Location"
                  ></iframe>
                </div>
              </div>

              <div className="card">
                <div className="flex items-center mb-4">
                  <MessageCircle className="h-6 w-6 text-primary-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Chat with Us</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Have a quick question? Reach out to us on WhatsApp for immediate assistance.
                </p>
                <a
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle mx-auto">
              Find answers to common questions about contacting us
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-2">How quickly will you respond to my inquiry?</h3>
                <p className="text-gray-600">
                  We strive to respond to all inquiries within 24 hours on weekdays and 48 hours on weekends.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Can I visit your center without an appointment?</h3>
                <p className="text-gray-600">
                  Yes, you're welcome to visit our center during office hours. However, we recommend scheduling an appointment to ensure our counselors can give you their full attention.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-2">How do I schedule a demo class?</h3>
                <p className="text-gray-600">
                  You can schedule a demo class by filling out the contact form on this page, calling us directly, or using the 'Book Demo Class' button on our homepage.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Do you offer virtual consultations?</h3>
                <p className="text-gray-600">
                  Yes, we offer virtual consultations for parents and students who cannot visit our center in person. Please contact us to schedule a video call.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Learning Experience?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join Advaya Coaching Centre today and take the first step towards academic excellence.
          </p>
          <a href="/#book-demo" className="btn bg-white text-primary-600 hover:bg-gray-100">
            Book Free Demo Class
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;