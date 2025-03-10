import React, { useRef } from 'react';
import styles from './styles.module.scss';
import firstImage from 'assets/img/post-1.jpg';
import secondImage from 'assets/img/post-2.jpg';
import thirdImage from 'assets/img/post-3.jpg';
import forthImage from 'assets/img/post-4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import PostCard from './PostCard';
import Slider from 'react-slick';

const imageList = [firstImage, secondImage, thirdImage, forthImage];

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  className: 'post-carousel',
  responsive: [
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const SinglePost: React.FC = () => {
  const ref = useRef<any>();

  return (
    <div className={styles.postWrapper}>
      <div className={styles.postHeading}>
        <h2 className={styles.postText}>Related Post</h2>
        <div>
          <button
            type='button'
            onClick={() => {
              ref.current.slickPrev();
            }}
            className={styles.postButton}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button
            type='button'
            onClick={() => {
              ref.current.slickNext();
            }}
            className={styles.postButton}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
      <div className={styles.cardWrapper}>
        <Slider {...settings} ref={ref}>
          {imageList.map((img, index) => (
            <PostCard key={index} image={img} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SinglePost;
