import React from 'react'
import './QuickLinks.css'

const QuickLinks = () => {
    return (
        <div className="quicklinks">
            <div className="quicklinks__title">
                Quick Links:
            </div>
            <ul className="quicklinks__list">
                <li className="quicklinks__item">
                    <a href="#" className="quicklinks__link">
                        Calendar
                    </a>
                </li>
                <li className="quicklinks__item">
                    <a href="#" className="quicklinks__link">
                        Maps &amp; Directions
                    </a>
                </li>
                <li className="quicklinks__item">
                    <a href="#" className="quicklinks__link">
                        Our News
                    </a>
                </li>
                <li className="quicklinks__item">
                    <a href="#" className="quicklinks__link">
                        University Courses
                    </a>
                </li>
                <li className="quicklinks__item">
                    <a href="#" className="quicklinks__link">
                        Contact us
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default QuickLinks