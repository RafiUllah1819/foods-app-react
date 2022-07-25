import React ,{useState} from 'react';
import { Card } from './Card';
import Data from './Data';
import { Buttons } from './Buttons';

export const FilterFood = () => {
    const [item, setItem] = useState(Data)
    const [searchData, setSearchData] = useState([])
    console.log("searchDatra" , searchData)
 
    const menuItems = [...new Set(Data.map((val)=>val.category))];
    console.log("meni", menuItems)

    const filterItem = (cate) =>{
        const newItems = Data.filter((val, i) =>{
            return val.category === cate;
        })
        setItem(newItems)
    }

    const searchItem = (e) => {
        const value = e.target.value;
        let newItem = [];
        if(value.length >  3){
            newItem = Data.filter((val , i)=>{
                return val.title.toLowerCase().startsWith(value.toLowerCase())
            })
            setSearchData(newItem)
        }else{
            setSearchData(Data)
        }

    }
  
  return (
    <div className='container-fluid'>
        <div className='row'>
            <h1 className='col-md-12'>Our menu</h1>
            <Buttons setItem={setItem} menuItems={menuItems} filterItem={filterItem} searchItem ={searchItem}/>
            <Card item={item}/>
        </div>
    </div>
  )
}
