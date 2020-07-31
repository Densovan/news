import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Tag, List } from 'antd'
import JobData from '../data/JobData';

const RightSiteJob = () => {
    return (
        <div>
            {
                JobData.job.map((res, index) => {
                    return (
                        <div style={{ display: "flex" }}>
                            <Link to={"/jobs/" + res._id}>
                                <div style={{ marginBottom: "90px" }}>
                                    <Avatar shape="square" size={100} src={res.img} />
                                </div>
                            </Link>
                            <Link to={"/jobs/" + res._id}>
                                <div style={{ display: " flex", paddingLeft: "40px" }}>
                                    <div>
                                        <h3 style={{ marginBottom: "-8px" }}>{res.job}</h3>
                                        <span >{res.location}</span>
                                        <br></br>
                                        <span>{res.salary}</span>
                                        <br></br>
                                        <span>{res.Schedule}</span>
                                    </div>
                                    <div style={{ paddingLeft: "400px" }}>
                                        <Tag color="default">featured</Tag>
                                        <br></br>
                                        <br></br>
                                        <span>{res.date}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
            {/* <List
                itemLayout="horizontal"
                dataSource={JobData.job}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta avatar={<Avatar shape="square" size={100} src={item.img} />}
                            title={item.job}
                            description={item.location}
                        // h1={item.salary}
                        >
                            he
                        </List.Item.Meta>

                    </List.Item>
                )}
            >
            </List> */}
        </div >
    )
}

export default RightSiteJob
