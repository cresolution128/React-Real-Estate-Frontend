import classNames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import firstImage from 'assets/img/post-1.jpg';
import secondImage from 'assets/img/post-2.jpg';
import thirdImage from 'assets/img/post-3.jpg';
import forthImage from 'assets/img/post-4.jpg';
import fifthImage from 'assets/img/post-5.jpg';
import PostCard from '../SinglePost/PostCard';

const imageList = [firstImage, secondImage, thirdImage, forthImage, fifthImage];

const tabList = ['Featured', 'Popular', 'Lated'];

const SidebarTab: React.FC = () => {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.wrapper}>
      <div className={styles.tabWrapper}>
        {tabList.map((tab, index) => (
          <Link
            key={index}
            onClick={() => {
              setActive(index);
            }}
            to=''
          >
            <div
              className={classNames(styles.Link, {
                [styles.active]: index === active,
              })}
            >
              {tab}
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.imageWrapper}>
        {imageList.map((image, index) => (
          <div key={index} className={styles.cardWrapper}>
            <PostCard image={image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarTab;
