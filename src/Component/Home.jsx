import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
   <section className="hero">
    <div className="container" >
      <div className='suba' style={{width:"50%"}}>
        <h1 className='ab'>Hello,</h1>
        <h1 className='ab'>My Name is </h1>
        <h1 className='ab'><span className='sp'>V</span>itthal <span className='sp'>G</span>olande</h1>
        <button className='bc fs-1'>About <span className='sp'>Me</span></button>
    
      </div>

       <div className='sub'style={{height:"400px", width:"50%"}}>
         <img className='img'  style={{width:"400px",height:"400px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk544SBI-KJPhrKug5S21_Z2rg9gYBI6hL0zBDJSwrr2jRdJeBw7aLVOcQEG_IOc9yAIc&usqp=CAU" alt="" />           

        </div>

    </div>
  </section>
    </div>
  )
}

export default Home