import React from 'react';
import Slider from 'react-slick';
import HeroCard from './HeroCard';
import firstImage from 'assets/img/carousel-1.jpg';
import secondImage from 'assets/img/carousel-2.jpg';
import thirdImage from 'assets/img/carousel-3.jpg';

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  className: 'hero-carousel',
};

const carouselList = [
  {
    image: firstImage,
    title: 'We Are Professional',
    description: 'For Your Dream Project',
    link: 'https://htmlcodex.com/construction-company-website-template',
    buttonLabel: 'Get a quote',
  },
  {
    image: secondImage,
    title: 'Professional Builder',
    description: 'We Build Your Home',
    link: 'https://htmlcodex.com/construction-company-website-template',
    buttonLabel: 'Get a quote',
  },
  {
    image: thirdImage,
    title: 'We Are Trusted',
    description: 'For Your Dream Home',
    link: 'https://htmlcodex.com/construction-company-website-template',
    buttonLabel: 'Get a quote',
  },
];

const HeroSection: React.FC = () => {
  return (
    <section>
      <Slider {...carouselSettings}>
        {carouselList.map((carousel, index) => (
          <HeroCard key={index} {...carousel} />
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;
