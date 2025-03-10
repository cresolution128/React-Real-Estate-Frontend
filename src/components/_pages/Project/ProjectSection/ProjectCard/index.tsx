import React from 'react';
import styles from './styles.module.scss';

type Props = {
  image: string;
  title?: string;
  description?: string;
};

const ProjectCard: React.FC<Props> = ({ image, title, description }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.projectImage}>
        <img src={image} alt='Project Image' className={styles.image} />
        <div className={styles.description}>
          {!!description && <p>{description}</p>}
        </div>
      </div>
      <div className={styles.projectText}>
        {!!title && <h2 className={styles.title}>{title}</h2>}
        <div className={styles.button}>
          <button type='button'>+</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
