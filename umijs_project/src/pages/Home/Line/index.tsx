import { getEveryMonth } from '@/services/home';
import { Line } from '@ant-design/charts';
import { useRequest } from '@umijs/max';
import { Card, message } from 'antd';
import React, { useState } from 'react';

const Page: React.FC = () => {
  const [data, setData] = useState([]);
  const {} = useRequest(getEveryMonth, {
    onSuccess: (res) => {
      res.forEach((item: any) => {
        item.dep = parseInt(item.dep);
      });
      console.log(res);
      setData(res);
    },
    onError: (error) => {
      console.log(error);
      message.error(error.message);
    },
  });

  const config = {
    data,
    xField: 'in_date',
    yField: 'dep',
    seriesField: 'pname',
    yAxis: {
      dep: {
        min: 2000,
      },
    },
    legend: {
      position: 'top' as const,
    },
    smooth: false,
    // @TODO 后续会换一种动画方式
    animation: {
      appear: {
        animation: 'path-in',
        duration: 5000,
      },
    },
  };
  return (
    <Card hoverable bodyStyle={{ padding: 10 }}>
      <div style={{ height: 200 }}>
        <Line {...config} />
      </div>
    </Card>
  );
};
export default Page;
