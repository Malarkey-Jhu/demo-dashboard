import { GridContent } from "@ant-design/pro-components";
import { Col, Descriptions, DescriptionsProps, Row } from "antd";
import Throughput from "./components/Throughput";
import CacheHit from "./components/CacheHit";

const GraphWrapper = (props: any) => {
  return <div style={{
    width: '380px',
    height: '400px',
    backgroundColor: 'transparent',
    borderRadius: '10px',
    padding: '15px'
  }}>
    {props.children}
  </div>
}

const items: DescriptionsProps['items'] = [
  {
    label: 'Directories Created',
    children: 2,
    span: {xl: 1, lg: 1, md: 1, sm: 1, xs: 1}
    
  },
  {
    label: 'File Infos Got' ,
    children: 6,
    span: {xl: 1, lg: 1, md: 1, sm: 1, xs: 1}
  },
  {
    label: 'New Blocks Got' ,
    children: 0,
    span: {xl: 1, lg: 1, md: 1, sm: 1, xs: 1}
  },
  {
    label: 'Files Created',
    children: 1,
    span: {xl: 1, lg: 1, md: 1, sm: 1, xs: 1}
  },
  {
    label: 'Paths Mounted',
    children: 0,
    span: {xl: 1, lg: 1, md: 1, sm: 1, xs: 1}
  },
  {
    label: 'Paths Unmounted',
    children: 0,
    span: {xl: 1, lg: 1, md: 1, sm: 1, xs: 1}
  },
  {
    label: 'Oher',
    children: 'The lists goes on...',
    span: {xl: 3, lg: 3, md: 3, sm: 3, xs: 3}
  },
];



const Metrics = () => {
  return <GridContent>
    <Row>

      <Col xl={8} lg={8} md={8} sm={24} xs={24}>
      <GraphWrapper>
       <Throughput type="read"/>
      </GraphWrapper>
      </Col>

      <Col xl={8} lg={8} md={8} sm={24} xs={24}>
      <GraphWrapper>
        <Throughput type="write"/>
      </GraphWrapper>
      </Col>
      
      <Col xl={8} lg={8} md={8} sm={24} xs={24}>
      <GraphWrapper>
        <CacheHit/>
      </GraphWrapper>
      </Col>
    </Row>

    <Descriptions  layout="vertical" bordered title="Metrics" items={items} />
  </GridContent>;
};

export default Metrics;