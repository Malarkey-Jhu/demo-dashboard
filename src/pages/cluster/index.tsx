import {  Col, Descriptions, Progress, Row, Table, Tooltip } from 'antd';
import type { DescriptionsProps } from 'antd';
import { GridContent } from "@ant-design/pro-components";
import { Field } from './components/Charts';
import { ChartCard } from './components/Charts';
import { CheckCircleFilled, InfoCircleOutlined } from '@ant-design/icons';
import useStyles from './style.style';


const dataSource = [
  {
    key: '1',
    type: 'S3',
    phase: 'Ready',
    age: '2m',
    mount: {
      '/s3-1/': 's3://my-bucket/path/to/mount',
      '/s3-2/': 's3://my-bucket-2/path/to/mount',
    }
  },
  {
    key: '2',
    type: 'OSS',
    phase: 'Ready',
    age: '1m10s',
    mount: {
      '/oss-1/': 'oss://my-bucket/path/to/mount',
      '/oss-2/': 'oss://my-bucket-2/path/to/mount',
    },
  },
  {
    key: '3',
    type: 'NAS',
    phase: 'Ready',
    age: '11m',
    mount: {
      '/mnt-nas/': '/ufs/data',
    }
  },
];

const columns = [
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Phase',
    dataIndex: 'phase',
    key: 'phase',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  
  {
    title: 'Mount',
    dataIndex: 'mount',
    key: 'mount',
    render: (value: Record<string, string>) => {
      return Object.entries(value).map(([k, v]) => {
        return <div key={k}>{v}</div>;
      });
    },
  },
];


const generalDescriptions: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Master Address',
    children: 'd2cd2edfc55c:19998',
  },
  {
    key: '2',
    label: 'Cluster Id',
    children: '71463f6f-94a3-41e8-852d-dc2754b086e8',
  },
  {
    key: '3',
    label: 'Revision',
    children: '3cb752d08f2835003db12b9c661165a59836d1fb',
  },
  {
    key: '4',
    label: 'Total Paths',
    children: '23',
  },
  {
    key: '5',
    label: 'Started Time',
    span: 2,
    children: '2024-12-13 18:00:00',
  },
  {
    key: '7',
    label: 'Storage',
    span: 3,
    children:  <Table style={{width: '100%'}} dataSource={dataSource} columns={columns} pagination={false}/>,
  },
];

const resourceLimitations: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Worker Limits',
    children: (
    <div>
      <Field label="CPU:" value="12" />
      <Field label="Memory:" value="36Gi" />
    </div>
    ),
  },
  {
    key: '2',
    label: 'Worker Requests',
    children: (
    <div>
      <Field label="CPU:" value="1" />
      <Field label="Memory:" value="32Gi" />
    </div>
    ),
  },
  {
    key: '3',
    label: 'WorkerJVM Options',
    children: (
    <div>
      <div>-Xmx22g</div>
      <div>-Xms22g</div>
      <div>-XX:MaxDirectMemorySize=10g</div>
    </div>
    ),
  },
  {
    key: '4',
    label: 'Coordinator Limits',
    children: (
    <div>
      <Field label="CPU:" value="12" />
      <Field label="Memory:" value="36Gi" />
    </div>
    ),
  },
  {
    key: '5',
    label: 'Coordinator Requests',
    children: (
    <div>
      <Field label="CPU:" value="1" />
      <Field label="Memory:" value="32Gi" />
    </div>
    ),
  },
  {
    key: '6',
    label: 'CoordinatorJVM Options',
    children: (
    <div>
      <div>-Xmx4g</div>
      <div>-Xms1g</div>
    </div>
    ),
  }
];


const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: {
    marginBottom: 24,
  },
};



const Cluster = () => {

  const {styles} = useStyles();
  
  return <GridContent>


        <Row gutter={24}>
          <Col {...topColResponsiveProps}>
          <ChartCard
            bordered={false}
            title="Status"
            action={
              <Tooltip title="指标说明">
                <InfoCircleOutlined />
              </Tooltip>
            }
            total={() => <div className={styles.success}><CheckCircleFilled /> Active</div>}
            footer={<Field label="Uptime" value={`44min`} />}
            contentHeight={46}
          >
          <Field label="Version" value={`AI-3.4-9.0.0`} />
          </ChartCard>
          </Col>

          <Col {...topColResponsiveProps}>
          <ChartCard
            bordered={false}
            title="Running Workers"
            action={
              <Tooltip title="指标说明">
                <InfoCircleOutlined />
              </Tooltip>
            }
            total={() => 4}
            footer={<Field label="Total nodes" value={`4`} />}
            contentHeight={46}
          >
          <Field label="Down workers" value={`0`} />
          </ChartCard>
          </Col>

          <Col {...topColResponsiveProps}>
          <ChartCard
            bordered={false}
            title="Workers Usage"
            action={
              <Tooltip title="指标说明">
                <InfoCircleOutlined />
              </Tooltip>
            }
            total={"78%"}
            footer={<>
              <Field label="Workers Free Space" value={`100GB`} />
              <Field label="Workers Used Space" value={`78GB`} />
            </>}
            contentHeight={46}
          >
          <Progress percent={78} strokeColor={{ from: '#108ee9', to: '#87d068' }} status="active" />
          </ChartCard>
          </Col>
        </Row>

       <Descriptions title="General Info" layout="vertical"  items={generalDescriptions} style={{padding: 20}}/>
       <Descriptions title="Resource Limitations" layout="vertical"  items={resourceLimitations} style={{padding: 20}}/>




    </GridContent>;
};



export default Cluster;