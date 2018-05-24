import React from 'react'

const KeyPoinList = (props) => {
    const keypoinsItems = props.keypointsData.map(item => {
        const itemTextCut = item.text.length > 100 ? item.text.slice(0, 100) + '...' : item.text
        return (
            <li key={item.id} className="key-point-item">
                <div className="key-point-item__img">
                    <img src={process.env.PUBLIC_URL + item.img} alt="keypoint"/>
                </div>
                <div className="key-point-item__info">
                    <h3 className="key-point-item__title">
                        {item.title}
                    </h3>
                    <p className="key-point-item__description">
                        {itemTextCut}
                    </p>
                </div>
            </li>
        )
    })
    return (
        <ul className="key-point__list">
            {keypoinsItems}
        </ul>
    )
}

export default KeyPoinList