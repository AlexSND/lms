import React from 'react'

import AdvantageItem from './AdvantageItem'

const AdvantageList = (props) => {
    const advantageItems = props.advantageData.map(item => {
        return (
            <AdvantageItem advantageData={item} key={item.id}/>
        )
    })
    return (
        <ul className="advantage-list">
            {advantageItems}
        </ul>
    )
}

export default AdvantageList