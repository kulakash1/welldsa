import React, { useState } from 'react';
import { useGetCoursesQuery, useAddCourseMutation } from '../services/courseApi';
import { useGetUsersQuery } from '../services/userApi';

// Define types
interface Course {
  _id: string;
  title: string;
  description: string;
}

interface User {
  _id: string;
  username: string;
  email: string;
}

const AdminPanel: React.FC = () => {
  const { data: courses = [], isLoading: coursesLoading, isError: coursesError } = useGetCoursesQuery();
  const { data: users = [], isLoading: usersLoading, isError: usersError } = useGetUsersQuery();
  const [addCourse] = useAddCourseMutation();
  const [newCourse, setNewCourse] = useState({ title: '', description: '' });

  const handleAddCourse = async () => {
    try {
      await addCourse(newCourse).unwrap();
      setNewCourse({ title: '', description: '' });
    } catch (error) {
      console.error('Failed to add course', error);
    }
  };

  if (coursesLoading || usersLoading) return <div>Loading...</div>;
  if (coursesError || usersError) return <div>Error loading data.</div>;

  return (
    <div>
      <h2 className="text-xl font-bold">Admin Panel</h2>
      <div className="mt-4">
        <h3 className="text-lg font-bold">Manage Courses</h3>
        <input
          type="text"
          placeholder="Course Title"
          value={newCourse.title}
          onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
          className="border p-2 w-full"
        />
        <textarea
          placeholder="Course Description"
          value={newCourse.description}
          onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
          className="border p-2 w-full mt-2"
        />
        <button onClick={handleAddCourse} className="bg-blue-500 text-white p-2 mt-2">Add Course</button>

        <div className="mt-4">
          <h4 className="text-md font-bold">Existing Courses</h4>
          {courses.map((course: Course) => (
            <div key={course._id} className="bg-gray-100 p-4 rounded-lg shadow-md mt-2">
              <h5 className="text-lg font-bold">{course.title}</h5>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold">Manage Users</h3>
        {users.map((user: User) => (
          <div key={user._id} className="bg-gray-100 p-4 rounded-lg shadow-md mt-2">
            <p className="font-semibold">Username: {user.username}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
