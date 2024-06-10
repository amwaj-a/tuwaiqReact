import React from 'react'
import Button from './Button'
// import { useState } from 'react';

function Crad(props) {

    let color= 
    new Date().getFullYear()>props.date.slice(6)?

    'gray': ( props.title=='لقاء')?
     'B787F5':(props.title=='معسكر')?
       'ABADF0':(props.title=='برنامج')?
         'A1D6DA': ' gray'
    // const [hover, setHover] = useState(false);
    // let style={
    //     transform: 
    //     new Date().getFullYear()>props.date.slice(6)?
    //     'scale(1)':       
        
    //     hover?'scale(1.05)':'scale(1)',
    //     transition:hover?'0.1s':'0',
     
    //     borderRight: `15px solid ${color}`
    // }
  return (
    <div className='card '   id={color}>
    <div className="borderRight">
     
     
    <span style={{color:color}}>{props.title}
    </span>
    <strong dir="rtl">
{props.text}
        </strong>
    <div className='icon'>
   <div> <ion-icon style={{color:'gray'}}  name="location-outline"></ion-icon>
   <span>لرياض</span></div>
   <div> <ion-icon  style={{color:'gray'}}  name="today-outline"></ion-icon>
    <span
    >
     {props.time}
        </span>
   </div> </div>
    
    <div>
    <ion-icon  style={{color:'gray'}} name="calendar-outline"></ion-icon>
    <span>يبدأ في
         {props.date}

    </span>
     <Button text={'التفاصيل'} color={color}  />
    </div>
    </div>
    
   
     </div>
  )
}

export default Crad