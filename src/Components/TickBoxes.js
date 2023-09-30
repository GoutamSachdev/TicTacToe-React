import React from 'react'
import './TickBoxes.css'

export const TickBoxes = ({value,onClick}) => {
  const style= value==="X"?"box x": "box o"
  return (
    <div>
      <button className={style} onClick={onClick}>{value}
        
      </button>
    </div>
  )
}

