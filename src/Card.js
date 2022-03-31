import React from 'react'

export const Card = ({item}) => {
  return (
    <div className='containar-fluid'>
        <div className='row'>
            {
                item.map((val)=>{
                    return (
                        <div className='col-md-4 card my-1' key={val.id}>
                            <div className='card-img'>
                                <img src={val.img}/>
                            </div>
                            <div className='card-body'>
                                <div className='card-title'>
                                    {val.title} &nbsp;&nbsp;&nbsp;&nbsp;
                                    {val.price}
                                </div>
                                <div className='card-text'>
                                    {val.desc}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
