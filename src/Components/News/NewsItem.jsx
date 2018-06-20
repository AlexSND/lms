import React from 'react'

const NewsItem = (props) => {
    return (
        <article className="news__item">
            <img className="news__img" src={process.env.PUBLIC_URL + props.newsData.img} alt="news"/>
            <span className="news__date">
                {props.newsData.date}
            </span>
            <p className="news__text">
                {props.newsData.text}
            </p>
            <a href="" className="news__link">
                Read More
            </a>
        </article>
    )
}

export default NewsItem