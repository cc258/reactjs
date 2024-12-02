import React, { memo, useState, useEffect } from 'react';
import { Form, Input, Table, InputNumber, Popconfirm, Upload } from 'antd';

/* Chrome调试技巧 */
const Chrome = () => {
  const [obj, setObj] = useState({});
  // const [edit, setEdit] = useState(false);
  const [paymentFileId, setPaymentFileId] = useState([]);
  const [popFileIds, setPopFileIds] = useState([]);

  const Kaselin = 18;

  useEffect(() => {
    setObj({
      name: 'Charlie',
      age: 18,
      like: { girl: { com: ['Kaselin', 'Viky', 'Ning'] }, ball: ['pingpang', 'baseball', 'basketball'] },
    });
  }, []);

  // console.table 适合调试层级少的 Object, Array:123
  // console.clear();
  // console.table(obj);
  // console.table(obj.like);
  // console.table(obj.like && obj.like.ball);

  const onPaymentUpload = files => {
    console.log(files);
    // const file = { fileId: res.fileId, uid: res.uid, name: res.name };
    setPaymentFileId(files);
  };
  const onPopUpload = files => {
    console.log(files);
    // const file = { fileId: res.fileId, uid: res.uid, name: res.name };
    setPopFileIds(files);
  };

  const paymentUpload = {
    fileList: paymentFileId,
    onChange: onPaymentUpload,
    accept: '.xls,.xlsx',
    label: 'Payment File:',
  };

  const popUpload = {
    fileList: popFileIds,
    onChange: onPopUpload,
    multiple: true,
    note: <p>1.单个文件不能超出200M。</p>,
    accept: '.xls,.xlsx',
    label: 'POP:',
    total: 1,
  };

  return (
    <section className="pages">
      <div style={{ width: '400px', margin: '0 auto' }}>
        <DraggerFile {...paymentUpload} />
        <DraggerFile {...popUpload} />
      </div>
      <EditableTable />
    </section>
  );
};

const DraggerFile = ({
  fileList = [],
  onChange,
  note = '',
  text = '',
  accept = ACCEPT_TYPE,
  multiple = false,
  label = '文件上传',
  total = 0,
}) => {
  const judgeFileExtensionIsAccepted = fileName => {
    let fileExtension = fileName.substring(fileName.lastIndexOf('.'));
    let fileAcceptTypes = accept.split(',');
    return fileAcceptTypes.includes(fileExtension);
  };

  // 文件上传前大小校验
  const beforeUpload = file => {
    let fileSizeLarger = file.size > FILE_SIZE_200M;
    let fileExtensionIsAccepted = judgeFileExtensionIsAccepted(file.name);
    if (fileSizeLarger) {
      message.error(`${file.name} upload failed. Maximum size of a single file should not exceed 200M`);
    } else if (!fileExtensionIsAccepted) {
      message.error(`${file.name} upload failed. Only files in specified format can be uploaded`);
    }
    return fileExtensionIsAccepted && !fileSizeLarger;
  };

  const onRemove = file => {
    const files = fileList.filter(item => file.uid !== item.uid);
    onChange(files);
  };

  const handleChange = info => {
    let { fileList } = info;
    onChange(fileList);
  };

  // 自定义上传
  const customRequest = async ({ file, onSuccess, onError, onProgress }) => {
    let data = {
      params: { files: file },
    };
    let config = {
      progressCallBack: percent => {
        onProgress({ percent });
      },
    };
    try {
      const res = await Promise.resolve({ fileId: 'wq2eeqweqwe121312eqwe' });

      onSuccess(res);
      const FileId = res.fileId;
      if (FileId) {
        const fileHasId = { uid: file.uid, name: file.name, fileId: FileId };
        if (multiple) {
          onChange([...fileList, fileHasId]);
        } else {
          onChange([fileHasId]);
        }
        // message.success(`${file.name} file uploaded successfully.`);
      }
    } catch (e) {
      // message.error(`${file.name} file upload failed.`);
    }
  };

  return (
    <div>
      <div>{label}</div>
      <div className="upload-tip">{note}</div>
      <Upload.Dragger
        accept={accept}
        multiple={multiple}
        fileList={fileList}
        // beforeUpload={beforeUpload}
        customRequest={customRequest}
        onRemove={onRemove}
        // onChange={handleChange}
      >
        <p className="ant-upload-drag-icon">{/* <Icon type="inbox" /> */}</p>
        <p className="ant-upload-text">{text} Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Accept Type
          <br />
          {accept}
        </p>
      </Upload.Dragger>
      {total ? <p>{`total: ${fileList.length} file(s)`}</p> : null}
    </div>
  );
};

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

const EditableContext = React.createContext();
const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);
const EditableFormRow = Form.create()(EditableRow);
class EditableCell extends React.Component {
  getInput = () => {
    if (this.props.inputType === 'number') {
      return <InputNumber />;
    }
    return <Input />;
  };

  renderCell = ({ getFieldDecorator }) => {
    const { editing, dataIndex, title, inputType, rules, record, index, children, ...restProps } = this.props;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item style={{ margin: 0 }}>
            {getFieldDecorator(dataIndex, {
              rules,
              initialValue: record[dataIndex],
            })(this.getInput())}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  render() {
    return <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>;
  }
}

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data, editingKey: '' };
    this.columns = [
      {
        title: 'name',
        dataIndex: 'name',
        width: '25%',
        rules: [{ require: true, message: '' }],
        editable: true,
      },
      {
        title: 'age',
        dataIndex: 'age',
        width: '15%',
        rules: [{ type: 'number', min: 0.4, message: '数值必须大于0.5' }],
        editable: true,
      },
      {
        title: 'address',
        dataIndex: 'address',
        width: '40%',
        rules: [{ type: 'number', min: 0.4, message: '数值必须大于0.5' }],
        editable: true,
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (text, record) => {
          const { editingKey } = this.state;
          const editable = this.isEditing(record);
          return editable ? (
            <span>
              <EditableContext.Consumer>
                {form => (
                  <a onClick={() => this.save(form, record.key)} style={{ marginRight: 8 }}>
                    Save
                  </a>
                )}
              </EditableContext.Consumer>
              <Popconfirm title="Sure to cancel?" onConfirm={() => this.cancel(record.key)}>
                <a>Cancel</a>
              </Popconfirm>
            </span>
          ) : (
            <a disabled={editingKey !== ''} onClick={() => this.edit(record.key)}>
              Edit
            </a>
          );
        },
      },
    ];
  }

  isEditing = record => record.key === this.state.editingKey;

  cancel = () => {
    this.setState({ editingKey: '' });
  };

  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const newData = [...this.state.data];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        this.setState({ data: newData, editingKey: '' });
      } else {
        newData.push(row);
        this.setState({ data: newData, editingKey: '' });
      }
    });
  }

  edit(key) {
    console.log('click key: ', key);
    this.setState({ editingKey: key });
  }

  render() {
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };

    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputType: col.dataIndex === 'age' ? 'number' : 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          rules: col.rules,
          editing: this.isEditing(record),
        }),
      };
    });

    return (
      <Table
        components={components}
        bordered
        dataSource={this.state.data}
        columns={columns}
        rowClassName="editable-row"
        pagination={{
          onChange: this.cancel,
        }}
      />
    );
  }
}

const ChromeMemo = memo(Chrome);

export default ChromeMemo;
