import React from 'react';
import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';

import IconGroup from 'components/_pages/Header/IconGroup';
import Container from 'components/_ui/Container';
import Button from 'components/_ui/Button';

import styles from './styles.module.scss';

const iconGroupList = [
  {
    iconName: 'calendar',
    title: 'Opening Hour',
    description: 'Mon - Fri, 8:00 - 9: 00',
  },
  {
    iconName: 'call',
    title: 'Call Us',
    description: '+012 345 6789',
  },
  {
    iconName: 'send-mail',
    title: 'Email Us',
    description: 'info@example.com',
  },
];

const navItemList = [
  {
    title: 'Home',
    target: '/',
    subMenu: [],
  },
  {
    title: 'About',
    target: '/about',
    subMenu: [],
  },
  {
    title: 'Service',
    target: '/service',
    subMenu: [],
  },
  {
    title: 'Team',
    target: '/team',
    subMenu: [],
  },
  {
    title: 'Project',
    target: '/project',
    subMenu: [],
  },
  {
    title: 'Pages',
    target: '/pages',
    subMenu: [
      {
        title: 'Blog Page',
        target: '/pages/blog',
      },
      {
        title: 'Single Page',
        target: '/pages/single',
      },
    ],
  },
  {
    title: 'Contact',
    target: '/contact',
    subMenu: [],
  },
];

const Header: React.FC = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Container className={styles.logoWrapper}>
          <div>
            <Link to='/'>
              <h1 className={styles.logoText}>Builderz</h1>
            </Link>
          </div>
          <div className={styles.iconWrapper}>
            {iconGroupList.map((item, index) => (
              <IconGroup
                key={index}
                {...item}
                // iconName={item.iconName}
                // title={item.title}
                // description={item.description}
              />
            ))}
          </div>
        </Container>
      </div>
      <div className={styles.navWrapper}>
        <Container className={styles.navbar}>
          <div className={styles.navMenu}>
            {navItemList.map((item, index) => (
              <div key={index} className={styles.navItemWrapper}>
                <NavLink
                  to={item.target}
                  className={({ isActive }) =>
                    classNames(styles.navItem, { [styles.active]: isActive })
                  }
                  end={item.target === '/'}
                >
                  <div>
                    {item.title}
                    {item.subMenu.length > 0 && (
                      <span className={styles.downIcon}></span>
                    )}
                  </div>
                </NavLink>
                {item.subMenu.length > 0 && (
                  <div className={styles.subMenuWrapper}>
                    {item.subMenu.map((subMenu, index) => (
                      <div key={index} className={styles.button}>
                        <Link to={subMenu.target}>{subMenu.title}</Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <NavLink to='/test'>
            <Button isBig buttonStyle='transparent' className={styles.button}>
              Download Pro Version
            </Button>
          </NavLink>
        </Container>
      </div>
    </>
  );
};

export default Header;
