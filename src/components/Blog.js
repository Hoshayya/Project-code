import React from 'react';

function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <p>Welcome to the Tutelage Buddy's Blogs!</p>
      <p>Here, you'll find articles and resources related to Tutelage Buddy.</p>
      {/* Add your blog content */}
      <div>
        <h2>Latest Articles</h2>
        <ul>
          <li>
            <a href="https://blog.tutelagebuddy.in/cloud-computing-for-beginners">Cloud Computing for Beginners..,</a> - Published on January 31, 2024
          </li>
          <li>
            <a href="https://blog.tutelagebuddy.in/life-before-cloud-computing">Life Before Cloud Computing..,</a> - Published on February 5, 2024
          </li>
          {/* Add more articles */}
        </ul>
      </div>
      {/* Add subscription form */}
      <div>
        <h2>Subscribe to Our Blog</h2>
        <form>
          <label>Email:</label>
          <input type="email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default Blog;
