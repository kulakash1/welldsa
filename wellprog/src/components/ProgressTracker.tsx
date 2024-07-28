import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetCoursesQuery } from '../services/courseApi';
import { useGetProgressQuery, useUpdateProgressMutation } from '../services/progressApi';

const ProgressTracker: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  // const { data: course, isLoading: isCourseLoading } = useGetCoursesQuery(courseId);
  // const { data: progress, isLoading: isProgressLoading } = useGetProgressQuery(courseId);
  const [updateProgress] = useUpdateProgressMutation();

  const handleUpdateProgress = (status: string) => {
    // updateProgress({ courseId, status });
  };

  // if (isCourseLoading || isProgressLoading) return <div>Loading...</div>;

  return (
    <div className="p-4">
      {/* <h1 className="text-2xl font-bold">{course.title}</h1> */}
      {/* <p>{course.description}</p> */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Progress</h2>
        {/* <p>Status: {progress.status}</p> */}
        <div className="mt-2">
          <button
            onClick={() => handleUpdateProgress('in progress')}
            className="bg-yellow-500 text-white p-2 rounded mr-2"
          >
            In Progress
          </button>
          <button
            onClick={() => handleUpdateProgress('completed')}
            className="bg-green-500 text-white p-2 rounded"
          >
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
