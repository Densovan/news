import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Tag, List } from 'antd';
import JobData from '../data/JobData';
import {
  DollarCircleTwoTone,
  DollarOutlined,
  CalendarOutlined,
  AimOutlined,
} from '@ant-design/icons';

const RightSiteJob = () => {
  return (
    <div>
      {JobData.job.map((res, index) => {
        return (
          <div>
            <div style={{ display: 'flex' }}>
              <Link to={'/jobs/' + res._id}>
                <div style={{ marginBottom: '27px' }}>
                  <Avatar shape="square" size={100} src={res.img} />
                </div>
              </Link>
              <Link to={'/jobs/' + res._id}>
                <div style={{ display: ' flex', paddingLeft: '20px' }}>
                  <div>
                    <h3>{res.job}</h3>
                    <span>
                      <AimOutlined style={{ paddingRight: '3px' }} />
                      {res.location}
                    </span>
                    <br></br>
                    <span>
                      <DollarOutlined style={{ paddingRight: '3px' }} />
                      {res.salary}
                    </span>
                    <br></br>
                    <span>
                      <CalendarOutlined style={{ paddingRight: '3px' }} />
                      {res.Schedule}
                    </span>
                  </div>
                  <div
                    className="rigth-site-job"
                    // style={{ paddingLeft: "400px" }}
                  >
                    <Tag color="default">featured</Tag>
                    <br></br>
                    <br></br>
                    <span>{res.date}</span>
                  </div>
                </div>
              </Link>
            </div>
            <hr style={{ border: '1px solid rgba(196, 196, 196, 0.5)' }}></hr>
          </div>
        );
      })}
    </div>
  );
};

export default RightSiteJob;
