import logo from '../assets/logo.png'
import img2 from '../assets/logos2.png'
import Linked from '../assets/Linked.png'
import snap from '../assets/snap.png'

function Footer() {
  return (
    <footer>
        <br />
<section>
<img src={logo} alt="" />
<div className='footerText'>
    <span>
شارك كمدرب
    </span>
    <span>
        حول الأكاديمية
        </span>
</div>
<div className='footerText'>
    <span>
الشروط والأحكام
    </span>
    <span>
     سياسة الخصوصية
        </span>
</div>
<div>
   
<div className='iconFooter'  >
    <img src={snap} alt="" />

<img src={Linked} alt="" />
<img src={snap} alt="" />

<img src={Linked} alt="" />
</div> 
@TuwaiqAcademy

</div>

<img src={img2} alt="" />
</section>
<p style={{textAlign:'center',alignItems:'flex-end'}}> 
جميع الحقوق محفوظة لأكاديمية طويق 2024
</p>


        </footer>
  )
}

export default Footer