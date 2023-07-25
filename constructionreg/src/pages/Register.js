import {
  Col,
  Divider,
  Row,
  Form,
  Button,
  DatePicker,
  Checkbox,
  Input,
} from "antd";
import scaffoldimages from "../images/registerimg.jpg";
import React from "react";

function Register() {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Divider orientation="left"></Divider>
      <Row justify={"center"} align={"middle"} style={{ height: "100vh" }}>
        <Col
          span={9}
          className="left"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={scaffoldimages}></img>
        </Col>

        <Col span={9} className="right">
          <h1>SIGN UP</h1>
          <div className="form-container">
            <Form
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 14 }}
              onFinish={{ onFinish }}
              style={{ textAlign: "left" }}
            >
              <Form.Item
                name="fullname"
                label="Fullname"
                rules={[
                  {
                    required: true,
                    message: "Please enter your fullname",
                  },
                  {
                    pattern: /^[a-zA-Z ]+$/,
                    message: "Fullname must contain only letters",
                  },
                ]}
                className="custom-form-item"
              >
                <Input
                  style={{ width: "300px" }}
                  placeholder="Type your name"
                />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: "Please enter your email",
                  },
                  {
                    type: "email",
                    message: "Please enter a valid email",
                  },
                ]}
                className="custom-form-item"
              >
                <Input
                  style={{ width: "300px" }}
                  placeholder="Type your email"
                />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please enter your password",
                  },
                  {
                    min: 8,
                    message: "Password must be at least 8 characters long",
                  },
                  {
                    pattern: /^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                    message:
                      "Password must contain at least one number and one special character",
                  },
                ]}
                className="custom-form-item"
              >
                <Input.Password
                  style={{ width: "300px" }}
                  placeholder="Type your password"
                />
              </Form.Item>

              <Form.Item
                name="confirmpassword"
                label="Confirm Password"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("The two passwords do not match")
                      );
                    },
                  }),
                ]}
                className="custom-form-item"
              >
                <Input.Password
                  style={{ width: "300px" }}
                  placeholder="Confirm your password"
                />
              </Form.Item>

              <Form.Item
                name="dob"
                label="Date of Birth"
                rules={[
                  {
                    required: true,
                    message: "Please select your date of birth",
                  },
                ]}
                className="custom-form-item"
              >
                <DatePicker
                  style={{ width: "300px" }}
                  picker="date"
                  placeholder="Select Date"
                />
              </Form.Item>

              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(
                            new Error(
                              "You must agree to the Terms and Conditions"
                            )
                          ),
                  },
                ]}
                wrapperCol={{ offset: 5, span: 14 }}
              >
                <Checkbox>
                  Agree to our <a href="#">Terms and Conditions</a>
                </Checkbox>
              </Form.Item>

              <Form.Item
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    width: "300px",
                    fontSize: "19px",
                    paddingBottom: "30px",
                  }}
                >
                  Register
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Register;
