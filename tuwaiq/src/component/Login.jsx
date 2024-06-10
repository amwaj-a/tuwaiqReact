import React from 'react'
import Icons from "./Icons"

function Login() {
  return (
    <div className='sectionstepLogin'>
      <br />
        <h2> خطوات التسجيل
        
        
        </h2>
        <div className='stepLogin'>
            <Icons 
            title='الانضمام إلى المنصة'
             icon='document-text-outline'/>
        <strong>--------</strong>
        <Icons title='التسـجيـل في المعسكر أو البرنامج' icon='arrow-undo-outline'/>
        <strong>--------</strong>

        <Icons title='انتظار رسالة القبـول' icon='document-text-outline'/>  
        </div>
      <br />
        </div>
  )
}

export default Login