// me
import React from 'react';
import styles from './index.less'

const Me = () => {
    const { container,card } = styles;
    return (<div className={container}>
        <div className={card}>
            <img src="http://blog-images.fiveseven.top/3.jpg" />
            <img src="http://blog-images.fiveseven.top/3.jpg" />
            <img src="http://blog-images.fiveseven.top/3.jpg" />
            <img src="http://blog-images.fiveseven.top/3.jpg" />
        </div>
    </div>)
}

export default Me;