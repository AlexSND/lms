import React from 'react'

import './LatestCourses.css'

import LatestCoursesList from './LatestCoursesList'

const LatestCourses = (props) => {
    return (
        <section className="latest-courses" id="latest-courses">
            <div className="main-wrapper">
                <h2 className="latest-courses__title">
                    Latest Courses
                </h2>
                <p className="latest-courses__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing aelit, sed do eiusmod tempor incididunt.
                </p>
                <LatestCoursesList latestCoursesData={props.latestCoursesData}/>
            </div>
        </section>
    )
}

export default LatestCourses