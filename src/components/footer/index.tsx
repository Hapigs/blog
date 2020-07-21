import React from 'react';
import styles from './index.less'

const Footer = () => (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.copyright}>
            Copyright © 2019 yU. All rights reserved.
            </div>
            <div className={styles.link}>
                <span>About</span>
                <span>Privacy Policy</span>
                <span>Apps</span>
                <span>Contact</span>

            </div>
        </div>
    </div>
)

export default Footer;