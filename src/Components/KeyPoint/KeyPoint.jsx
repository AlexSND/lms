import React from 'react'

import './KeyPoint.css'

import KeyPointList from './KeyPointList'

const KeyPoint = (props) => {
    return (
        <section className="key-point main-wrapper" id="key-points">
            <h2 className="key-point__title">
                Which OneYou interested?
            </h2>
            <p className="key-point__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing aelit, sed do eiusmod tempor incididunt.
            </p>
            <KeyPointList keypointsData={props.keypointsData}/>
        </section>
        
    )
}

export default KeyPoint