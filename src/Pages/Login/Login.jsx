import React, { useRef, useState } from "react";
import { Button, Form, Input } from "antd";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../features/Signin";

/**
 *
 * @function Login
 * @returns {JSX.Element} - A login form with email and password input fields
 */

const Login = () => {
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  // useRef hook to give focus to error message element
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState("");

  // message color
  const [color, setColor] = useState("");
  // useRef hook to give focus to success message element
  const succRef = useRef();
  const [sucMsg, setSucMsg] = useState("");

  /**
   *
   * @function onFinish
   * @param {Object} values - An object containing the email and password values from the form
   * @returns {void} - Sets success or error message based on validation
   */

  const onFinish = (values) => {
    // validate email and password
    dispatch(login(values))
      .then((res) => {
        setErrMsg("");
        setSucMsg("Login Successfully");
        setColor("green");
        nevigate("/JAWAD_Assignment_ROUND3/input");
      })
      .catch((res) => {
        setErrMsg("Either your password or login is incorrect");
        setSucMsg("");
        setColor("red");
      });
    // give focus to error message element
    errRef.current.focus();
    // give focus to success message element
    succRef.current.focus();
  };

  /**
   *
   * @function onFinishFailed
   * @param {Object} errorInfo - An object containing information about the error
   * @returns {void} - Logs the error object to the console
   */
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="App">
      <div className="login">
        <Form
          name="basic"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="head">
            <img
              className="images"
              src={`${process.env.PUBLIC_URL}\\image\\logo.jpg`}
              alt="logo"
              width="200"
            />
          </div>

          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input className="custom__input" placeholder="Login" />
          </Form.Item>

          <Form.Item
            style={{ marginBottom: 2 }}
            name="password"
            rules={[{ required: true }]}
          >
            <Input.Password className="custom__input" placeholder="Password" />
          </Form.Item>

          {/* element to display error message and success message */}
          <p
            ref={errRef}
            style={{ color: color, padding: 2, margin: 2 }}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
            {sucMsg}
          </p>
          <Form.Item wrapperCol={{ span: 24 }}>
            <Button className="custom__input" type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
