import React from 'react'

import './LatestCoursesItemInfo.css'

const LatestCoursesItemInfo = (props) => {
    return (
        <div className="latest-courses-item__info">
            <div className="latest-courses-item__category">
                {props.category}
            </div>
            <div className={isNaN(props.price)
                ? "latest-courses-item__price"
                : "latest-courses-item__price latest-courses-item__price_dollar"}>
                {props.price}
            </div>
        </div>
    )
}

export default LatestCoursesItemInfo