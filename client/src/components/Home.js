import React, { useState } from 'react';
import { Row, Col, Divider, Card } from 'antd';
import Navbar from './Layouts/Navbar';
import Subnavbar from './Layouts/Subnavbar';
import RecentPopularStories from './RecentPopularStories';
import Footer from './Layouts/Footer';

const Home = () => {
  const [state, setState] = useState([
    {
      img: '/img/news.png',
      tittle:
        'Europe’s Regulatory Traffic Jam: The Information’s Tech Briefing',
      avatar: '/img/Den.png',
      date: '7/June/2020',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor magna eget elit efficitur, at accumsan sem placerat. Nulla tellus libero, mattis nec molestie at, facilisis ut turpis. Vestibulum dolor metus, tincidunt eget odio',
    },
    {
      img: '/img/news.png',
      tittle:
        'Europe’s Regulatory Traffic Jam: The Information’s Tech Briefing',
      avatar: '/img/Den.png',
      date: '7/June/2020',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor magna eget elit efficitur, at accumsan sem placerat. Nulla tellus libero, mattis nec molestie at, facilisis ut turpis. Vestibulum dolor metus, tincidunt eget odio',
    },
    {
      img: '/img/news.png',
      tittle:
        'Europe’s Regulatory Traffic Jam: The Information’s Tech Briefing',
      avatar: '/img/Den.png',
      date: '7/June/2020',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor magna eget elit efficitur, at accumsan sem placerat. Nulla tellus libero, mattis nec molestie at, facilisis ut turpis. Vestibulum dolor metus, tincidunt eget odio',
    },
    {
      img: '/img/news.png',
      tittle:
        'Europe’s Regulatory Traffic Jam: The Information’s Tech Briefing',
      avatar: '/img/Den.png',
      date: '7/June/2020',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor magna eget elit efficitur, at accumsan sem placerat. Nulla tellus libero, mattis nec molestie at, facilisis ut turpis. Vestibulum dolor metus, tincidunt eget odio',
    },
  ]);
  return (
    <React.Fragment>
      <Navbar />
      <Subnavbar />
      {state.map((res, index) => {
        if (index % 2 === 0) {
          return (
            <div>
              <Row
                gutter={[50, 0]}
                className="container"
                style={{ marginTop: '150px' }}
              >
                <Col xs={24} sm={24} md={24} lg={12}>
                  <div>
                    <Card className="Card">
                      <div
                        className="Card-internal-syle"
                      // style={{ display: 'flex' }}
                      >
                        <img
                          style={{ height: '105px', width: '190px' }}
                          src={res.img}
                        />
                        <div>
                          <h4
                            className="card-title"
                            style={{ paddingLeft: '5px' }}
                          >
                            {res.tittle}
                          </h4>
                          <div
                            style={{ paddingLeft: '5px', marginTop: '12px' }}
                          >
                            <img
                              style={{ height: '20px', borderRadius: '20px' }}
                              src={res.avatar}
                            />
                            <span> Den</span>
                            <span style={{ paddingLeft: '5px' }}>
                              {res.date}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="paragraph-card">{res.paragraph}</p>
                    </Card>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12}>
                  <div style={{ marginTop: '60px' }}>
                    <div>
                      <h1 style={{ textDecoration: 'underline' }}>
                        LATEST ARTICLES
                      </h1>
                      <p className="paragraph1-of-card">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur tempor magna eget elit efficitur, at accumsan
                        sem placerat.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
              <hr className="hr"></hr>
            </div>
          );
        } else {
          return (
            <div>
              <Row
                gutter={[50, 0]}
                className="container"
                style={{ marginTop: '150px' }}
              >
                <Col xs={24} sm={24} md={24} lg={12}>
                  <div style={{ marginTop: '60px' }}>
                    <div>
                      <h1 style={{ textDecoration: 'underline' }}>
                        LATEST ARTICLES
                      </h1>
                      <p className="paragraph1-of-card">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur tempor magna eget elit efficitur, at accumsan
                        sem placerat.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12}>
                  <div>
                    <Card className="Card">
                      <div className="Card-internal-syle">
                        <img
                          style={{ height: '105px', width: '190px' }}
                          src={res.img}
                        />
                        <div>
                          <h4
                            className="card-title"
                            style={{ paddingLeft: '5px' }}
                          >
                            {res.tittle}
                          </h4>
                          <div
                            style={{ paddingLeft: '5px', marginTop: '12px' }}
                          >
                            <img
                              style={{ height: '20px', borderRadius: '20px' }}
                              src={res.avatar}
                            />
                            <span> Den</span>
                            <span style={{ paddingLeft: '5px' }}>
                              {res.date}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="paragraph-card">{res.paragraph}</p>
                    </Card>
                  </div>
                </Col>
              </Row>
              <hr className="hr"></hr>
            </div>
          );
        }
      })}
      <RecentPopularStories />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
