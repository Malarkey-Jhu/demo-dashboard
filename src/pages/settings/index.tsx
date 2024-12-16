import {  InfoCircleOutlined } from "@ant-design/icons";
import { Button, Space, Table, Typography } from "antd";
import ActionQuotaModal, { FieldType, ResourceAction } from "./quota/ActionModal";
import { useRef, useState } from "react";
import { TableListItem } from "./data.t";
import { ProTable, ActionType, ProColumns } from "@ant-design/pro-components";
import { quota } from "./service";



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

// const quotaDataSource = [
//   {
//     key: '1',
//     path: '/data/dir/to/path',
//     state: 'Available',
//     quotaBytes: 10737418240,
//     usedBytes: 9663676416,
//     reservedBytes: 1073741824,
//   },
//   {
//     key: '2',
//     path: '/data/dir/to/path2',
//     state: 'Available',
//     quotaBytes: 10737418240,
//     usedBytes: 9663676416,
//     reservedBytes: 2012398007,
//   },
// ];




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

  const actionRef = useRef<ActionType>();
  const [actionType, setActionType] = useState<ResourceAction | null>(null);
  const [initialValues, setInitialValues] = useState<FieldType>({path: '', quotaBytes: 0});

  const clickAction = (action: ResourceAction, record: TableListItem) => {
    setActionType(action);
    setInitialValues(record);
  }

  const handleOk = () => {
    setActionType(null);
  };

  const handleCancel = () => {
    setActionType(null);
  };

  const handleCreateQuotaClick = () => {
    setActionType('CREATE');
    setInitialValues({path: '', quotaBytes: 0});
  }

  const quotaColumns: ProColumns<TableListItem>[] = [
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
      render: (dom, record: TableListItem ) => {
        return (
          <>
            {(record.usedBytes / 1024 / 1024).toFixed(2)} MB <br/> {(record.usedBytes / 1024 / 1024).toFixed(2)} MB
          </>
        )
      },
    },
    {
      title: 'Reserved (MB)',
      dataIndex: 'reservedBytes',
      key: 'reservedBytes',
      render: (dom, record: TableListItem) => {
        return (
          <>
            {(record.reservedBytes / 1024 / 1024).toFixed(2)} MB
          </>
        )
      },
    },
    {
      title: 'Action',
      key: 'action',
      width: '200px',
      render: (dom, record: TableListItem) => (
        <Space size="middle">
          <a onClick={() => clickAction('UPDATE', record)}>Edit</a>
          <a onClick={() => clickAction('DELETE', record)}>Delete</a>
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

  

  return <div style={{padding: 24}}>
    
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      <div>
      <div style={{display: 'flex', alignItems: 'center', marginBottom: 16}}>
        <div style={{display: 'inline-block', fontSize: 24, fontWeight: 500}}>Quota</div>
        <a href="https://documentation.alluxio.io/ee-ai-en/reference/user-cli#quota" target="_blank" rel="noreferrer"><InfoCircleOutlined style={{marginLeft: 8 }} /></a>
      </div>
      <Typography.Paragraph>All quota policy definitions in Alluxio system</Typography.Paragraph>
    </div>

      <Button type="default" style={{float: 'right', marginBottom: 16}} onClick={handleCreateQuotaClick}>Create Quota</Button>
    </div>

    <br />
    <br />
    <ProTable<TableListItem>
        actionRef={actionRef}
        rowKey="path"
        search={false}
        options={false}
        form={{
          layout: 'vertical',
          labelCol: {
            span: 12,
          },
          wrapperCol: {
            span: 24,
          },
        }}
        cardProps={{
          bodyStyle: {
            padding: 0,
          },
        }}
        request={quota}
        columns={quotaColumns}
        pagination={false}
      />


    <ActionQuotaModal isModalOpen={actionType !== null} handleOk={handleOk} handleCancel={handleCancel} actionType={actionType || 'CREATE'} initialValues={initialValues}/>

    <br />
    <br />
    <br />

    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      <div>
        <div style={{display: 'flex', alignItems: 'center', marginBottom: 16}}>
          <div style={{display: 'inline-block', fontSize: 24, fontWeight: 500}}>TTL</div>
        <a href="https://documentation.alluxio.io/ee-ai-en/reference/user-cli#ttl" target="_blank" rel="noreferrer"><InfoCircleOutlined style={{marginLeft: 8 }} /></a>
      </div>
      <Typography.Paragraph>All TTL policy definitions in Alluxio system</Typography.Paragraph>
      </div>
      <Button type="default" style={{float: 'right', marginBottom: 16}}>Create TTL</Button>
    </div>
    <Table dataSource={ttlDataSource} columns={ttlColumns}  pagination={false}/>

  </div>;
};

export default Settings;





