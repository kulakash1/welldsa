import React from 'react';

interface ProgressTrackerProps {
  course: string;
  progress: number;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ course, progress }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">{course}</h3>
      <div className="relative pt-1">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-teal-600 bg-teal-200">
            {progress}%
          </span>
        </div>
        <div className="flex flex-col">
          <div className="relative pt-1">
            <div className="flex items-center justify-between">
              <div className="flex-1 bg-teal-200 rounded h-2">
                <div className="bg-teal-500 h-2 rounded" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
