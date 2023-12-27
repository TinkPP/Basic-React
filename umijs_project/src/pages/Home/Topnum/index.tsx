import { getDep, getTop } from '@/services/home';
import { useRequest } from '@umijs/max';
import { Card, Col, Row, Statistic } from 'antd';

const Topnum = () => {
  const { data: dep } = useRequest(getDep, {});
  const { data: top } = useRequest(getTop, {});

  console.log(123, top?.data_static[0].count);

  return (
    <Row gutter={[10, 10]}>
      <Col span={4}>
        <Card hoverable>
          <Statistic
            title="基础业务发展量"
            value={dep?.[0].total}
            precision={0}
            valueStyle={{ color: '#3f8600' }}
          />
        </Card>
      </Col>
      <Col span={4}>
        <Card hoverable>
          <Statistic
            title="移网业务发展量"
            value={dep?.[0].move}
            precision={0}
            valueStyle={{ color: '#3f8600' }}
          />
        </Card>
      </Col>
      <Col span={4}>
        <Card hoverable>
          <Statistic
            title="固网业务发展量"
            value={dep?.[0].static}
            precision={0}
            valueStyle={{ color: '#3f8600' }}
          />
        </Card>
      </Col>

      <Col span={6}>
        <Card hoverable>
          <Statistic
            title="移网TOP产品"
            value={top?.data_move[0].value1}
            precision={0}
            valueStyle={{ color: '#cf1322' }}
            prefix={top?.data_move[0].name1}
          />
        </Card>
      </Col>

      <Col span={6}>
        <Card hoverable>
          <Statistic
            title="固网TOP产品"
            value={top?.data_static[0].count}
            precision={0}
            valueStyle={{ color: '#cf1322' }}
            prefix={top?.data_static[0].product_name}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default Topnum;
