import React from 'react'

const AdvantageItem = (props) => {
    return (
        <li key='item.id' className="advantage-item">
            <div className="advantage-item__img">
                <img src={process.env.PUBLIC_URL + props.advantageData.img} alt="advantage"/>
            </div>
            <div className="advantage-item__body">
                <h3 className="advantage-item__title">
                    {props.advantageData.title}
                </h3>
                <p className="advantage-item__text">
                    {props.advantageData.text}
                </p>
            </div>
        </li>
    )
}

export default AdvantageItem