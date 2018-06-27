import React from 'react'
import './SocialLinks.css'

const SocialLinks = (props) => {
    const socialLinksItems = props.socialLinksData.map(item => {
        return (
            <li className="social-links__item" key={item.id}>
                <a className="social-links__link" href={item.link}>
                    <img className="social-links__img" src={process.env.PUBLIC_URL + item.icon} alt={item.link}/>
                </a>
            </li>
        )
    })
    return (
        <ul className="social-links">
            {socialLinksItems}
        </ul>
    )
}

export default SocialLinks