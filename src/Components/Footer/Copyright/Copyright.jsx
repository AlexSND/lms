import React from 'react'
import './Copyright.css'

const Copyright = () => {
    return (
        <div className="copyright">
            <ul className="copyright__links">
                <li className="copyright__item">
                    <a href="" className="copyright__link">
                        <img src={`${process.env.PUBLIC_URL}/img/footer-team.svg`} alt="team" className="copyright__link-img"/>
                        Team
                    </a>
                </li>
                <li className="copyright__item">
                    <a href="" className="copyright__link">
                        <img src={`${process.env.PUBLIC_URL}/img/footer-join.svg`} alt="" className="copyright__link-img"/>
                        Join Us
                    </a>
                </li>
                <li className="copyright__item">
                    <a href="" className="copyright__link">
                        <img src={`${process.env.PUBLIC_URL}/img/footer-invite.svg`} alt="" className="copyright__link-img"/>
                        Invite Us
                    </a>
                </li>
            </ul>
            <div className="copyright__text">
                Copyright &copy; 2017 LMS EDUCATION. All Rights Reserved
            </div>
        </div>
    )
}

export default Copyright