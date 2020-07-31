import React from 'react'
import { Row, Col, Avatar } from 'antd'
import Subnavbar from '../../components/Layouts/Subnavbar'
import Navbar from '../../components/Layouts/Navbar'
import Footer from '../../components/Layouts/Footer'
import RightSiteNewspage from './RightSiteNewspage'
import { Link } from 'react-router-dom'
import NewsData from '../data/NewsData'



const Newspage = () => {


    // const [state, setState] = useState([
    //     {
    //         id: 1,
    //         img: " /img/news.png",
    //         titile: " Sequoia secures $1.4b for two new fundsin India Southeast Asia",
    //         avatar: "/img/Den.png",
    //         date: "7/20/2020"
    //     },
    //     {
    //         id: 2,
    //         img: " /img/news.png",
    //         titile: " Sequoia secures $1.4b for two new fundsin India Southeast Asia",
    //         avatar: "/img/Den.png",
    //         date: "7/20/2020"
    //     },
    //     {
    //         id: 3,
    //         img: " /img/news.png",
    //         titile: " Sequoia secures $1.4b for two new fundsin India Southeast Asia",
    //         avatar: "/img/Den.png",
    //         date: "7/20/2020"
    //     },
    //     {
    //         id: 4,
    //         img: " /img/news.png",
    //         titile: " Sequoia secures $1.4b for two new fundsin India Southeast Asia",
    //         avatar: "/img/Den.png",
    //         date: "7/20/2020"
    //     },
    //     {
    //         id: 5,
    //         img: " /img/news.png",
    //         titile: " Sequoia secures $1.4b for two new fundsin India Southeast Asia",
    //         avatar: "/img/Den.png",
    //         date: "7/20/2020"
    //     },
    //     {
    //         id: 6,
    //         img: " /img/news.png",
    //         titile: " Sequoia secures $1.4b for two new fundsin India Southeast Asia",
    //         avatar: "/img/Den.png",
    //         date: "7/20/2020"
    //     },
    // ])
    return (
        <React.Fragment>
            <Navbar />
            <Subnavbar />
            <Row gutter={[12, 0]} className="newsPage-container ">
                <Col style={{ paddingLeft: "0px" }} span={12}>
                    <img style={{ maxWidth: "100%" }} src="/img/news.png" />
                </Col>
                <Col span={12}>
                    <Row gutter={[12, 0]}>
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

            {/* Menu news */}

            <Row gutter={[60, 0]} className="newsPage-container ">
                <Col style={{ paddingLeft: "0px" }} lg={16}>
                    <Row gutter={[16, 16]} type="flex" >
                        {NewsData.news.map((res, index) => {
                            return (
                                <Col lg={12} md={12} key={index}>
                                    <Link to={"/news/" + res._id}>
                                        <img style={{ maxWidth: "100%" }} src={res.img} />
                                        <h1 className="title-news">{res.titile}</h1>
                                        <div style={{ display: "flex" }}>
                                            <Avatar size="small" src={res.avatar} />
                                            <span style={{ paddingLeft: "15px" }}>{res.date}</span>
                                        </div>
                                    </Link>
                                </Col>
                            )
                        })}
                    </Row>
                </Col>
                <Col span={8}>
                    <RightSiteNewspage />
                </Col>
            </Row>
            <Footer />
        </React.Fragment >
    )
}

export default Newspage
