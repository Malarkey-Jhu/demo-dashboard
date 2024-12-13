import { InfoCircleOutlined } from "@ant-design/icons";
import { Space, Table, Typography } from "antd";

/**
 * example quota data
 * {
      "path": "/data/dir/to/path",
      "state": "Available",
      "quotaBytes": 10737418240,
      "usedBytes": 9663676416,
      "reservedBytes": 1073741824
    }
 */

const quotaDataSource = [
  {
    key: '1',
    path: '/data/dir/to/path',
    state: 'Available',
    quotaBytes: 10737418240,
    usedBytes: 9663676416,
    reservedBytes: 1073741824,
  },
  {
    key: '2',
    path: '/data/dir/to/path2',
    state: 'Available',
    quotaBytes: 10737418240,
    usedBytes: 9663676416,
    reservedBytes: 2012398007,
  },
];

const quotaColumns = [
  {
    title: 'Path',
    dataIndex: 'path',
    key: 'path',
  },
  {
    title: 'State',
    dataIndex: 'state',
    key: 'state',
  },
  {
    title: 'Quota/Used (MB)',
    dataIndex: 'quotaBytes',
    key: 'quotaBytes',
    render: (quotaBytes: number, record: any) => <>{(quotaBytes / 1024 / 1024).toFixed(2)} MB <br/> {(record.usedBytes / 1024 / 1024).toFixed(2)} MB</>,
  },
  {
    title: 'Reserved (MB)',
    dataIndex: 'reservedBytes',
    key: 'reservedBytes',
    render: (reservedBytes: number) => `${(reservedBytes / 1024 / 1024).toFixed(2)} MB`,
  },
  {
    title: 'Action',
    key: 'action',
    width: '200px',
    render: () => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];


const ttlColumns = [
  {
    title: 'Path',
    dataIndex: 'path',
    key: 'path',
  },
  {
    title: 'TTL (Seconds)',
    dataIndex: 'ttl',
    key: 'ttl',
  },
  {
    title: 'Action',
    key: 'action',
    width: '200px',
    render: () => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];


const ttlDataSource = [
  {
    key: '1',
    path: '/data/dir/to/path',
    ttl: 600,
  },
  {
    key: '2',
    path: '/data/dir/to/path2',
    ttl: 400,
  },
  {
    key: '3',
    path: '/another/path',
    ttl: 300,
  },
];

// quota
// ttl
const Settings = () => {
  return <div>


    <div style={{display: 'flex', alignItems: 'center', marginBottom: 16}}>
    <div style={{display: 'inline-block', fontSize: 24, fontWeight: 500}}>Quota</div>
    <a href="https://documentation.alluxio.io/ee-ai-en/reference/user-cli#quota" target="_blank" rel="noreferrer"><InfoCircleOutlined style={{marginLeft: 8 }} /></a>
    </div>
    <Typography.Paragraph>All quota policy definitions in Alluxio system</Typography.Paragraph>
    <Table dataSource={quotaDataSource} columns={quotaColumns} pagination={false} />

    <br />
    <br />
    <br />

    <div style={{display: 'flex', alignItems: 'center', marginBottom: 16}}>
    <div style={{display: 'inline-block', fontSize: 24, fontWeight: 500}}>TTL</div>
    <a href="https://documentation.alluxio.io/ee-ai-en/reference/user-cli#ttl" target="_blank" rel="noreferrer"><InfoCircleOutlined style={{marginLeft: 8 }} /></a>
    </div>
    <Typography.Paragraph>All TTL policy definitions in Alluxio system</Typography.Paragraph>
    <Table dataSource={ttlDataSource} columns={ttlColumns}  pagination={false}/>
  </div>;
};

export default Settings;