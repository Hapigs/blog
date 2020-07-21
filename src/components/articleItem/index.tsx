import React from 'react';
import styles from './index.less';

import { Icon } from 'antd';

interface Props {}

const ArticleItem = (props:Props) => (
    <div className={styles.ArticleItem}>
        <div className={styles.avatar}>
          <img className={styles.img} src="http://blog-images.fiveseven.top/image.jpg" alt="" />
        </div>
        <div className={styles.itemInfo}>
          <div className={styles.titleRow}>
            <span className={styles.title} >如何使用 Generator + Promise 实现异步编程</span>
            <span className={styles.time}><Icon type="clock-circle" /> 发布于 2019-09-10</span>
          </div>
          <div>
            说到异步编程，你想到的是async 和 await ，但那也只是 Generator 的语法糖而已。dva 中有一个
            Effect 的概念，它就是使用 Generator 来解决异步请求的问题，我们也来聊一聊 Generator +
            Promise 如何异步编程
          </div>
        </div>
          <div className={styles.splitLine}>

          </div>
      </div>
)

export default ArticleItem;