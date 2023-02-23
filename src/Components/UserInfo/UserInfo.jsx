/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Typography, Row, Col } from "antd";
import Histogram_Chart from "../Histogram/Histogram";
import Pies from "../Pie/Histogram";

/**
 * A functional component that displays the personal information of the user
 * @returns {JSX.Element} A react component
 */
function UserInfo() {
  const user = JSON.parse(localStorage.getItem("Data"));
  const { Title } = Typography;
  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
        }}
      >
        <Title level={3} style={{ marginTop: 0, marginBottom: 5 }}>
          Personal Information
        </Title>

        <Row
          gutter={[16, 16]}
          style={{
            paddingBlock: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Col
            xs={24}
            lg={11}
            style={{
              borderBottom: "1px solid #c6c6c6",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Title level={5}>Name:</Title>
            </div>
            <div>
              <Title level={5} style={{ color: "grey" }}>
                {user ? user.name : ""}
              </Title>
            </div>
          </Col>
          <Col
            xs={24}
            lg={11}
            style={{
              borderBottom: "1px solid #c6c6c6",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Title level={5}>Email:</Title>
            </div>
            <div>
              <Title level={5} style={{ color: "grey" }}>
                {user ? user.email : ""}
              </Title>
            </div>
          </Col>
        </Row>
        <Row
          gutter={[16, 16]}
          style={{
            paddingBlock: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Col
            xs={24}
            lg={11}
            style={{
              borderBottom: "1px solid #c6c6c6",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Title level={5}>Gender:</Title>
            </div>
            <div>
              <Title level={5} style={{ color: "grey" }}>
                {user ? user.gender : ""}
              </Title>
            </div>
          </Col>
          <Col
            xs={24}
            lg={11}
            style={{
              borderBottom: "1px solid #c6c6c6",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Title level={5}>Country:</Title>
            </div>
            <div>
              <Title level={5} style={{ color: "grey" }}>
                {user ? user.country : ""}
              </Title>
            </div>
          </Col>
        </Row>
        <Row
          gutter={[16, 16]}
          style={{
            paddingBlock: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Col
            xs={24}
            lg={11}
            style={{
              borderBottom: "1px solid #c6c6c6",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Title level={5}>Age:</Title>
            </div>
            <div>
              <Title level={5} style={{ color: "grey" }}>
                {user ? user.age : ""}
              </Title>
            </div>
          </Col>
          <Col
            xs={24}
            lg={11}
            style={{
              borderBottom: "1px solid #c6c6c6",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Title level={5}>City:</Title>
            </div>
            <div>
              <Title level={5} style={{ color: "grey" }}>
                {user ? user.city : ""}
              </Title>
            </div>
          </Col>
        </Row>
        <Row
          gutter={[16, 16]}
          style={{
            paddingBlock: "10px",
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: "10px",
          }}
        >
          <Col xs={24} lg={11} style={{paddingBlock:"15px"}}>
            <Col span={24}>
              {" "}
              <Title level={5}>Top 10: Products</Title>
            </Col>
            <Col
              span={24}
              style={{
                paddingTop: "20px",
                border: "1px solid  rgb(230, 230, 230)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <Histogram_Chart data={user ? user.data : "[]"} />
            </Col>
          </Col>
          <Col xs={24} lg={11} style={{paddingBlock:"15px"}}>
            <Col span={24}>
              {" "}
              <Title level={5}>Top 5: Products</Title>
            </Col>
            <Col
              span={24}
              style={{
                paddingTop: "20px",
                border: "1px solid rgb(230, 230, 230)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <Pies data={user ? user.data : "[]"} />
            </Col>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default UserInfo;
