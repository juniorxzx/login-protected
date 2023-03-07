import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthProvider/userAuth";
import { Row, Col, Form, Input, Button, message } from "antd";

const Login = () => {
  const auth = UserAuth();

  const history = useNavigate();
  async function onFinish(values: { email: string; password: string }) {
    try {
      await auth.authenticate(values.email, values.password);

      history("/profile");
    } catch (error) {
      message.error("Email ou senha inválidos");
    }
  }
  return (
    <Row justify={"center"} align={"middle"} style={{ height: "100vh" }}>
      <Col span={12}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
        >
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
