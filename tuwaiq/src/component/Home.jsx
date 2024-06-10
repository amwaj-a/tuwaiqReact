import Button from "./Button"
import Card from "./Crad"
import Login from "./Login"
function Home() {
  return (
    <section className="main">
        <br />
<div className="search" >
 <div> 
     <ion-icon style={{color:'#fff',padding:'6px',fontSize:'1.6rem',
    borderRadius:'50%'
    ,backgroundColor:'#98a2b3'}}
    id='iconHeader' name="options-outline"></ion-icon>
 
  <Button text='الناشئون'/>
<Button text='الكبار' id="active"/>

</div>

    <h2>
    المعسكرات والبرامج

    </h2>
</div>


<section className="allCards" dir="rtl">
<Card title='لقاء' text='فعالية WWDC24 Watch Party' time='يوم واحد' date='11/06/2024'  />
<Card title='معسكر' text='هندسة الحوسبة السحابية المتقدمة AWS' time='4 أسابيع' date='23/06/2024'  />
<Card title='برنامج' text=' إدارة خدمات تقنية المعلومات (ITIL)' time='اسبوع واحد' date='23/06/2024'  />
<Card title='برنامج' text=' أساسيات علوم الشبكات +NETWORK' time='اسبوعان ' date='15/10/2023'  />
<Card title='برنامج' text=' البنية المؤسسية بمنهجية وإطار TOGAF' time='اسبوع واحد' date='15/10/2023'  />
<Card title='برنامج' text='  أمن وحماية المعلومات فيosi model' time='اسبوع واحد' date='15/10/2023'  />
</section>
<div>
    <br />
    <Button id={'borferBut'} text={'تحميل المزيد'} />

</div>
<Login/>

    </section>
  )
}

export default Home