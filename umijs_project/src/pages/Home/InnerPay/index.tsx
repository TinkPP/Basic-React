import { getInnerPay } from '@/services/home';
import { DualAxes } from '@ant-design/charts';
import { useRequest } from '@umijs/max';
import { Card } from 'antd';
import { useState } from 'react';

const InnerPay = () => {
  const [data, setData] = useState([]);
  const {} = useRequest(getInnerPay, {
    onSuccess: (res) => {
      res.forEach((item: any) => {
        item.proportion = item.proportion * 100;
        item.amount = parseInt(item.amount);
      });
      console.log(res);
      setData(res);
    },
  });

  const config = {
    data: [data, data],
    xField: 'time',
    yField: ['amount', 'proportion'],
    yAxis: {
      amount: {
        min: 50,
        label: {
          formatter: (val: any) => `${val}元`,
        },
      },
      proportion: {
        min: 50,
        label: {
          formatter: (val: any) => `${val}%`,
        },
      },
    },
    geometryOptions: [
      {
        geometry: 'column',
        color: '#5B8FF9',
        columnWidthRatio: 0.4,
        label: {
          position: 'middle',
        },
      },
      {
        geometry: 'line',
        smooth: true,
        color: '#5AD8A6',
      },
    ],
    // 更改柱线交互，默认为 [{type: 'active-region'}]
    interactions: [
      {
        type: 'element-highlight',
      },
      {
        type: 'active-region',
      },
    ],
    annotations: {
      value: [
        {
          type: 'text',
          position: ['2019-06', 'max'],
          content: '柱线混合图',
        },
      ],
      columnBackground: {
        style: {
          fill: 'rgba(0,0,0,0.1)',
        },
      },
    },
  };

  return (
    <Card hoverable bodyStyle={{ padding: 10 }}>
      <div style={{ height: 200 }}>
        <DualAxes {...config} />
      </div>
    </Card>
  );
};

export default InnerPay;
