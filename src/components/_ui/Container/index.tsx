import React, { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './style.module.scss';

type ContainerProps = {
  className?: string;
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>{children}</div>
  );
};

export default Container;
