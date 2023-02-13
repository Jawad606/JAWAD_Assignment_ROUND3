import React from "react";
import "./Header.css";
import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Typography } from "antd";
import { NavLink, useNavigate } from "react-router-dom";

/**
 * @typedef {object} ButtonProps
 * @property {number} key - Key for the button.
 * @property {JSX.Element} label - JSX element for the button label.
 */

const { Header } = Layout;
const { Title } = Typography;

/**
 * Array of buttons to be displayed in the header.
 * @type {ButtonProps[]}
 */
const buttons = [
  {
    key: 0,
    label: (
      <>
        {/* Render a button with INPUT as the label */}
        <Button style={{ width: 120, borderRadius: 0 }}>
          <NavLink to="/JAWAD_Assignment_ROUND3/input">INPUT</NavLink>{" "}
        </Button>
      </>
    ),
  },
  {
    key: 1,
    label: (
      <>
        {/* Render a button with OUTPUT as the label */}
        <Button style={{ width: 120, borderRadius: 0 }}>
          <NavLink to="/JAWAD_Assignment_ROUND3/output">OUTPUT</NavLink>{" "}
        </Button>
      </>
    ),
  },
];

/**
 * Header component to be displayed on the page.
 * @returns {JSX.Element} React component to be rendered.
 */
function Headers() {
  /**
   * Hook to navigate to different routes.
   */
  const nevigate = useNavigate();

  /**
   * Array of items to be displayed in the dropdown.
   * @type {object[]}
   */
  const items = [
    {
      key: "1",
      label: (
        <div
          style={{
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Render the avatar for the user */}
          <Avatar size="large" icon={<UserOutlined />} />
          {/* Render the user's name */}
          <Title level={3} style={{ marginBottom: "5px" }}>
            John Williams
          </Title>
          {/* Render the user's email */}
          <Title level={5} style={{ marginTop: "5px", color: "grey" }}>
            john.williams@exmaple.com
          </Title>
          {/* Render the sign out button */}
          <Button onClick={() => nevigate("/JAWAD_Assignment_ROUND3")}>Sign Out</Button>
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          backgroundColor: "#fff",
        }}
      >
        <div
          style={{
            float: "left",
            width: 120,
            height: 31,
            margin: "16px 24px 16px 0",
            backgroundImage: `url(${process.env.PUBLIC_URL}/image/logo.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        />
        <div
          style={{
            float: "right",
            width: 120,
            height: 31,
            margin: "0px 0px 16px 0",
            background: "rgba(255, 255, 255, 0.2)",
          }}
        >
          {" "}
          <Dropdown menu={{ items }} trigger={["click"]}>
            <Avatar
              onClick={(e) => e.preventDefault()}
              size="large"
              icon={<UserOutlined />}
            />
          </Dropdown>
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{
            display: "flex",
            justifyContent: "center",
            paddingInline: 0,
          }}
          items={buttons}
        />
      </Header>
    </Layout>
  );
}

export default Headers;
