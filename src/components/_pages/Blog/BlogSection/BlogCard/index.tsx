import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  image: string;
  title: string;
  description: string;
  order: string;
};

const BlogCard: React.FC<Props> = ({ image, title, description, order }) => {
  return (
    <div className={classNames(styles.wrapper, styles[order])}>
      <div className={styles.blogImage}>
        <img src={image} alt='Blog Image' className={styles.image} />
      </div>
      <div className={styles.blogText}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.button}>
          <button type='button'>+</button>
        </div>
      </div>
      <div className={styles.blogMeta}>
        <p className={styles.blogPara}>By</p>
        <Link to='' className={styles.blogLink}>
          Admin
        </Link>
        <p className={styles.blogPara}>In</p>
        <Link to='' className={styles.blogLink2}>
          Construction
        </Link>
      </div>
      <div className={styles.blogDescription}>{description}</div>
    </div>
  );
};

export default BlogCard;
