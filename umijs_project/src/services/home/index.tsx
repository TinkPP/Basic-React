import { request } from '@umijs/max';

export const gettest = () => {
  return request('/test/get', {
    method: 'get',
  });
};

export const getMap = () => {
  return request('/home/getMap', {
    method: 'get',
  });
};

export const getInnerPay = () => {
  return request('/home/getInnerPay', {
    method: 'get',
  });
};

export const getDep = () => {
  return request('/home/getDep', {
    method: 'get',
  });
};

export const getTop = () => {
  return request('/home/getTop', {
    method: 'get',
  });
};

export const getChnlDep = () => {
  return request('/home/getChnlDep', {
    method: 'get',
  });
};

export const getZoneDep = () => {
  return request('/home/getZoneDep', {
    method: 'get',
  });
};

export const getEveryMonth = () => {
  return request('/home/getEveryMonth', {
    method: 'get',
  });
};
