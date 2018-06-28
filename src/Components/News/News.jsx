import React from 'react'
import './News.css'

import NewsList from './NewsList'

const News = (props) => {
    return (
        <section className="news main-wrapper" id="news">
            <h2 className="news__title">
                News Portal
            </h2>
            <NewsList newsData={props.newsData}/>
        </section>
    )
}

export default News