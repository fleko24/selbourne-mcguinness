import React from 'react'

const VideoPlayer = ({src, title, width, height}) => {
  return (
    <div className='video-container'>
        <iframe 
            src={src}
            title={title}
            width={width} 
            height={height} 
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture" allowFullScreen>    
        </iframe>
    </div>
  )
}

export default VideoPlayer