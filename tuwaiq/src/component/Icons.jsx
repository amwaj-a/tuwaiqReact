import React from 'react'

function Icons({title,icon}) {
  return (
    <div>
        {/* <img  id='IconsStepLogin' name={icon}/> */}
        <ion-icon id='IconsStepLogin' name={icon}></ion-icon>
        <span>{title}</span>

    </div>
  )
}

export default Icons