import React from 'react';
import styles from './index.css';

import Footer from '../components/footer'
import Nav from '../components/nav'

import { BackTop } from 'antd'

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.normal}>
        <Nav />
        {
          props.children
        }
        <Footer />
        <BackTop />
    </div>
  );
};

export default BasicLayout;
