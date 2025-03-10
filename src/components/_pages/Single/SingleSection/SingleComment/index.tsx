import React from 'react';
import CommentCard from './CommentCard';
import styles from './styles.module.scss';

const SingleComment: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.text}>3 Comments</h2>
      <div className={styles.cardPadding}>
        <CommentCard />
      </div>
      <div className={styles.cardPadding}>
        <CommentCard />
      </div>
      <div className={styles.cardThird}>
        <CommentCard />
      </div>
    </div>
  );
};

export default SingleComment;
