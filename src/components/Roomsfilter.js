import React from 'react'
import{useContext} from 'react';
import {RoomContext} from '../context';
import Title from './Title';

//get all unique values

const getUniqueValues = (items,value) => {
    return [... new Set(items.map(item => item[value] ))]
}

//set data type only accepts unique values

export default function Roomsfilter({rooms}) {
    const context = useContext(RoomContext);
    const {handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets }= context;
    // get unique types
    let types= getUniqueValues(rooms,'type');
    //add all
    types = ['all', ...types];
    //map to jsx
    types = types.map((item,index) => {
        return <option value={item} key={index}>
            {item}
        </option>
    }) 

    let people = getUniqueValues(rooms, 'capacity');

    people = people.map((item,index) => {
        return <option value={item} type={index} >{item}</option>
    })

    return (
       <section className="filter-container">
        <Title title="search rooms" />
        <form className="filter-form">
         {/*Select type*/}
            <div className="form-group">
                <label htmlFor="type">
                    Room type
                </label>
                <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                    {types}
                </select>
            </div>
         {/*Select type*/}
           {/*Guests*/}
           <div className="form-group">
                <label htmlFor="capacity">
                    Guests
                </label>
                <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                    {people}
                </select>
            </div>
         {/*Guests*/}
         {/* Room Price */}
         <div className="form-group">
             <label htmlFor="price">
                room price ${price}
             </label>
             <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control"/>
         </div>
         {/* End of Price */}
         {/* Size*/}
         <div className="form-group">
            <label htmlFor="size">Room Size</label>
                <div className="size-inputs">
                    <input type="number" id="size" name="minSize" value={minSize} onChange={handleChange}  className="size-input" />
                    <input type="number" id="size" name="maxSize" value={maxSize} onChange={handleChange}  className="size-input" />
                </div>
         </div>
         {/* end of size */}
         {/*Extras */}
         <div className="form-group">
            <div className="single-extra">
                <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                <label htmlFor="breakfast">Breakfast</label>
            </div>
            <div className="single-extra">
                <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                <label htmlFor="pets">Pets</label>
            </div>
         </div>
        </form>
       </section>
    )
}
