import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

type Props = {
  image: string;
};

const PostCard: React.FC<Props> = ({ image }) => {
  return (
    <div className={styles.postCard}>
      <div className={styles.postImage}>
        <img src={image} alt='' />
      </div>
      <div className={styles.postText}>
        <div className={styles.postTitle}>
          <Link to=''>Lorem ipsum dolor sit amet consec adiis elit</Link>
        </div>
        <div className={styles.linkText}>
          <p className={styles.linkLogo}>By</p>
          <Link to='' className={styles.linkLabel}>
            Admin
          </Link>
          <p className={styles.linkLogo}>In</p>
          <Link to='' className={styles.linkLabel}>
            Design
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
