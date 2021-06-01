import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  routes: [
    {
      path: '/blog',
      component: '../layouts/index',
      routes: [
        { path: '/blog', component: '../pages/index' },
        { path: './archive', component: '../pages/archive' },
        { path: './me', component: '../pages/me' },
        { path: './blog', component: '../pages/blog' },
        {
          component: './404',
        },
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'yublog',
      dll: true,
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  base: '/blog/',
  publicPath: '/blog/',
}

export default config;
