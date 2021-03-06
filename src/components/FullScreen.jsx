import React from 'react'

function FullScreen({handle}) {
    return (
        <h3 onClick={handle.enter} className="button__get-back">
        Full Screen
      </h3>
    )
}

export default FullScreen
