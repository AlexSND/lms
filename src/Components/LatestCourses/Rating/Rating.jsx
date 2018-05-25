import React, { Component } from 'react'

import './Rating.css'

import starsFull from './img/full-stars.svg'
import starsEmpty from './img/empty-stars.svg'

class Rating extends Component {
    constructor(props) {
        super(props)
        this.state = {
            starsWidth: ''
        }
    }

    componentDidMount() {
        const starsWidth = this.props.rating <= 5 ?
            this.props.rating * 100 / 5 :
            100
        this.setState({
            starsWidth
        })
    }

    render() {        
        return (
            <div className="stars-rating__wrapper">
                <div className="stars-rating">
                    <div className="stars-rating__full" style={ {width: `${this.state.starsWidth}%`} }>
                        <img src={starsFull} alt="rating"/>
                    </div>
                    <div className="stars-rating__empty">
                        <img src={starsEmpty} alt="rating"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Rating