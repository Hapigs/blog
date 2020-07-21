// 文章顶部图片
import React from 'react';
import styles from './index.less'

interface Props {
    url: string   
}

const Titlebg = (props:Props) => (
    <div style={{ backgroundImage: `url(${props.url})` }} className={styles.Titlebg}  ></div>
)

export default Titlebg;