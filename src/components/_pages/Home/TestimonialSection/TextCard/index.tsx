import React from 'react';
import styles from './styles.module.scss';

const TextCard: React.FC = () => {
  return (
    <div className={styles.textWrapper}>
      <h3 className={styles.heading}>Customer Name</h3>
      <h4 className={styles.title}>profession</h4>
      <div className={styles.textSet}>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam
          metus tortor, auctor id gravida condimentum, viverra quis sem.
          Curabitur non nisl nec nisi scelerisque maximus.
        </p>
      </div>
    </div>
  );
};

export default TextCard;
