import React ,{useState} from 'react';
import { Card } from './Card';
import Data from './Data';
import { Buttons } from './Buttons';

export const FilterFood = () => {
    const [item, setItem] = useState(Data)

    const menuItems = [...new Set(Data.map((val)=>val.category))];
    console.log("meni", menuItems)

    const filterItem = (cate) =>{
        const newItems = Data.filter((val, i) =>{
            return val.category === cate;
        })
        setItem(newItems)
    }
  
  return (
    <div className='container-fluid'>
        <div className='row'>
            <h1 className='col-md-12'>Our menu</h1>
            <Buttons setItem={setItem} menuItems={menuItems} filterItem={filterItem}/>
            <Card item={item}/>
        </div>
    </div>
  )
}
