// types/courseType.ts

// Define the structure of a Course
export interface ICourse {
    id: string;               // Unique identifier for the course
    title: string;            // Title of the course
    description: string;      // Description of the course
    instructor: string;       // Name of the instructor
    duration: string;         // Duration of the course (e.g., '3 weeks', '10 hours')
    price: number;            // Price of the course
    category: string;         // Category of the course (e.g., 'Programming', 'Design')
    createdAt: Date;          // Date when the course was created
    updatedAt: Date;          // Date when the course was last updated
}
