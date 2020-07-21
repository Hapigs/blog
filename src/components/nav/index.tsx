import React from 'react';
import Link from 'umi/link';
import styles from './index.less';

import { Icon as LegacyIcon } from 'antd';

const navs = [
  {
    icon: 'home',
    text: 'HOME',
    link: '/'
  },
  {
    icon: 'calendar',
    text: 'BLOG',
    link: '/blog'
  },
  {
    icon: 'profile',
    text: 'TIMELINE',
    link: '/archive'
  },
  {
    icon: 'user',
    text: 'ABOUT',
    link: '/me'
  },
];

const Nav = () => (
  <div className={styles.nav}>
    <div className={styles.logo}>
      <img className={styles.avatar} src='http://blog-images.fiveseven.top/avatar.JPG' />
      SeveNyUs' blog

    </div>
    <div>
      {navs.map((item, index) => (
        <Link key={index} className={styles.navItem} to={item.link}>
          <LegacyIcon type={item.icon} />
          <span style={{ paddingLeft: '5px' }}>{item.text}</span>

        </Link>
      ))}
    </div>
  </div>
);

export default Nav;
