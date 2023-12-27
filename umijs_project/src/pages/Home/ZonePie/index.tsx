import { getZoneDep } from '@/services/home';
import { Pie } from '@ant-design/charts';
import { useRequest } from '@umijs/max';
import { Card, Table } from 'antd';
import { useState } from 'react';

const columns = [
  {
    title: '网格名称',
    dataIndex: 'dev_zone_name',
    key: 'dev_zone_name',
  },
  {
    title: '网格发展量',
    dataIndex: 'dep_zone',
    key: 'dep_zone',
  },
];

const ZonePie = () => {
  const [data, setData] = useState([]);
  const { loading } = useRequest(getZoneDep, {
    onSuccess: (res) => {
      res.forEach((item: any) => {
        item.dep_zone = parseInt(item.dep_zone);
      });
      setData(res);
    },
  });
  const config = {
    appendPadding: 10,
    data: data?.slice(0, 5),
    angleField: 'dep_zone',
    colorField: 'dev_zone_name',
    radius: 0.8,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }: any) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };
  return (
    <Card hoverable bodyStyle={{ padding: 10 }}>
      <div style={{ height: 200 }}>
        <Pie {...config} />
      </div>
      <Table
        bordered
        size="middle"
        dataSource={data?.slice(0, 5)}
        columns={columns}
        loading={loading}
        pagination={false}
      />
    </Card>
  );
};

export default ZonePie;
