import './blog.css';
// Import images here (e.g., using require or import)
// Example: import image1 from './images/image1.jpg';
// Replace with actual image paths
import image1 from '/blog1.jpg';
import image2 from '/blog2.jpg';
import image3 from '/blog3.jpg';
import image4 from '/blog4.jpg';

const Blog = () => {
  return (
    <div className="blog-container">
      <h2>Our Latest <span>Blog Post</span></h2>
      <p>
        Discover the latest trends and insights in our blog. Explore our curated content below, <br/>designed to inform and inspire.
      </p>
      <div className="parent">
        <div className="div1">
          <img src={image1} alt="Blog image 1" />
        </div>
        <div className="div2">
          <img src={image2} alt="Blog image 2" />
        </div>
        <div className="div3">
          <img src={image3} alt="Blog image 3" />
        </div>
        <div className="div4">
          <img src={image4} alt="Blog image 4" />
        </div>
      </div>
    </div>
  );
};

export default Blog;