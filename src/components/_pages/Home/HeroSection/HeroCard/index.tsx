import Button from 'components/_ui/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

type Props = {
  image: string;
  title?: string;
  description?: string;
  link?: string;
  buttonLabel?: string;
};

const HeroCard: React.FC<Props> = ({
  image,
  title,
  description,
  link,
  buttonLabel,
}) => {
  return (
    <div>
      <div className={styles.wrapper}>
        <img src={image} alt='Carousel Image' className={styles.image} />
        <div className={styles.textWrapper}>
          {!!title && <p className={styles.title}>{title}</p>}
          {!!description && (
            <h1 className={styles.description}>{description}</h1>
          )}
          {!!link && (
            <Link to={link}>
              <Button type='button' isBig buttonStyle='transparent'>
                {buttonLabel?.toUpperCase()}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
