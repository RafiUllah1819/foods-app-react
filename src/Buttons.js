import React from 'react';
import Data from './Data';

export const Buttons = ({setItem, menuItems , filterItem}) => {
    // console.log("line 5" , menuItems)
  return (
    <div className='d-flex justify-content-center'>
           <button className='btn-dark text-white mx-4 my-3 px-2' 
                        onClick={()=>setItem(Data)}>
                            All
                        </button>
        {
                menuItems.map((val, i)=>{
                    return(
                       
                            <button  className='btn-dark text-white mx-4 my-3 px-2' key={i}
                            onClick={()=> filterItem(val)}
                            >
                                {val}
                            </button> 
                    )
                })
        }
                     
    </div>
  )
}
