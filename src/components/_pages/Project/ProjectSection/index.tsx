import React, { useState } from 'react';
import Container from 'components/_ui/Container';
import styles from './styles.module.scss';
import firstImage from 'assets/img/portfolio-1.jpg';
import secondImage from 'assets/img/portfolio-2.jpg';
import thirdImage from 'assets/img/portfolio-3.jpg';
import forthImage from 'assets/img/portfolio-4.jpg';
import fifthImage from 'assets/img/portfolio-5.jpg';
import sixthImage from 'assets/img/portfolio-6.jpg';
import ProjectCard from './ProjectCard';

const projectList = [
  {
    image: firstImage,
    title: 'Project Name',
    label: ['ALL', 'COMPLETE'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.',
  },
  {
    image: secondImage,
    title: 'Project Name',
    label: ['ALL', 'RUNNING'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.',
  },
  {
    image: thirdImage,
    title: 'Project Name',
    label: ['ALL', 'UPCOMING'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.',
  },
  {
    image: forthImage,
    title: 'Project Name',
    label: ['ALL', 'COMPLETE'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.',
  },
  {
    image: fifthImage,
    title: 'Project Name',
    label: ['ALL', 'RUNNING'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.',
  },
  {
    image: sixthImage,
    title: 'Project Name',
    label: ['ALL', 'UPCOMING'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.',
  },
];

console.log('const projectList: ', projectList);
const Project: React.FC = () => {
  const [imageType, setImageType] = useState('ALL');
  console.log('imageType: ', imageType);

  return (
    <section>
      <Container className={styles.wrapper}>
        <div className={styles.heading}>
          <p className={styles.logoText}>Our Project</p>
          <h2 className={styles.headingText}>Visit Our Project</h2>
        </div>
        <div className={styles.buttonSet}>
          <button
            className={styles.button}
            onClick={() => {
              setImageType('ALL');
            }}
          >
            ALL
          </button>
          <button
            className={styles.button}
            onClick={() => {
              setImageType('COMPLETE');
            }}
          >
            COMPLETE
          </button>
          <button
            className={styles.button}
            onClick={() => {
              setImageType('RUNNING');
            }}
          >
            RUNNING
          </button>
          <button
            className={styles.button}
            onClick={() => {
              setImageType('UPCOMING');
            }}
          >
            UPCOMING
          </button>
        </div>
        <div className={styles.project}>
          {projectList
            .filter((item) => item.label.includes(imageType))
            .map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
        </div>
        <div className={styles.footerWrapper}>
          <button className={styles.buttonFooter}>LOAD MORE</button>
        </div>
      </Container>
    </section>
  );
};

export default Project;
