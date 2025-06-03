import React from 'react';

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  imageUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  content,
  author,
  role,
  imageUrl,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 relative">
      {/* Quote symbol */}
      <div className="absolute top-4 right-4 text-5xl text-primary-100 opacity-80 leading-none">"</div>
      
      <div className="relative z-10">
        <p className="text-gray-700 mb-6 italic">{content}</p>
        
        <div className="flex items-center">
          <img
            src={imageUrl}
            alt={author}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold text-gray-900">{author}</h4>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;