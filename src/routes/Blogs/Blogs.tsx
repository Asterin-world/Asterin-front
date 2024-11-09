import { useState } from 'react';
import './Blogs.css';
interface Blog {
    title: string;
    date: string;
    content: string;
  }


const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([
    {
      title: 'The Science of Energy Drinks: What Really Powers You Up!',
      date: 'September 15, 2024',
      content: 'Energy drinks have become ubiquitous in today’s fast-paced world. Whether you’re a student cramming for exams.',
    },
    {
      title: 'Behind the Scenes: How Asterin Is Made and What Sets It Apart',
      date: 'September 15, 2024',
      content: 'A look into the production process, showcasing Asterin’s commitment to quality and unique formulation.',
    },
    {
      title: 'Healthy Habits to Boost Energy Naturally, With Asterin',
      date: 'September 15, 2024',
      content: 'Combine the promotion of Asterin with healthy lifestyle tips like proper sleep, exercise, and nutrition.',
    },
  ]);

  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  const handleBlogClick = (blog: Blog) => {
    setSelectedBlog(blog);
  };

  return (
    <div>
      <h1>Recent Blogs</h1>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.title} className="blog-item" onClick={() => handleBlogClick(blog)}>
            <h3>{blog.title}</h3>
            <p>{blog.date}</p>
          </div>
        ))}
      </div>

      {selectedBlog && (
        <div className="blog-details">
          <h2>{selectedBlog.title}</h2>
          <p>{selectedBlog.date}</p>
          <p>{selectedBlog.content}</p>
        </div>
      )}
    </div>
  );
};

export default Blogs;