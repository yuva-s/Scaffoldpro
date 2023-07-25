import { Button, Checkbox, Form, Input } from "antd";
import "./Login.css";
import { Col, Divider, Row } from "antd";
import scafolding from "../images/scafolding.jpg";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

// const onFinish = (values) => {
//   console.log("Success:", values);
// };
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const datas = () => {
  const onFinish = (values) => {
    debugger;
    fetch("https://rcz-backend.onrender.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
        // Add any other headers you may need, like authorization headers
      },
      body: JSON.stringify({
        userName: values.username,
        passWord: values.password,
      }),
    })
      .then((e) => e.json())
      .then((e) => {
        localStorage.setItem("batch13", e);
      })
      .catch((error) => {
        debugger;
      });
  };

  return (
    <div className="App">
      <Divider orientation="left"></Divider>
      <Row justify={"center"} align={"middle"}>
        <Col span={9} className="left">
          <img src={scafolding} className="image"></img>
        </Col>

        <Col span={9} className="right">
          <h1 className="fontstyle1">Welcome To Insid-Mark</h1>
          <h4 className="fontstyle2">
            Welcome to Insid-Mark.Please Login With Your<br></br>
            Personal Account Information Letter.
          </h4>

          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
                {
                  pattern: /^[a-zA-Z]+$/,
                  message: "Username must contain only letters",
                },
                {
                  min: 4,
                  message: "Username must be at least 4 characters long!",
                },
              ]}
              className="custom-form-item"
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
                {
                  min: 8,
                  message: "Password must be at least 8 characters long!",
                },
                {
                  // pattern:
                  //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  message:
                    "Password must contain at least one letter, one number, and one special character!",
                },
              ]}
              className="custom-form-item"
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingLeft: "130px",
                  fontSize: "16px",
                }}
              >
                Remember me
                <span>
                  <a
                    className="login-form-forgot"
                    href=""
                    style={{ display: "flex", paddingLeft: "80px" }}
                  >
                    Forgot password
                  </a>
                </span>
              </Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button
                className="custom-button"
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default datas;
