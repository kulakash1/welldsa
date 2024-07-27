import React from 'react';
import CourseCard from '../components/CourseCard';

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome to WellProg</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {/* Sample data */}
        <CourseCard title="Full Stack Web Development" description="Learn how to build modern web applications." />
        <CourseCard title="Data Analytics" description="Understand data and make informed decisions." />
        <CourseCard title="Machine Learning" description="Explore the world of machine learning." />
      </div>
    </div>
  );
};

export default Home;
