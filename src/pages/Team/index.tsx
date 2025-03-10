import React from 'react';
import MainLayout from 'layouts/MainLayout';
import PageHeader from 'components/_pages/PageHeader';
import TeamSection from 'components/_pages/Home/TeamSection';

import firstImage from 'assets/img/team-1.jpg';
import secondImage from 'assets/img/team-2.jpg';
import thirdImage from 'assets/img/team-3.jpg';
import forthImage from 'assets/img/team-4.jpg';

const Team: React.FC = () => {
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
      <PageHeader title='Our Team' />
      <TeamSection teamList={teamList} />
    </MainLayout>
  );
};

export default Team;
