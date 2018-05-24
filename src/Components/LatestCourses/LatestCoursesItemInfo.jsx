import React from 'react'

import './LatestCoursesItemInfo.css'

const LatestCoursesItemInfo = (props) => {
    return (
        <div className="latest-courses-item__info">
            <div className="latest-courses-item__category">
                {props.category}
            </div>
            <div className="latest-courses-item__price">
                {props.price}
            </div>
            <div className="latest-courses-item__rating">
                {props.rating}
            </div>
        </div>
    )
}

export default LatestCoursesItemInfo