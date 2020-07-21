import React from 'react';
import { Icon } from 'antd';
import styles from './index.less';

interface Props {
    source: string,
    title: string,
    content: string,
    time: string,
    tags: string[]
}

const ArticlePreview = (props: Props) =>  {
    const { source, title, content, time, tags} = props;
    return (
        <article className={styles.preview}>
        <img src={source} />
        <div className={styles.PreviewContent}>
        <div className={styles.previewLink}>{title}</div>
        <div className={styles.previewText}>{content}</div>
        <div className={styles.timeTags}>
          <div className={styles.previewDate}><Icon type="clock-circle" /> {time}</div>
          <div className={styles.tags}>
            {tags.map(tag => (
              <span>
                <Icon type="tags" />
                {tag}
              </span>
            ))}
          </div>
        </div>
        </div>
      </article>
    )
}


export default ArticlePreview;
