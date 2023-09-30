
import "./Board.css"

import React, { useState } from 'react'
import { TickBoxes } from './TickBoxes';
export const Board   = ({board,onClick}) => {
    
  return (
    <div >
        
        <div className="board">  
        {board.map((value,id)=>{
            return  <TickBoxes value={value} onClick={()=>value===null && onClick(id)} />
        }
          
        )}
       </div>
    </div>
  )
}


