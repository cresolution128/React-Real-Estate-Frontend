import React from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames';

type Props = {
  image: string;
  teamName: string;
  teamPosition: string;
  order: string;
};
const TeamCard: React.FC<Props> = ({
  image,
  teamName,
  teamPosition,
  order,
}) => {
  return (
    <div className={classNames(styles.wrapper, styles[order])}>
      <div className={styles.teamImage}>
        <img src={image} alt='teamImage-1' className={styles.image} />
        <div className={styles.layout}>
          <div
            className={classNames(styles.socialIcon, styles.twitter)}
            role='button'
          >
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div
            className={classNames(styles.socialIcon, styles.facebook)}
            role='button'
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
          <div
            className={classNames(styles.socialIcon, styles.linkedin)}
            role='button'
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
          <div
            className={classNames(styles.socialIcon, styles.instagram)}
            role='button'
          >
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </div>
      <div className={styles.teamText}>
        <h2 className={styles.teamName}>{teamName}</h2>
        <p className={styles.teamPosition}>{teamPosition}</p>
      </div>
    </div>
  );
};

export default TeamCard;
