import React, { memo, useState, useEffect, useCallback, useContext, useReducer, useRef } from 'react';
import { Row, Col, Button, Checkbox, Form, Input, Switch } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

/* Chrome调试技巧 */
const Chrome = () => {
  const [obj, setObj] = useState({});
  // const [edit, setEdit] = useState(false);

  const [disableForm, setDisableForm] = useState(false);

  const [form] = Form.useForm();

  const Kaselin = 18;

  useEffect(() => {
    setObj({
      name: 'Charlie',
      age: 18,
      like: { girl: { com: ['Kaselin', 'Viky', 'Ning'] }, ball: ['pingpang', 'baseball', 'basketball'] },
    });
  }, []);

  // console.table 适合调试层级少的 Object, Array:
  console.clear();
  console.table(obj);
  console.table(obj.like);
  console.table(obj.like && obj.like.ball);

  const onFinish = v => {
    console.log(`onFinish: `, v);
  };

  const onFinishFailed = e => {
    console.log(`onFinishFailed: `, e);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({ username: 'cc', password: '123' });
  };

  return (
    <section className="pages">
      <div>create plan</div>

      <Row>
        <Col span={8}></Col>
        <Col span={10}>
          <label>
            Disable Form
            <Switch onChange={setDisableForm} />
          </label>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form
            form={form}
            name="basic"
            labelCol={{ md: { span: 8 } }}
            wrapperCol={{ md: { span: 10 } }}
            initialValues={{ member: true }}
            disabled={disableForm}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="name"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="password" name="password" rules={[{ required: true, message: 'Please input your pwd!' }]}>
              <Input.Password />
            </Form.Item>
            <Form.Item name="member" valuePropName="checked" wrapperCol={{ offset: 8, span: 10 }}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 10 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button htmlType="button" onClick={onReset}>
                Reset
              </Button>
              <Button htmlType="button" onClick={onFill}>
                Fill
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </section>
  );
};

const ChromeMemo = memo(Chrome);

export default ChromeMemo;
