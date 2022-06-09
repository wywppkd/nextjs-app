import { Button, DatePicker, Form } from 'antd';
import type { Moment } from 'moment';
import moment from 'moment';
import { useRouter } from 'next/router';
import React from 'react';

type FormType = {
  datetime: Moment;
};

const Index = () => {
  const router = useRouter();

  const onFinish = (values: FormType) => {
    const datetime = values.datetime.format();
    router.push(`/bigday/${datetime}`);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <Form<FormType>
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="datetime"
          label="BigDay"
          rules={[{ required: true, message: '请选择时间' }]}
        >
          <DatePicker
            showTime={{
              defaultValue: moment('00:00:00', 'HH:mm:ss'),
            }}
            showToday
            format="YYYY-MM-DD HH:mm:ss"
            style={{ width: '200px' }}
            placeholder="请选择时间"
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Confirm
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Index;
