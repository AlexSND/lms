import React from 'react'
import './NewsletterForm.css'

const NewsletterForm = () => {
    return (
        <div className="newsletter-form">
            <div className="newsletter-form__left-col">
                <span className="newsletter-form__text">
                    Sign up for our newsletter
                </span>
            </div>
            <div className="newsletter-form__right-col">
                <form className="newsletter-form__form" action="">
                    <input className="newsletter-form__input" type="text" placeholder="Enter your email"/>
                    <button className="newsletter-form__button">
                        Submit now
                    </button>
                </form>
            </div>
        </div>
    )
}

export default NewsletterForm