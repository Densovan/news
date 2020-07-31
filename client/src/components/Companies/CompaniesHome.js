import React from 'react'
import Navbar from '../Layouts/Navbar';
import SubNavbar from '../Layouts/Subnavbar'
import { Link } from 'react-router-dom'
import { Breadcrumb, Avatar } from 'antd'
import Footer from '../Layouts/Footer';
import CompanyData from '../data/CompanyData';

const CompaniesHome = () => {
    return (
        <React.Fragment>
            <Navbar />
            <SubNavbar />
            <div className="container-company">
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Gategory</Breadcrumb.Item>
                    <Breadcrumb.Item>Companies</Breadcrumb.Item>
                </Breadcrumb>

                <div>
                    {CompanyData.company.map((res, index) => {
                        return (
                            <div>
                                <div style={{ display: "flex", marginTop: "60px" }}>
                                    <Link to={"/companies/" + res._id}>
                                        <div style={{ marginBottom: "60px" }}>
                                            <Avatar shape="square" size={150} src={res.img} />
                                        </div>
                                    </Link>
                                    <Link to={"/companies/" + res._id}>
                                        <div style={{ display: " flex", paddingLeft: "12px" }}>
                                            <div>
                                                <h1>{res.companyName}</h1>
                                                <h3 style={{ marginBottom: "-8px" }}>{res.location}</h3>
                                                <span >{res.type}</span>
                                                <br></br>
                                                <span>{res.emp}</span>
                                                <br></br>
                                                <span>{res.des}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <hr style={{ border: "1px solid rgba(196, 196, 196, 0.5)" }}></hr>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default CompaniesHome
