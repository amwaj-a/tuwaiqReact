import img from '../assets/logo.png'
import { useState } from 'react'
function Nav() {
  let [mane,setMane]=useState('none')
  let style={
    display: mane
  }
  return (
<header>
<nav>
<div className='hidden'>
    <button onClick={()=>{
setMane(mane=='none'? 'flex':'none')
    }} className='menu'>
  <ion-icon  id='menu' name="menu-outline"></ion-icon>

  </button>
  <img  src={img} />
  <div className='menuItems' style={style}>
  <span>English</span>
    <span>تسجيل الدخول</span>
    
    
  
    <span >مركز الاختبارات</span>
    <span>الأكادمية التابعة </span>
    <span>حول الأكادمية</span>
    <span>المعسكرات والبرامج</span>
    <span>الرئيسية</span> 
  </div>
</div>


    <div className='show'><span>English</span>
    <span>تسجيل الدخول</span>
    
    
    </div>
    <div className='show'>
    <span >مركز الاختبارات</span>
    <span>الأكادمية التابعة </span>
    <span>حول الأكادمية</span>
    <span>المعسكرات والبرامج</span>
    <span>الرئيسية</span> 

<img src={img} />
    </div>
</nav>
<h1>أكاديمية طويق</h1>

</header>




)
}

export default Nav