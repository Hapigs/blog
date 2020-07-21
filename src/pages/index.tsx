import React from 'react';
import styles from './index.less';
import ArticlePreview from '../components/articlePreview';

const dataList = [
  {
    // source: 'https://pixelbuddha.net/sites/default/files/freebie/freebie-1583490303.jpg',
    source: 'https://pic4.zhimg.com/v2-2f89be8e1224f397b45cb0174d416e39_1200x500.jpg',
    title: 'React性能优化浅谈',
    content:
      '前端是一个范围很大、涉猎甚广的领域，用户的需求越来越多，随着前端的发展，对于性能优化的考虑和需求越来越多。性能优化的实现可以更好的提升用户体验和产品质量，对于留住你的用户有很大的帮助。',
    tags: ['React', 'Hooks'],
    time: '2019-10-12',
  },
  {
    source: 'https://pixelbuddha.net/sites/default/files/freebie/freebie-1584104349.jpg',
    title: '16个方面深入前端工程化开发技巧《下》',
    content:
      '首先是生命周期这一块内容，随着实践越多它的意义越大，理解也越深刻mixin 功能强大，对代码复用组织都有很高的要求，算是 Vue 后期发力的高级技巧服务端渲染可能是学习 Vue 最后一块阵地了，对于 SPA 框架的一个里程碑。',
    tags: ['Vue', '工程化'],
    time: '2019-10-12',
  },
  {
    source: 'https://pixelbuddha.net/sites/default/files/freebie/freebie-1583844379.jpg',
    title: 'CSS3常见新特性的奥秘',
    content:
      '最近觉得CSS3真的很神奇，完全掌握了用的时候真的非常有趣，但是就是用的时候很难用好，所以我就整理了一下关于CSS3的新特性，也方便自己查阅，要是文章中有什么不对的或者更好的方法，欢迎大家指出~',
    tags: ['CSS3', 'Animation'],
    time: '2019-10-12',
  },
  {
    source: 'https://pixelbuddha.net/sites/default/files/freebie/freebie-1582893040.jpg',
    title: '前端高级进阶：前端部署的发展历程',
    content:
      '随着 react/vue/angular，es6+，webpack，babel，typescript 以及 node 的发展，前端已经在逐渐替代过去 script 引 cdn 开发的方式了，掀起了工程化这一大浪潮。得益于工程化的发展与开源社区的良好生态，前端应用的可用性与效率得到了很大提高。',
    tags: ['前端部署', 'Webpack', 'babel'],
    time: '2019-10-12',
  },
];

export default function() {
  const { normal } = styles;
  return (
    <div className={normal}>
      {dataList.map(data => {
        const { source, title, content, time, tags } = data;
        return (
          <ArticlePreview source={source} title={title} content={content} time={time} tags={tags} />
        );
      })}
    </div>
  );
}
