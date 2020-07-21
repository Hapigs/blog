import React from 'react';
import styles from './index.less'

import { Icon } from 'antd';

const ArchiveCard = () => (
    <div className={styles.archiveCard}>
          <div className={styles.left}>
          <div className={styles.time}>
              <Icon type="clock-circle" />
              <span style={{ marginLeft: '5px' }}>Released 2019-10-09 12:23:12</span>
            </div>
            <div className={styles.title}>
              最后一次搞懂Event Loop
            </div>
            <div className={styles.row}>
              <span>
              <Icon type="eye" />
                 <span style={{ marginLeft: '5px' }}>224 PV</span>
              </span>
              <span>
              <Icon type="message" />
                <span style={{ marginLeft: '5px' }}>7 Likes</span>
              </span>
              <span>
              <Icon type="tags" />
                <span style={{ marginLeft: '5px' }}>JavaScript</span>
              </span>
            </div>
            <div>
            Event Loop 是 JavaScript 异步编程的核心思想，也是前端进阶必须跨越的一关。同时，它又是面试的必考点，特别是在 Promise 出现之后，各种各样的面试题层出不穷，花样百出。这篇文章从现实生活中...
            </div>
          </div>
          <div className={styles.right}>
            <img src="http://blog-images.fiveseven.top/g.png" alt="" />
          </div>
        </div>
)

export default ArchiveCard;