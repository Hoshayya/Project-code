import React, { useState, useEffect } from 'react';

function Progress() {
  // State for storing user's enrolled courses and progress
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  // Effect for fetching user's enrolled courses and progress from backend or API
  useEffect(() => {
    // Fetch user's enrolled courses and progress data from backend or API
    // Update enrolledCourses state with fetched data
    // Example:
    const fetchedEnrolledCourses = [
      {
        id: 1,
        title: 'Course 1',
        progress: {
          completedLessons: 5,
          totalLessons: 10,
          upcomingLessons: ['Lesson 6', 'Lesson 7'],
          completedQuizzes: 2,
          totalQuizzes: 3,
          completedAssignments: 3,
          totalAssignments: 5,
          overallProgress: '50%',
          grade: 'A',
        },
      },
      // Add more enrolled courses and progress data
    ];
    setEnrolledCourses(fetchedEnrolledCourses);
  }, []);

  return (
    <div>
      <h1>Progress Overview</h1>
      {/* Display progress for each enrolled course */}
      {enrolledCourses.map(course => (
        <div key={course.id}>
          <h2>{course.title}</h2>
          <p>Completed Lessons: {course.progress.completedLessons}/{course.progress.totalLessons}</p>
          <p>Upcoming Lessons: {course.progress.upcomingLessons.join(', ')}</p>
          <p>Completed Quizzes: {course.progress.completedQuizzes}/{course.progress.totalQuizzes}</p>
          <p>Completed Assignments: {course.progress.completedAssignments}/{course.progress.totalAssignments}</p>
          <p>Overall Progress: {course.progress.overallProgress}</p>
          <p>Grade: {course.progress.grade}</p>
        </div>
      ))}
    </div>
  );
}

export default Progress;
