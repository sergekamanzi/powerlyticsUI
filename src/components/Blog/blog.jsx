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
    <section id="blog" className="blog-container" data-reveal="up">
      <h2 data-reveal="up">Our Latest <span>Blog Post</span></h2>
      <p data-reveal="up" style={{"--reveal-delay":"100ms"}}>
        Discover the latest trends and insights in our blog. Explore our curated content below, <br/>designed to inform and inspire.
      </p>
      <div className="parent">
        <div className="div1" data-reveal="left">
          <img src={image1} alt="Blog image 1" />
        </div>
        <div className="div2" data-reveal="right" style={{"--reveal-delay":"80ms"}}>
          <img src={image2} alt="Blog image 2" />
        </div>
        <div className="div3" data-reveal="left" style={{"--reveal-delay":"160ms"}}>
          <img src={image3} alt="Blog image 3" />
        </div>
        <div className="div4" data-reveal="right" style={{"--reveal-delay":"240ms"}}>
          <img src={image4} alt="Blog image 4" />
        </div>
      </div>
    </section>
  );
};

export default Blog;