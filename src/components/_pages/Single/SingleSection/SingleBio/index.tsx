import React from 'react';
import styles from './styles.module.scss';
import imageUser from 'assets/img/user.jpg';

const SingleBio: React.FC = () => {
  return (
    <div className={styles.memoWrapper}>
      <div className={styles.imageWrapper}>
        <img src={imageUser} alt='' className={styles.imageUser} />
      </div>
      <div className={styles.panel}>
        <div>
          <h2 className={styles.memoHeading}>Author Name</h2>
        </div>
        <div>
          <p className={styles.memoText}>
            Lorem ipsum dolor sit amet elit. Integer lorem augue purus mollis
            sapien, non eros leo in nunc. Donec a nulla vel turpis tempor ac vel
            justo. In hac platea dictumst.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBio;
