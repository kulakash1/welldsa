import React from 'react';

interface CourseCardProps {
  title: string;
  description: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CourseCard;
