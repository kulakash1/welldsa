import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ id, title, description }) => {
  const navigate = useNavigate();

  const handleViewCourse = () => {
    navigate(`/courses/${id}`);
  };

  return (
    <div className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
      <div className="p-6">
        <div className="font-extrabold text-3xl mb-4 text-gray-900">{title}</div>
        <p className="text-gray-800 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="px-6 pb-6">
        <button
          onClick={handleViewCourse}
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-lg w-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
        >
          View Course
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
