import React from "react";
import { Row, Col, Avatar } from "antd";
import Subnavbar from "../../components/Layouts/Subnavbar";
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import RightSiteNewspage from "./RightSiteNewspage";
import { Link } from "react-router-dom";
import NewsData from "../data/NewsData";

const Newspage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Subnavbar />
      <div className="banner-news">
        <Row gutter={[12, 0]} className="newsPage-container ">
          <Col style={{ paddingLeft: "0px" }} span={12}>
            <img
              style={{ maxWidth: "100%" }}
              src="/img/news.png"
              alt="news-img"
            />
          </Col>
          <Col span={12}>
            <Row gutter={[12, 0]}>
              <Col span={12}>
                <Row gutter={[12, 12]}>
                  <Col span={24}>
                    <img
                      style={{ maxWidth: "100%" }}
                      src="/img/news.png"
                      alt="news-image"
                    />
                  </Col>
                  <Col span={24}>
                    <img
                      style={{ maxWidth: "100%" }}
                      src="/img/news.png"
                      alt="news-image"
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Row gutter={[12, 12]}>
                  <Col span={24}>
                    <img style={{ maxWidth: "100%" }} src="/img/news.png" />
                  </Col>
                  <Col span={24}>
                    <img style={{ maxWidth: "100%" }} src="/img/news.png" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      {/* Menu news */}

      <Row gutter={[32, 0]} className="newsPage-container padding-menu-news ">
        <Col
          className="padding-menu-news "
          // style={{ paddingLeft: "0px" }}
          md={24}
          lg={16}
        >
          <Row gutter={[16, 16]}>
            {NewsData.news.map((res, index) => {
              return (
                <Col className="news-col" lg={12} md={12} key={index}>
                  <Link to={"/news/" + res._id}>
                    <img
                      className="image-news-style"
                      src={res.img}
                      alt="news image"
                    />
                    <h1 className="title-news">{res.titile}</h1>
                    <div style={{ display: "flex" }}>
                      <Avatar size="small" src={res.avatar} />
                      <span style={{ paddingLeft: "15px" }}>{res.date}</span>
                    </div>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col md={24} lg={8}>
          <RightSiteNewspage />
        </Col>
      </Row>
      <Footer />
    </React.Fragment>
  );
};

export default Newspage;
