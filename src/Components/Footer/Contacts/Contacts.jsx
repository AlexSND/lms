import React from 'react'
import './Contacts.css'
import Adress from './Adress/Adress'
import QuickLinks from './QuickLinks/QuickLinks'

const Contacts = () => {
    return (
        <div className="page-footer__contacts">
            <div className="page-footer__adress">
                <Adress />
            </div>
            <div className="page-footer__quicklinks">
                <QuickLinks />
            </div>
            <div className="page-footer__map">
                <img src={process.env.PUBLIC_URL + '/img/footer-map.png'} alt=""/>
            </div>
        </div>
    )
}

export default Contacts