import React, { useState } from "react";
import { Row, Col } from "antd";
import { ConfigContext } from "antd/lib/config-provider";

const RecentPopularStories = () => {
  const [popular, setPopular] = useState([
    {
      img: "/img/news.png",
      title: "Sequoia secures $1.4b for two new fundsin India, Southeast Asia",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor magna eget elit efficitur, at accumsan sem placerat. Nulla tellus libero",
      avatar: "/img/Den.png",
      date: "7/29/2020",
    },
    {
      img: "/img/news.png",
      title: "Sequoia secures $1.4b for two new fundsin India, Southeast Asia",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor magna eget elit efficitur, at accumsan sem placerat. Nulla tellus libero",
      avatar: "/img/Den.png",
      date: "7/29/2020",
    },
    {
      img: "/img/news.png",
      title: "Sequoia secures $1.4b for two new fundsin India, Southeast Asia",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor magna eget elit efficitur, at accumsan sem placerat. Nulla tellus libero",
      avatar: "/img/Den.png",
      date: "7/29/2020",
    },
    {
      img: "/img/news.png",
      title: "Sequoia secures $1.4b for two new fundsin India, Southeast Asia",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor magna eget elit efficitur, at accumsan sem placerat. Nulla tellus libero",
      avatar: "/img/Den.png",
      date: "7/29/2020",
    },
  ]);
  return (
    <React.Fragment>
      <div className="container-popular-news">
        <center className="popular-main-title">
          <h1>Recent Popular Stories</h1>
        </center>
        <div style={{ marginTop: "45px" }}>
          {popular.map((res) => {
            return (
              <div className="popular">
                <div>
                  <img className="image-popular" src={res.img} />
                </div>
                <div>
                  <h1 className="popular-title">{res.title}</h1>
                  <p className="popular-text">{res.text}</p>
                  <div className="popular-user-date">
                    <img className="avatar-popular" src={res.avatar} />
                    <span style={{ paddingLeft: "15px" }}>{res.date}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* {popular.map((res, index) => {
          return (
            <Row gutter={[0, 16]}>
              <Col md={24} lg={10}>
                <img className="image-popular" src={res.img} />
              </Col>
              <Col md={24} lg={14}>
                <div>
                  <h1 className="popular-title">{res.title}</h1>
                  <p className="popular-text">{res.text}</p>
                  <div className="popular-user-date">
                    <img className="avatar-popular" src={res.avatar} />
                    <span style={{ paddingLeft: "15px" }}>{res.date}</span>
                  </div>
                </div>
              </Col>
            </Row>
          );
        })} */}
      </div>
    </React.Fragment>
  );
};

export default RecentPopularStories;
