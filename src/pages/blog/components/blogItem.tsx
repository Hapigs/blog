import React from 'react';
import styles from './blogItem.less';

import { Skeleton } from 'antd';

const blogs = [
  {
      id:0,
    title: '如何使用 Generator + Promise 实现异步编程',
    tags: 'Promise, ES6',
    imageUrl: 'http://blog-images.fiveseven.top/josh-hild-doGGZWPdmQA-unsplash.jpg',
    createTime: '2019-10-12',
    details:
      '说到异步编程，你想到的是async 和 await ，但那也只是 Generator 的语法糖而已。dva 中有一个 Effect 的概念，它就是使用 Generator 来解决异步请求的问题，我们也来聊一聊 Generator + Promise 如何异步编程，但那也只是 Generator 的语法糖而已。dva 中有一个 Effect 的概念，它就是使用 Generator 来解决异步请求的问题，我们也来聊一聊 Generator + Promise 如何异步编程',
  },
  {
      id: 1,
    title: '2018 一个人的旅行<自导自演>',
    tags: 'Promise, ES6',
    imageUrl: 'http://blog-images.fiveseven.top/josh-hild-doGGZWPdmQA-unsplash.jpg',
    createTime: '2019-10-12',
    details:
      '一望无际、亲近自然、忘乎所以、放空自我! 一个人的旅行, GoPro拍摄，后期采用FCPX。记录梦想, 自导自演。一个人去了很多地方, 认识和很多当地人，交了当地朋友，英语也长进了不少，累而快乐着, 寻找适合自己的步伐, 不忘初心。',
  },
];

const BlogItem = () => (
  <>
    {blogs ? (
      <>
        {blogs.map(item => {
          const {id, imageUrl, title, tags, createTime, details } = item;
          return (
            <div className={styles.container} key={id}>
              <img className={styles.img} src={imageUrl} alt="" />
              <div className={styles.title}>{title}</div>
              <div>
                <span className={styles.tags}>{tags}</span>
                <span className={styles.createTime}>{createTime}</span>
              </div>
              <div className={styles.details}>{details}</div>
            </div>
          );
        })}
      </>
    ) : (
      <Skeleton active />
    )}
  </>
);

export default BlogItem;
