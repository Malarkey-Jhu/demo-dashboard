import { InfoCircleFilled } from "@ant-design/icons"
import { useToken } from "@ant-design/pro-components";
import { Form, Modal, Input, Button, InputNumber } from "antd"


export type ResourceAction = 'CREATE' | 'UPDATE' | 'DELETE'

export type FieldType = {
  path?: string;
  ttl?: number;
};

const TTLForm: React.FC<{actionType: ResourceAction, onFinish: (values: FieldType) => void, onFinishFailed: (errorInfo: any) => void, initialValues: FieldType}> = ({actionType, onFinish, onFinishFailed, initialValues}) => {
  return (
    <Form
    labelCol={{ span: 24 }}
    wrapperCol={{ span: 24 }}
    initialValues={initialValues}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    key={`${actionType}-${initialValues.path}`}
  >
    <Form.Item<FieldType>
      label="Path"
      name="path"
      rules={[{ required: true, message: 'Please input your path!' }]}
    >
      <Input placeholder="/example/path" disabled={actionType === 'DELETE'}/>
    </Form.Item>

    <Form.Item<FieldType>
      label="TTL (seconds)"
      name="ttl"
      rules={[{ required: true, message: 'Please input your TTL (seconds)!' }]}
    >
      <InputNumber style={{width: '100%'}} disabled={actionType === 'DELETE'}/>
    </Form.Item>


    <Form.Item label={null} wrapperCol={{ offset: 10}}>
      <Button type="primary" htmlType="submit" style={{marginTop: 10}}>
        { actionType === 'CREATE' && 'Create' }
        { actionType === 'UPDATE' && 'Update' }
        { actionType === 'DELETE' && 'Delete' }
      </Button>
    </Form.Item>
  </Form>
  )
}

const ActionTTLModal: React.FC<{isModalOpen: boolean, handleOk: () => void, handleCancel: () => void, actionType: ResourceAction, initialValues: FieldType}> = ({isModalOpen, handleOk, handleCancel, actionType, initialValues}) => {
  const { token } = useToken();
  return (
    <Modal title={
      <div>
        <InfoCircleFilled style={{color: token.colorWarning}} />
        <span style={{marginLeft: 10}}>
          {actionType === 'CREATE' && 'Create TTL'}
          {actionType === 'UPDATE' && 'Update TTL'}
          {actionType === 'DELETE' && 'Delete TTL'}
        </span>
      </div>
    } open={isModalOpen} onOk={handleOk} onCancel={handleCancel} 
    footer={null}
    destroyOnClose
  >
     <div style={{padding: '10px 20px 0 20px'}}>
      <TTLForm actionType={actionType} onFinish={handleOk} onFinishFailed={handleCancel} initialValues={initialValues}/>
    </div>
  </Modal>
  )
}

export default ActionTTLModal;