import React from 'react';
import { BookOpen, Users, Clock } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  imageUrl: string;
  grades: string;
  batchSize: string;
  duration: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  imageUrl,
  grades,
  batchSize,
  duration,
}) => {
  return (
    <div className="card group h-full flex flex-col">
      <div className="relative h-48 mb-4 overflow-hidden rounded-md">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      
      <div className="border-t pt-4 mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="flex items-center">
            <Users className="h-4 w-4 text-primary-600 mr-2" />
            <span className="text-sm text-gray-600">{grades}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 text-primary-600 mr-2" />
            <span className="text-sm text-gray-600">{batchSize}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-primary-600 mr-2" />
            <span className="text-sm text-gray-600">{duration}</span>
          </div>
        </div>
      </div>
      
      <a
        href="#"
        className="mt-4 inline-flex items-center text-primary-600 font-medium"
      >
        Learn More
        <svg
          className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default CourseCard;