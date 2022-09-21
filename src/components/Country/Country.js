import React from 'react';
import "./country.css"

const Country = (props) => {
   
   const {name,population,area} = props.info

    return (
        <div className='country'>
         

           <h2>Name :{name.common}</h2>
           <h4>population:{population}</h4>
           <small>area : {area}</small>
        </div>
    );
};

export default Country;