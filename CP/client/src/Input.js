import React from 'react'

function Input(props) {
    return (
        <input {...props} className={"bg-rd-lowbright text-rt p-2 border border-rd-brighter rounded-md block " + props.className} />
    )
}

export default Input