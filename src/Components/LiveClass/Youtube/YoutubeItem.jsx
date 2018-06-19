import React from 'react'

const YoutubeItem = props => {
    return (
        <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${props.videoId}`}
            frameBorder="0" allow="autoplay; encrypted-media"
            allowFullScreen>
        </iframe>
    )
}

export default YoutubeItem