import React from 'react'

import './Advantage.css'

import AdvantageList from './AdvantageList.jsx'

const Advantage = (props) => {
    return (
        <section className="advantage" id="advantage">
            <div className="main-wrapper">
                <h2 className="advantage__title">
                    Why Choose Us?
                </h2>
                <div className="advantage__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <AdvantageList advantageData={props.advantageData}/>
            </div>
        </section>
    )
}

export default Advantage