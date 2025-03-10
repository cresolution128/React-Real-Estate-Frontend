import Container from 'components/_ui/Container';
import React from 'react';
import styles from './styles.module.scss';
import TeamCard from './TeamCard';

type Props = {
  teamList: {
    image: string;
    teamName: string;
    teamPosition: string;
    order: string;
  }[];
};

const TeamSection: React.FC<Props> = ({ teamList }) => {
  return (
    <section>
      <Container className={styles.wrapper}>
        <div className={styles.textWrapper}>
          <p className={styles.logoText}>Our Team</p>
          <h2 className={styles.heading}>Meet Our Engineer</h2>
        </div>
        <div className={styles.team}>
          {teamList.map((team, index) => (
            <TeamCard key={index} {...team} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TeamSection;
