import './blog.css';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, slideVariants } from '../../utils/motion';
// Import images here (e.g., using require or import)
// Example: import image1 from './images/image1.jpg';
// Replace with actual image paths
import image1 from '/blog1.jpg';
import image2 from '/blog2.jpg';
import image3 from '/blog3.jpg';
import image4 from '/blog4.jpg';

const Blog = () => {
  return (
    <motion.section
      id="blog"
      className="blog-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0.12)}
    >
      <motion.h2 variants={fadeIn(0.05)}>Our Latest <span>Blog Post</span></motion.h2>
      <motion.p variants={fadeIn(0.15)}>
        Discover the latest trends and insights in our blog. Explore our curated content below, <br/>designed to inform and inspire.
      </motion.p>
      <motion.div className="parent" variants={staggerContainer(0.1)}>
        <motion.div className="div1" variants={slideVariants(false, 70)}>
          <img src={image1} alt="Blog image 1" />
        </motion.div>
        <motion.div className="div2" variants={slideVariants(true, 70)}>
          <img src={image2} alt="Blog image 2" />
        </motion.div>
        <motion.div className="div3" variants={slideVariants(false, 70)}>
          <img src={image3} alt="Blog image 3" />
        </motion.div>
        <motion.div className="div4" variants={slideVariants(true, 70)}>
          <img src={image4} alt="Blog image 4" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Blog;