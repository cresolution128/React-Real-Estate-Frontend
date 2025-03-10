import React from 'react';
import styles from './styles.module.scss';

const VideoSection: React.FC = () => {
  return (
    <section>
      <div className={styles.wrapper}>
        <button className={styles.button}>
          <span className={styles.play}></span>
        </button>
      </div>
    </section>
  );
};

export default VideoSection;
