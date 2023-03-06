/* eslint-disable react/jsx-pascal-case */
import React, { useEffect } from "react";
import { Typography, Row, Col } from "antd";
import Histogram_Chart from "../Histogram/Histogram";
import Pies from "../Pie/Histogram";
import { useDispatch, useSelector } from "react-redux";
import { fetchInfo, showList } from "../../features/InfoSlice";
import { fetchsales, showSales } from "../../features/SalesSlice";

/**
 * A functional component that displays the personal information of the user
 * @returns {JSX.Element} A react component
 */
function UserInfo() {
  const dispatch = useDispatch();
  const user_id = JSON.parse(localStorage.getItem("user"));
  const { Info } = useSelector(showList);
  const { sales, status } = useSelector(showSales);
  useEffect(() => {
    if (Info.length <= 0) {
      console.log('abc')
      dispatch(fetchInfo(user_id));
    }
  }, [Info.length, dispatch, user_id]);
  useEffect(() => {
    if (sales.length <= 0) {
      dispatch(fetchsales());
    }
  }, [dispatch, sales.length]);

  console.log(sales);
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
                {Info.username}
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
                {Info.email}
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
                {Info.gender}
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
                {Info.country}
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
                {Info.age}
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
                {Info.city}
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
          <Col xs={24} lg={11} style={{ paddingBlock: "15px" }}>
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
              <Histogram_Chart data={sales.length >= 0 ? sales : [{}]} />
            </Col>
          </Col>
          <Col xs={24} lg={11} style={{ paddingBlock: "15px" }}>
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
              <Pies data={sales.length >= 0 ? sales : [{}]} />
            </Col>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default UserInfo;
