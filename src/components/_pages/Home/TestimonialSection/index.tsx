import React, { useRef } from 'react';
import styles from './styles.module.scss';
import Slider from 'react-slick';
import firstImage from 'assets/img/testimonial-1.jpg';
import secondImage from 'assets/img/testimonial-2.jpg';
import thirdImage from 'assets/img/testimonial-3.jpg';
import forthImage from 'assets/img/testimonial-4.jpg';
import img from 'assets/img/quote.png';
import TextCard from './TextCard';
const imageList = [firstImage, secondImage, thirdImage, forthImage];

const TestimonialSection: React.FC = () => {
  const imageRef = useRef<any>();
  const textRef = useRef<any>();
  const imageSettings = {
    className: 'image-slick',
    centerMode: true,
    infinite: true,
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    // autoplay: true,
    focusOnSelect: true,
    arrows: false,
  };
  const textSettings = {
    className: 'text-slick',
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // autoplay: true,
  };
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.topicWrapper}>
          <div className={styles.firstWrapper}></div>
          <div className={styles.secondWrapper}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageBox}>
                <Slider
                  {...imageSettings}
                  ref={imageRef}
                  asNavFor={textRef.current}
                >
                  {imageList.map((image, index) => (
                    <div key={index}>
                      <img src={image} alt='' className={styles.image} />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className={styles.subWrapper}>
              <div className={styles.symbol}>
                <div>
                  <img src={img} alt='' />
                </div>
              </div>
              <div className={styles.textSlide}>
                <Slider
                  {...textSettings}
                  ref={textRef}
                  asNavFor={imageRef.current}
                >
                  <TextCard />
                  <TextCard />
                  <TextCard />
                  <TextCard />
                </Slider>
              </div>
            </div>
          </div>
          <div className={styles.thirdWrapper}></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
