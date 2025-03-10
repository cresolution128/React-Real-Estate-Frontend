import React from 'react';
import MainLayout from 'layouts/MainLayout';
import FeatureSection from 'components/_pages/Home/FeatureSection';
import HeroSection from 'components/_pages/Home/HeroSection';
import { AboutSection } from 'components/_pages/Home/AboutSection';
import { FactSection } from 'components/_pages/Home/FactSection';
import ServiceSection from 'components/_pages/Home/ServiceSection';
import VideoSection from 'components/_pages/Home/VideoSection';
import TeamSection from 'components/_pages/Home/TeamSection';
import FAQsSection from 'components/_pages/Home/FAQsSection';
import TestimonialSection from 'components/_pages/Home/TestimonialSection';
import BlogSection from 'components/_pages/Blog/BlogSection';
import firstImage from 'assets/img/team-1.jpg';
import secondImage from 'assets/img/team-2.jpg';
import thirdImage from 'assets/img/team-3.jpg';
import forthImage from 'assets/img/team-4.jpg';

const Home: React.FC = () => {
  const teamList = [
    {
      image: firstImage,
      teamName: 'Adam Phillips',
      teamPosition: 'CEO & Founder',
      order: 'first',
    },
    {
      image: secondImage,
      teamName: 'Dylan Adams',
      teamPosition: 'Civil Engineer',
      order: 'second',
    },
    {
      image: thirdImage,
      teamName: 'Jhon Doe',
      teamPosition: 'Interior Designer',
      order: 'third',
    },
    {
      image: forthImage,
      teamName: 'Josh Dunn',
      teamPosition: 'Painter',
      order: 'forth',
    },
  ];

  return (
    <MainLayout>
      <HeroSection />
      <FeatureSection />
      <AboutSection />
      <FactSection />
      <ServiceSection />
      <VideoSection />
      <TeamSection teamList={teamList} />
      <FAQsSection />
      <TestimonialSection />
      <BlogSection />
    </MainLayout>
  );
};

export default Home;
