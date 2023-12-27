import { defineConfig } from '@umijs/max';

export default defineConfig({
  history: { type: 'hash' },
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {
    dataField: '',
  },
  layout: {
    title: '中国联通智慧数据看板',
  },
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      name: '登录',
      path: '/login',
      component: './Login',
      layout: false,
    },
    {
      name: '注册',
      path: '/register',
      component: './Register',
      layout: false,
    },
    // {
    //   name: '忘记密码',
    //   path: '/forget',
    //   component: './Forget',
    //   layout: false,
    // },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
  ],
  npmClient: 'npm',
});
