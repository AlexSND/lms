import React, {Component} from 'react'
import './ScrollProgress.css'

class ScrollProgress extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.scrollProgress);
    }
            
    scrollProgress = function() {
        const windowScroll = document.body.scrollTop || document.documentElement.scrollTop
        const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrolled = (windowScroll / documentHeight) * 100
        document.getElementsByClassName('scroll-progress__bar')[0].style.width = `${scrolled}%`
    }
    render() {
        return (
            <div className="scroll-progress__container">
                <div className="scroll-progress__bar"></div>
            </div>
        )
    }
    
}

export default ScrollProgress