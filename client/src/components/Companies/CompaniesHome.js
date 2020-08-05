import React from "react";
import Navbar from "../Layouts/Navbar";
import SubNavbar from "../Layouts/Subnavbar";
import { Link } from "react-router-dom";
import { Breadcrumb, Avatar } from "antd";
import Footer from "../Layouts/Footer";
import CompanyData from "../data/CompanyData";
import {
  DollarCircleTwoTone,
  DollarOutlined,
  CalendarOutlined,
  AimOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const CompaniesHome = () => {
  return (
    <React.Fragment>
      <Navbar />
      <SubNavbar />
      <div className="container-company">
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Gategory</Breadcrumb.Item>
          <Breadcrumb.Item>Companies</Breadcrumb.Item>
        </Breadcrumb>

        <div>
          {CompanyData.company.map((res, index) => {
            return (
              <div>
                <div
                  className="display-company-home"
                  //   style={{ display: "flex", marginTop: "60px" }}
                >
                  <Link to={"/companies/" + res._id}>
                    <div
                      className="display-company-home-img"
                      style={{ marginBottom: "60px" }}
                    >
                      <Avatar shape="square" size={150} src={res.img} />
                    </div>
                  </Link>
                  <Link to={"/companies/" + res._id}>
                    <div
                      className="righ-site-company-style"
                      //   style={{ display: " flex", paddingLeft: "12px" }}
                    >
                      <div>
                        <h1
                          style={{ marginBottom: "-5px", marginTop: "-14px" }}
                        >
                          {res.companyName}
                        </h1>
                        <span>
                          <AimOutlined style={{ paddingRight: "3px" }} />
                          {res.location}
                        </span>
                        <br></br>
                        <span style={{ paddingLeft: "3px" }}>{res.type}</span>
                        <br></br>
                        <span>
                          <TeamOutlined style={{ paddingRight: "3px" }} />
                          {res.emp}
                        </span>
                        <br></br>
                        <br></br>
                        <span style={{ color: "rgba(0, 0, 0, 0.6)" }}>
                          {res.des}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
                <hr
                  style={{ border: "1px solid rgba(196, 196, 196, 0.5)" }}
                ></hr>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default CompaniesHome;
