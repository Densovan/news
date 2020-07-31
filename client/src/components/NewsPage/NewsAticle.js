import React, { useState } from 'react'
import NewsData from '../data/NewsData'
import Navbar from '../Layouts/Navbar';
import SubNavbar from '../Layouts/Subnavbar'
import Footer from '../Layouts/Footer'


const NewsAticle = (props) => {
    console.log(props.match.params.id)
    const newss = NewsData.news.find(x => x._id == props.match.params.id);
    // console.log(news.date)
    return (
        <React.Fragment>
            <div>
                <Navbar />
                <SubNavbar />
                <div className="container-news-article">
                    <div>
                        <img style={{ maxWidth: "100%" }} src={newss.img} />
                        <div className="title-news-article">
                            <h1 >{newss.titile}</h1>
                        </div>
                    </div>
                    <span style={{ color: "#797878", fontSize: "20px" }}>{newss.des} </span>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default NewsAticle
