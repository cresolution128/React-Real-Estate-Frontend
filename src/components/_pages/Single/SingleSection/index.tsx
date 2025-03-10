import React from 'react';
import Container from 'components/_ui/Container';
import styles from './styles.module.scss';

import SingleContent from './SingleContent';
import SingleTags from './SingleTags';
import SingleBio from './SingleBio';
import SinglePost from './SinglePost';
import SingleComment from './SingleComment';
import SingleForm from './SingleForm';
import SidebarTab from './SidebarTab';

const SingleSection: React.FC = () => {
  return (
    <section>
      <div></div>
      <Container className={styles.wrapper}>
        <div className={styles.leftWrapper}>
          <SingleContent />
          <SingleTags />
          <SingleBio />
          <SinglePost />
          <SingleComment />
          <SingleForm />
        </div>
        <div className={styles.rightWrapper}>
          <SidebarTab />
        </div>
      </Container>
    </section>
  );
};

export default SingleSection;
