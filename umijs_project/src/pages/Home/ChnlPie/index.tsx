import { getChnlDep } from '@/services/home';
import { Pie } from '@ant-design/charts';
import { useRequest } from '@umijs/max';
import { Card, Table } from 'antd';
import { useState } from 'react';

const columns = [
  {
    title: '渠道名称',
    dataIndex: 'chnl_type',
    key: 'chnl_type',
  },
  {
    title: '渠道发展量',
    dataIndex: 'dep_count',
    key: 'dep_count',
  },
];

const ChnlPie = () => {
  const [data, setData] = useState([]);
  const { loading } = useRequest(getChnlDep, {
    onSuccess: (res) => {
      res.forEach((item: any) => {
        item.dep_count = parseInt(item.dep_count);
      });
      setData(res);
    },
  });
  const config = {
    appendPadding: 10,
    data: data?.slice(0, 5),
    angleField: 'dep_count',
    colorField: 'chnl_type',
    radius: 0.8,
    label: {
      type: 'spider',
      // offset: '-30%',
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

export default ChnlPie;
