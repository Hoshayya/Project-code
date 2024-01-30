import React, { useState, useEffect } from 'react';

function Courses() {
  // State for storing courses and filtering options
  const [courses, setCourses] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [levelFilter, setLevelFilter] = useState('All');
  const [priceFilter, setPriceFilter] = useState('All');

  // Effect for fetching courses from backend or API
  useEffect(() => {
    // Fetch courses data from backend or API
    // Update courses state with fetched data
    // Example:
    const fetchedCourses = [
      { id: 1, title: 'Course 1', category: 'Programming', level: 'Beginner', price: 'Free' },
      { id: 2, title: 'Course 2', category: 'Cloud', level: 'Intermediate', price: '$19.99' },
      // Add more courses dynamically
    ];
    setCourses(fetchedCourses);
  }, []);

  // Function to filter courses based on category, level, and price
  const filteredCourses = courses.filter(course => {
    if (categoryFilter !== 'All' && course.category !== categoryFilter) return false;
    if (levelFilter !== 'All' && course.level !== levelFilter) return false;
    if (priceFilter !== 'All' && course.price !== priceFilter) return false;
    return true;
  });

  return (
    <div>
      <h1>All Courses</h1>
      {/* Add filtering options */}
      <div>
        <label>Category:</label>
        <select value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Programming">Programming</option>
          <option value="Design">Design</option>
          {/* Add more categories */}
        </select>
        <label>Level:</label>
        <select value={levelFilter} onChange={e => setLevelFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          {/* Add more levels */}
        </select>
        <label>Price:</label>
        <select value={priceFilter} onChange={e => setPriceFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Free">Free</option>
          <option value="$19.99">$19.99</option>
          {/* Add more price options */}
        </select>
      </div>
      {/* Display filtered courses */}
      <div>
        {filteredCourses.map(course => (
          <div key={course.id}>
            <h2>{course.title}</h2>
            <p>Category: {course.category}</p>
            <p>Level: {course.level}</p>
            <p>Price: {course.price}</p>
            {/* Add course description, curriculum, and reviews */}
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Curriculum: Introduction, Lesson 1, Lesson 2, ...</p>
            <p>Reviews: Good course, informative content, ...</p>
          </div>
        ))}
      </div>
      {/* Add YouTube integration */}
      <div>
        <h2>YouTube Integration</h2>
        <p>Stream courses from instructors' YouTube channels for a seamless learning experience.</p>
        <p>Instructors can upload course videos directly to the platform.</p>
      </div>
    </div>
  );
}

export default Courses;
