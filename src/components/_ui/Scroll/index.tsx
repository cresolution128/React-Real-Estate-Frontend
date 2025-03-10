import React from 'react';
import styles from './styles.module.scss';
import ScrollToTop from 'react-scroll-to-top';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Scroll: React.FC = () => {
  return (
    <div>
      <ScrollToTop
        smooth
        component={
          <div className={styles.scroll}>
            <FontAwesomeIcon className={styles.icon} icon={faAngleUp} />
          </div>
        }
      />
    </div>
  );
};

export default Scroll;
