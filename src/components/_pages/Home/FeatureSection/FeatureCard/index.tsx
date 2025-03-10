import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

type Props = {
  color?: string;
  icon: string;
  title: string;
  description: string;
};

const FeatureCard: React.FC<Props> = ({
  color = 'primary',
  icon,
  title,
  description,
}) => {
  return (
    <div className={classNames(styles.wrapper, styles[color])}>
      <div className={styles.iconWrapper}>
        <i className={`flaticon-${icon}`}></i>
      </div>
      <div className={styles.textWrapper}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
