import React from 'react'

function ButtonGetBack({history}) {
    const getBack = ()=> {
        history.push('/');
    }
    return (
        <h3 onClick={getBack} className="button__get-back">Get back</h3>
    )
}

export default ButtonGetBack
