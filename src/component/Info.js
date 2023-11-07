import React from 'react'

export default function info(props) {
  return (
    <div className= "container rounded Border: 30px" style={{color: props.mode==='dark'?'white':'white' , backgroundColor:props.mode==='dark'?'red':'black'}}>
        <h6  className="text-center">
            THIS PROJECT IS BASICALLY DESIGNED FOR LEARNING PURPOSE......CREATER~HARIOM SHUKLA

        </h6>

    </div>
  )
}
