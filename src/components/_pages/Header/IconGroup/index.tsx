import React from 'react';

import styles from './styles.module.scss';

type Props = {
  iconName: string;
  title: string;
  description: string;
};

const IconGroup: React.FC<Props> = ({ iconName, title, description }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.iconWrapper}>
        <i className={`flaticon-${iconName}`}></i>
      </div>
      <div className={styles.textWrapper}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default IconGroup;
