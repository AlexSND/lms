import React from 'react'

import './LatestCoursesItem.css'

import LinkButton from '../LinkButton/LinkButton'
import LatestCoursesItemInfo from './LatestCoursesItemInfo'
import Rating from './Rating/Rating';

const LatestCoursesItem = (props) => {
    const {rating} = props.latestCoursesData
    return (
        <li className="latest-courses-item">
            <img src={process.env.PUBLIC_URL + props.latestCoursesData.img} className="latest-courses-item__img" alt="course"/>

            <LatestCoursesItemInfo
                category={props.latestCoursesData.category}
                rating={props.latestCoursesData.rating}
                price={props.latestCoursesData.price}
            />

            <Rating rating={rating}/>

            <h3 className="latest-courses-item__title">
                {props.latestCoursesData.title}
            </h3>
            <p className="latest-courses-item__description">
                {props.latestCoursesData.description}
            </p>

            <LinkButton text='Apply now' />
        </li>
    )
}

export default LatestCoursesItem