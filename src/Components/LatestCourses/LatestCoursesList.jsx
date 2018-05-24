import React from 'react'

import LatestCoursesItem from './LatestCoursesItem'

const LatestCoursesList = (props) => {
    const LatestCoursesItems = props.latestCoursesData.map(item => {
        return (
            <LatestCoursesItem latestCoursesData={item} key={item.id}/>
        )
    })
    return (
        <ul className="latest-courses-list">
            {LatestCoursesItems}
        </ul>
    )
}

export default LatestCoursesList