import { getMap } from '@/services/home';
import { AreaMap } from '@ant-design/charts';
import { useRequest } from '@umijs/max';
import { Card } from 'antd';
import { useState } from 'react';

const Map = () => {
  const [data, setData] = useState([]);
  const {} = useRequest(getMap, {
    onSuccess: (res) => {
      setData(res);
    },
  });

  const color = [
    'rgb(255,255,217)',
    'rgb(237,248,177)',
    'rgb(199,233,180)',
    'rgb(127,205,187)',
  ];
  const config = {
    map: {
      type: 'amap' as const,
      style: 'blank',
      center: [120.19382669582967, 28.258134],
      zoom: 3,
      pitch: 0,
      token: '733e58d03cbcd08219677e832687d898',
    },
    source: {
      data: data,
      parser: {
        type: 'geojson',
      },
    },
    autoFit: true,
    color: {
      field: 'density',
      value: color,
      scale: {
        type: 'quantile',
      },
    },
    style: {
      opacity: 1,
      stroke: 'rgb(93,112,146)',
      lineType: 'dash',
      lineDash: [2, 2],
      lineWidth: 0.6,
      lineOpacity: 1,
    },
    state: {
      active: true,
      select: true,
    },
    tooltip: {
      items: ['name', 'density'],
    },
    zoom: {
      position: 'bottomright',
    },
    legend: {
      position: 'bottomleft',
    },
  };
  return (
    <Card hoverable bodyStyle={{ padding: 10 }}>
      <div style={{ height: 711.6 }}>
        <AreaMap {...config} />
      </div>
    </Card>
  );
};

export default Map;
