import React from 'react';
import styles from './styles.module.scss';
import Button from 'components/_ui/Button';
const buttonList = [
  'National',
  'International',
  'Economics',
  'Politics',
  'Lifestyle',
  'Technology',
  'Trades',
];
const SingleTags: React.FC = () => {
  return (
    <div className={styles.buttonGroup}>
      {buttonList.map((label, index) => (
        <Button
          key={index}
          buttonStyle='white'
          type='submit'
          className={styles.button}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};

export default SingleTags;
