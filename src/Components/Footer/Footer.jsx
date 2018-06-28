import React from 'react'
import './Footer.css'

import NewsletterForm from './NewsletterForm/NewsletterForm'
import SocialLinks from './SocialLinks/SocialLinks'
import Contacts from './Contacts/Contacts'
import Copyright from './Copyright/Copyright'

const Footer = (props) => {
    return (
        <footer className="page-footer">
            <div className="main-wrapper">
                <div className="page-footer__form">
                    <NewsletterForm />
                </div>
                
                <div className="page-footer__social-links">
                    <SocialLinks socialLinksData={props.socialLinksData}/>
                </div>
                <Contacts />
                <Copyright />
            </div>
        </footer>
    )
}

export default Footer