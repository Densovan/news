import React from 'react';
import { Row, Col } from 'antd';

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <Row gutter={[50, 0]} className="footer-container">
          <Col xs={24} sm={24} md={12} lg={6}>
            <div>
              <h1 style={{ color: '#FFFFFF' }}>Company Logo</h1>
              <p style={{ color: '#FFFFFF' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur tempor magna eget elit efficitur, at accumsan sem
                placerat. Nulla tellus libero, mattis nec molestie at, facilisis
                ut turpis. Vestibulum dolor metus, tincidunt eget odio
              </p>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={6}>
            <h1 style={{ color: '#FFFFFF', fontSize: '19px' }}>Information</h1>
            <span style={{ color: '#716E6E' }}>About us</span>
          </Col>
          <Col xs={24} sm={24} md={12} lg={6}>
            <h1 style={{ color: '#FFFFFF', fontSize: '19px' }}>Help</h1>
          </Col>
          <Col xs={24} sm={24} md={12} lg={6}>
            <h1 style={{ color: '#FFFFFF', fontSize: '19px' }}>
              Social Networks
            </h1>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Footer;
