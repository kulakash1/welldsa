import React from 'react';
import { useGetCoursesQuery } from '../services/courseApi';
import NoteTaking from '../components/NoteTaking';
import ProgressTracker from '../components/ProgressTracker';

// Define types
interface Course {
  _id: string;
  title: string;
  progress: number;
}

const Dashboard: React.FC = () => {
  const { data: courses = [], isLoading, isError } = useGetCoursesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading courses.</div>;

  return (
    <div>
      <h2 className="text-xl font-bold">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {courses.map((course: Course) => (
          <ProgressTracker
            key={course._id}
            // course={course.title}
            // progress={course.progress}
          />
        ))}
      </div>
      <NoteTaking />
    </div>
  );
};

export default Dashboard;
