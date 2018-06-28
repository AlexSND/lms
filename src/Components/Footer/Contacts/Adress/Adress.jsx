import React from 'react'
import './Adress.css'

const Adress = () => {
    return (
        <div className="adress">
            <div className="adress__title">
                Adress:
            </div>
            <ul className="adress__list">
                <li className="adress__item">73724 Route 30</li>
                <li className="adress__item">South Richmond Hill, NY 11419 </li>
                <div className="adress__separator"></div>
                <li className="adress__item">
                    <span>Tel: </span>
                    <a className="adress__link" href="tel:(603)-677-3400">
                        (603)-677-3400
                    </a>
                </li>
                <li className="adress__item">
                    <span>Email: </span>
                    <a className="adress__link" href="mailto:info@yourdomain.com">
                        info@yourdomain.com
                    </a>
                </li>
                <li className="adress__item">
                    <span>Web: </span>
                    <a className="adress__link" href="yourdomain.com">
                        yourdomain.com
                    </a>
                </li>
            </ul>
        </div>  
    )
}

export default Adress