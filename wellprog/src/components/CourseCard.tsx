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
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <button
          onClick={handleViewCourse}
          className="bg-blue-500 text-white p-2 rounded"
        >
          View Course
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
