// import { useState } from 'react';





function Button({text,id,color}) {
  // const [hover, setHover] = useState(false);

// let styles={
//   color:color=='gray'?color: hover?'#fff':color,
//   border:`1px solid ${color}`,
//   backgroundColor:color=='gray'?' #e1e1e1': hover?color:'#FFF'
// }

  return (
<button className={id} id={'but'+color} >
      
      {color=='gray'? text='مغلق':text=text}</button>  )
}

export default Button