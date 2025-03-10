import React from 'react';
import styles from './styles.module.scss';
import image from 'assets/img/user.jpg';
import { Link } from 'react-router-dom';

const CommentCard: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img src={image} alt='' />
      </div>
      <div className={styles.panelWrapper}>
        <div className={styles.textLink}>
          <Link to=''>Josh Dunn</Link>
        </div>
        <p className={styles.textTime}>01 Jan 2045 at 12:00pm</p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet elit. Integer lorem augue purus mollis
          sapien, non eros leo in nunc. Donec a nulla vel turpis tempor ac vel
          justo. In hac platea dictumst.
        </p>
        <Link to='' className={styles.button}>
          Reply
        </Link>
      </div>
    </div>
  );
};

export default CommentCard;
