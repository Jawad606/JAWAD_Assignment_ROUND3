import React, { useEffect, useState } from "react";
import "./Header.css";
import { Layout, Menu } from "antd";
import { Avatar, Button, Drawer, Typography } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserOutlined, MenuOutlined } from "@ant-design/icons";
import { fetchInfo, showList } from "../features/InfoSlice";
import { logout } from "../features/Signin";
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
  const dispatch = useDispatch();

  const user_id = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    dispatch(fetchInfo(user_id));
  }, [dispatch, user_id]);
  const { Info } = useSelector(showList);
  const nevigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  const handleSign = () => {
    dispatch(logout())
      .then((res) => {
        console.log(res);
        nevigate("/JAWAD_Assignment_ROUND3");
        localStorage.clear();
      })
      .catch((err) => console.log(err));
  };
  const RightMenu = ({ mode }) => {
    return (
      <Menu mode={mode}>
        <Menu.SubMenu
          title={
            <>
              <Avatar icon={<UserOutlined />} />
              <span className="username">
                {" "}
                {Info.map((item) => item.username)}
              </span>
            </>
          }
        >
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
              {Info.map((item) => item.username)}
            </Title>
            {/* Render the user's email */}
            <Title level={5} style={{ marginTop: "5px", color: "grey" }}>
              {Info.map((item) => item.email)}
            </Title>
            {/* Render the sign out button */}
            <Button onClick={() => handleSign()}>Sign Out</Button>
          </div>
        </Menu.SubMenu>
      </Menu>
    );
  };
  const LeftMenu = ({ mode }) => {
    return (
      <Menu
        mode={mode}
        theme="light"
        defaultSelectedKeys={["2"]}
        style={{
          display: "flex",
          justifyContent: "center",
          paddingInline: 0,
        }}
        items={buttons}
      />
    );
  };

  /**
   * Array of items to be displayed in the dropdown.
   * @type {object[]}
   */

  return (
    <nav className="navbar">
      <Layout>
        <Header
          className="nav-header"
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            backgroundColor: "#fff",
          }}
        >
          <div className="navbar-menu">
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
            <div className="leftMenu">
              <LeftMenu mode={"horizontal"} />
            </div>
            <Button className="menuButton" type="text" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
            <div className="rightMenu">
              <RightMenu mode={"horizontal"} />
            </div>

            <Drawer
              title={"Brand Here"}
              placement="right"
              closable={true}
              onClose={showDrawer}
              visible={visible}
              style={{ zIndex: 99999 }}
            >
              <LeftMenu mode={"inline"} />
              <RightMenu mode={"inline"} />
            </Drawer>
          </div>
        </Header>
      </Layout>
    </nav>
  );
}

export default Headers;
