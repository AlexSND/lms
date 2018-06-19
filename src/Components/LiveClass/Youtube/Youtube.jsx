import React, { Component } from 'react'
import YoutubeItem from './YoutubeItem'

import './Youtube.css'

const API_KEY = 'AIzaSyA9iHrfB3xtrnwPx13kaz2rMwvpiQmNYw8'
const CHANNEL_ID = 'UCt6DabGbxO4vA7Q9-wREWcQ'
const RESULTS = '25'

const REQUEST_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${RESULTS}`

class Youtube extends Component {
    constructor() {
        super()
        this.state = {
            resultData: [],
            count: 0
        }
        this.prevVideo = this.prevVideo.bind(this)
        this.nextVideo = this.nextVideo.bind(this)
    }

    componentWillMount() {
        fetch(REQUEST_URL)
        .then(responce => responce.json())
        .then(responceJson =>
            responceJson.items.map(item => item.id.videoId))
        .then(resultData => this.setState({
            resultData
        }))
        .catch(error => console.error(error))
    }

    prevVideo = function() {
        this.state.count > 0
        ? this.setState({
            count: this.state.count - 1
            })
        : this.setState({
            count: this.state.resultData.length - 1
            })
    }

    nextVideo = function() {
        this.state.count < this.state.resultData.length - 1
        ? this.setState({
            count: this.state.count + 1
            })
        : this.setState({
            count: 0
            })
    }

    render() {
        console.log(REQUEST_URL)
        const youtubeitem = this.state.resultData[this.state.count]
        return (
            <div className="live-class__slider">
                <div className="live-class__video-wrapper">
                    <YoutubeItem
                        key={youtubeitem}
                        videoId={youtubeitem}
                    />
                </div>
                <div className="live-class__slider-nav">
                <div className="live-class__slider-counter">
                    {this.state.count + 1}/{this.state.resultData.length}
                </div>
                    <button
                        className="live-class__slider-nav-arrow live-class__slider-nav-arrow_left"
                        onClick={this.prevVideo}
                    ></button>
                    <button
                        className="live-class__slider-nav-arrow live-class__slider-nav-arrow_right"
                        onClick={this.nextVideo}
                    ></button>
                </div>
            </div>
        )
    }
}

export default Youtube