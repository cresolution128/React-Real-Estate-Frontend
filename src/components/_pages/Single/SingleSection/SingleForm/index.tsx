import Input from 'components/_ui/Input';
import Button from 'components/_ui/Button';
import Textarea from 'components/_ui/Textarea';
import React from 'react';
import styles from './styles.module.scss';

const CommentForm: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.text}>Leave a comment</h2>
      <form action=''>
        <div className={styles.formWrapper}>
          <div className={styles.formGroup}>
            <div className={styles.label}>
              <label htmlFor=''>Name *</label>
            </div>
            <Input className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <div className={styles.label}>
              <label htmlFor=''>Email *</label>
            </div>
            <Input className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <div className={styles.label}>
              <label htmlFor=''>Website *</label>
            </div>
            <Input className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <div className={styles.label}>
              <label htmlFor=''>Message *</label>
            </div>
            <Textarea className={styles.textarea} />
          </div>
          <Button isBig className={styles.button}>
            Post Comment
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
