import React from 'react'

export default function info(props) {
  return (
    <div className= "container rounded Border: 30px" style={{color: props.mode==='dark'?'white':'white' , backgroundColor:props.mode==='dark'?'red':'black'}}>
        <h6  className="text-center">
        </h6>

    </div>
  )
}
