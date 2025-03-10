import Container from 'components/_ui/Container';
import BlogCard from './BlogCard';
import React from 'react';
import styles from './styles.module.scss';
import firstImage from 'assets/img/blog-1.jpg';
import secondImage from 'assets/img/blog-2.jpg';
import thirdImage from 'assets/img/blog-3.jpg';

const blogList = [
  {
    image: firstImage,
    order: 'second',
    title: 'Lorem ipsum dolor sit',
    description:
      'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor',
  },
  {
    image: secondImage,
    order: 'first',
    title: 'Lorem ipsum dolor sit',
    description:
      'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor',
  },
  {
    image: thirdImage,
    order: 'second',
    title: 'Lorem ipsum dolor sit',
    description:
      'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor',
  },
  {
    image: firstImage,
    order: 'second',
    title: 'Lorem ipsum dolor sit',
    description:
      'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor',
  },
  {
    image: secondImage,
    order: 'first',
    title: 'Lorem ipsum dolor sit',
    description:
      'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor',
  },
  {
    image: thirdImage,
    order: 'second',
    title: 'Lorem ipsum dolor sit',
    description:
      'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor',
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <Container>
        <div className={styles.textWrapper}>
          <p className={styles.logoText}>Lasted Blog</p>
          <h2 className={styles.heading}>Lasted From Our Blog</h2>
        </div>
        <div className={styles.blogWrapper}>
          {blogList.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BlogSection;
