import { Col, Row } from 'antd';
import ChnlPie from './ChnlPie';
import InnerPay from './InnerPay';
import Line from './Line';
import Map from './Map';
import Topnum from './Topnum';
import ZonePie from './ZonePie';

const HomePage: React.FC = () => {
  return (
    <Row gutter={[10, 10]}>
      <Col span={24}>
        <Topnum></Topnum>
      </Col>
      <Col span={6}>
        <Row gutter={[10, 10]}>
          <Col span={24}>
            <InnerPay />
          </Col>
          <Col span={24}>
            <ChnlPie></ChnlPie>
          </Col>
        </Row>
      </Col>
      <Col span={12}>
        <Map></Map>
      </Col>
      <Col span={6}>
        <Row gutter={[10, 10]}>
          <Col span={24}>
            <Line></Line>
          </Col>
          <Col span={24}>
            <ZonePie></ZonePie>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default HomePage;
