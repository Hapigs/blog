// timeline
import React from 'react';


import Titlebg from '../../components/titleBg'

import styles from './index.less';

const datas = {
  nums: 29,
  data: [
    {
      year: '2019',
      archive: [
        {
          createTime: '11-24',
          title: 'React Hooks',
        },
        {
          createTime: '04-04',
          title: 'JavaScript学习笔记',
        },
        {
          createTime: '03-17',
          title: 'Redux',
        },
        {
          createTime: '03-12',
          title: 'React Hooks',
        },
      ],
    },
    {
      year: '2018',
      archive: [
        {
          createTime: '12-21',
          title: 'React Hooks',
        },
        {
          createTime: '11-16',
          title: 'JavaScript学习笔记',
        },
        {
          createTime: '10-22',
          title: 'Redux',
        },
        {
          createTime: '01-03',
          title: 'React Hooks',
        },
      ],
    },
  ],
};

const Archive = () => (
  <>
    
    
    <Titlebg url='http://blog-images.fiveseven.top/josh-hild-doGGZWPdmQA-unsplash.jpg' />
    <div className={styles.container}>
      {datas.data.map(item => {
        return (
          <div className={styles.year}>
            <span>{item.year}</span>
            {item.archive.map(item => {
              return (
                <div className={styles.archiveItems}>
                  <span className={styles.createTime}>{item.createTime}</span>
                   <span className={styles.title}>
                   {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  </>
);

export default Archive;
