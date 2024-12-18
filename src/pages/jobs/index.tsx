


import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import {
  FooterToolbar,
  ProDescriptions,
  ProTable,
  useToken,
} from '@ant-design/pro-components';
import { Button, Drawer, Modal, Space } from 'antd';
import React, { useRef, useState } from 'react';
import type { TableListItem, TableListPagination } from './data';
import {  getFreeJobDetail, getLoadJobDetail, jobs } from './service';
import { InfoCircleFilled } from '@ant-design/icons';

const JobActionModal: React.FC<{isModalOpen: boolean, handleOk: () => void, handleCancel: () => void, operation: string, currentRow: TableListItem | undefined}> = ({isModalOpen, handleOk, handleCancel, operation, currentRow}) => {
  const {token} = useToken();
  return (
    <Modal title={
      <div>
        <InfoCircleFilled style={{color: token.colorWarning}} />
        <span style={{marginLeft: 10}}>Warning</span>
      </div>
    } open={isModalOpen} onOk={handleOk} onCancel={handleCancel} 
    footer={<>
      <Button type="primary" onClick={handleOk}>
        OK
      </Button>
      <Button onClick={handleCancel}>
        Cancel
      </Button>
    </>}
  >
     <div>
          <div>Are you sure you want to {operation} the job</div>
          <div> {currentRow?.id}</div>
        </div>
  </Modal>
  )
}


const JobDetailDrawer: React.FC<{isDrawerOpen: boolean, currentRow: TableListItem | undefined, handleClose: () => void, columns: ProColumns<TableListItem>[]}> = ({isDrawerOpen, currentRow, handleClose, columns}) => {
  return (
    <Drawer
        width={600}
        open={isDrawerOpen}
        onClose={handleClose}
        closable={false}
      >
        {currentRow?.id && (
          <ProDescriptions<TableListItem>
            column={2}
            title={currentRow?.id}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.id,
            }}
            columns={columns.filter(item => item.dataIndex !== 'option') as ProDescriptionsItemProps<TableListItem>[]}
          />
        )}
        <br />
        <br />
        {
          currentRow?.type === 'LOAD' && (
            <ProDescriptions
              column={2}
              title="Load Job Detail"
              request={async () => await getLoadJobDetail({id: currentRow?.id})}
              params={{
                id: currentRow?.id,
              }}
            >
            <ProDescriptions.Item label="Failed File List Path" dataIndex="failedFileListPath" />
            <ProDescriptions.Item label="Path" dataIndex="path" />
            <ProDescriptions.Item label="Index" dataIndex="index" />
            <ProDescriptions.Item label="Skip If Exists" dataIndex="skipIfExists" valueType="text" render={(_, item) => item?.skipIfExists ? 'true' : 'false'} />
            <ProDescriptions.Item label="Load Metadata Only" dataIndex="loadMetadataOnly" valueType='text' render={(_, item) => item?.loadMetadataOnly ? 'true' : 'false'} />
            <ProDescriptions.Item label="Verify" dataIndex="verify" valueType="text" render={(_, item) => item?.verify ? 'true' : 'false'} />
            <ProDescriptions.Item label="Bandwidth" dataIndex="bandwidth" />
            <ProDescriptions.Item label="Time Elapsed (ms)" dataIndex="timeElapsedMilliseconds" />
            <ProDescriptions.Item label="Loaded Bytes" dataIndex="loadedBytes" />
            <ProDescriptions.Item label="Skipped Bytes" dataIndex="skippedBytes" />
            <ProDescriptions.Item label="Total Bytes" dataIndex="totalBytes" />
            <ProDescriptions.Item label="Loaded Non-Empty Files" dataIndex="loadedNonEmptyFiles" />
            <ProDescriptions.Item label="Failed Files" dataIndex="failedFiles" />
            <ProDescriptions.Item label="Scanned Files" dataIndex="scannedFiles" />
          </ProDescriptions>
          )
        }
        {
          currentRow?.type === 'FREE' && (
            <ProDescriptions
              column={2}
              title="Free Job Detail"
              request={async () => await getFreeJobDetail({id: currentRow?.id})}
              params={{
                id: currentRow?.id,
              }}
            >
              <ProDescriptions.Item label="Path" dataIndex="path" />
              <ProDescriptions.Item label="Time Elapsed (ms)" dataIndex="timeElapsedMilliseconds" />
              <ProDescriptions.Item label="Freed Bytes" dataIndex="freedBytes" />
              <ProDescriptions.Item label="Failed Bytes" dataIndex="failedBytes" />
              <ProDescriptions.Item label="Total Bytes" dataIndex="totalBytes" />
              <ProDescriptions.Item label="Freed Files" dataIndex="freedFiles" />
              <ProDescriptions.Item label="Failed Files" dataIndex="failedFiles" />
              <ProDescriptions.Item label="Total Files" dataIndex="totalFiles" />
            </ProDescriptions>
          )
        }
      </Drawer>
  )
}

const TableList: React.FC = () => {
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<TableListItem>();
  const [selectedRowsState, setSelectedRows] = useState<TableListItem[]>([]);
  const [operation, setOperation] = useState<string>('');

  const isModalOpen = operation !== '';

  const clickOperation = (operation: string, record: TableListItem) => {
    setOperation(operation);
    setCurrentRow(record);
  }

  const handleOk = () => {
    setCurrentRow(undefined);
    setOperation('');
  };

  const handleCancel = () => {
    setCurrentRow(undefined);
    setOperation('');
  };


  const columns: ProColumns<TableListItem>[] = [
    {
      title: 'Job ID',
      dataIndex: 'id',
      render: (dom, entity) => {
        return (
          <a
            onClick={() => {
              setCurrentRow(entity);
              setShowDetail(true);
            }}
          >
            {dom}
          </a>
        );
      },
    },
    {
      title: 'Type',
      dataIndex: 'type',
      renderText: (val: string) => val,
      valueEnum: {
        'LOAD': {
          text: 'LOAD ',
        },
        'FREE': {
          text: 'FREE',
        },
        'COPY': {
          text: 'COPY',
        },
      },
    },
    {
      title: 'State',
      dataIndex: 'state',
      hideInForm: true,
      valueEnum: {
        'IN_PROGRESS': {
          text: 'Processing',
          status: 'Processing',
        },
        'SUCCEEDED': {
          text: 'Done',
          status: 'Success',
        },
        'FAILED': {
          text: 'Error',
          status: 'Error',
        },
      },
    },
    {
      title: 'Start Time',
      sorter: true,
      dataIndex: 'startTime',
      valueType: 'dateTime',
     
    },
    {
      title: 'Operation',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => {
        return (
        <Space>
          <a onClick={() => clickOperation('RESTART', record)}>Restart</a>
          {record.state !== 'FAILED' && <a onClick={() => clickOperation('STOP', record)}>Stop</a>}
        </Space>
        )
      },
    },
  ];

  return (
    <>
      <ProTable<TableListItem, TableListPagination>
        headerTitle="Jobs List"
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          
        ]}
        form={{
          layout: 'vertical',
          labelCol: {
            span: 12,
          },
          wrapperCol: {
            span: 24,
          },
        }}
        request={jobs}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              Selected{' '}
              <a
                style={{
                  fontWeight: 600,
                }}
              >
                {selectedRowsState.length}
              </a>{' '}
              Items
            </div>
          }
        >
          <Button
            type="primary"
            onClick={async () => {
              // await handleRemove(selectedRowsState);
              // setSelectedRows([]);
              // actionRef.current?.reloadAndRest?.();
            }}
          >
            Stop
          </Button>
          <Button type="primary">Restart</Button>
        </FooterToolbar>
      )}


      <JobDetailDrawer isDrawerOpen={showDetail} currentRow={currentRow} handleClose={() => {
        setCurrentRow(undefined);
        setShowDetail(false);
      }} columns={columns} />


      <JobActionModal isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} operation={operation} currentRow={currentRow} />
    </>
  );
};



const Jobs = () => {
  return (
  <TableList />
  );
};

export default Jobs;