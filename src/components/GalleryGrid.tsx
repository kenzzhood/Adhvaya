import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/8617816/pexels-photo-8617816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Math Class",
    category: "Classroom"
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Science Experiment",
    category: "Activities"
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Group Discussion",
    category: "Students"
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "One-on-One Mentoring",
    category: "Teaching"
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/5427671/pexels-photo-5427671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Science Lab",
    category: "Activities"
  },
  {
    id: 6,
    url: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Team Projects",
    category: "Students"
  },
  {
    id: 7,
    url: "https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Study Hall",
    category: "Classroom"
  },
  {
    id: 8,
    url: "https://images.pexels.com/photos/3759076/pexels-photo-3759076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Exam Preparation",
    category: "Teaching"
  },
];

const GalleryGrid: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', ...new Set(galleryImages.map(image => image.category))];
  
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === filter);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === category
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="text-white text-center p-4">
                <h3 className="text-lg font-semibold">{image.title}</h3>
                <p className="text-sm">{image.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 z-10"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full max-h-[80vh] object-contain"
            />
            <div className="bg-white p-4">
              <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
              <p className="text-gray-600">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;