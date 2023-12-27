import type { RequestConfig } from 'umi';
// 运行时配置
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate

export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

//121.40.42.248
export const request: RequestConfig = {
  timeout: 5000,
  baseURL: 'http://121.40.42.248:3000',
  errorConfig: {
    errorHandler() {},
    errorThrower() {},
  },
  requestInterceptors: [],
  responseInterceptors: [],
  // proxy: {
  //   protocol: 'http',
  //   host: '127.0.0.1',
  //   port: 3000,
  // },
};

export const layout = () => {
  return {
    layout: 'top',
    logo: 'https://gips0.baidu.com/it/u=453484904,415506416&fm=3012&app=3012&autime=1695217117&size=b360,360',
    ErrorBoundary: false,
    contentStyle: {
      padding: 10,
      height: '100%',
      backgroundColor: '#f5f5f5',
    },
    avatarProps: {
      src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
      title: '树',
    },
  };
};
