import React from 'react'

import './HeaderBody.css'

import LinkButton from '../../LinkButton/LinkButton'

const HeaderBody = (props) => {
    return (
        <div className="header-body">
            <div className="main-wrapper">
                <h1 className="header-body__title">
                    Improve Your Skil & Learn Excilence in Teaching
                </h1>
                <span className="header-body__description">
                    Love exciting and new. Come abroad were expecting you. Love life’s sweetest reward Let it flow it floats back to you. 
                </span>
                <LinkButton
                    color='green'
                    text='Apply now'
                    link=''
                />
            </div>
        </div>
    )
}

export default HeaderBody 