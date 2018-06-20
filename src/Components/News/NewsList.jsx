import React from 'react'
import NewsItem from './NewsItem'
import LinkButton from '../LinkButton/LinkButton'

const NewsList = (props) => {
    const newsItems = props.newsData.map(item => 
        <NewsItem key={item.id} newsData={item}/>
    )
    return (
        <div>
            <div className="news__list">
                {newsItems}
            </div>
            <LinkButton text="view all posts"/>
        </div>
    )
}

export default NewsList