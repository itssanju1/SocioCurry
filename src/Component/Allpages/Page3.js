import React from 'react'
import '../Allcss/PAge3.css'
import pics1 from '../Images/4.jpg'
import pics2 from '../Images/5.jpg'
import pics3 from '../Images/6.jpg'
import pics4 from '../Images/7.jpg'
import pics5 from '../Images/8.jpg'
import pics6 from '../Images/9.jpg'
import pics7 from '../Images/10.jpg'
import pics8 from '../Images/11.jpg'
import pics9 from '../Images/12.jpg'
import pics10 from '../Images/13.jpg'
import pics11 from '../Images/14.jpg'
import pics12 from '../Images/15.jpg'
import pics13 from '../Images/16.jpg'
import pics14 from '../Images/17.jpg'
import pics15 from '../Images/18.jpg'
import pics16 from '../Images/19.jpg'
import pics17 from '../Images/20.jpg'
import pics18 from '../Images/21.jpg'
import pics19 from '../Images/22.jpg'
import pics20 from '../Images/23.jpg'
import pics21 from '../Images/24.jpg'
import pics22 from '../Images/25.jpg'
import pics23 from '../Images/26.jpg'
import pics24 from '../Images/28.jpg'
import pics25 from '../Images/29.jpg'
import pics26 from '../Images/30.jpg'
import pics27 from '../Images/31.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Page3 = () => {
  const responsive = {
    superLargeDesktop: {
     
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile1: {
      breakpoint: { max: 767.98, min: 576 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 575.98, min: 0 },
      items: 3
    }
  };
  return (
   <>
  <div className='container-fluid'>
    <Carousel arrows={false} responsive={responsive} showDots={true} draggable={false} className='fade-in-out01'>
    <div className='mt-5 mb-5 text-center'>
           <img src={pics1} alt='112' className='w-75 mt-5'></img>
    </div>

    <div className='mt-5 mb-5'>
           <img src={pics2} alt='112' className='w-75'></img>
    </div>

    <div className='mt-5 mb-5'>
           <img src={pics3} alt='112' className='w-75'></img>
    </div>

    <div className='mt-5 mb-5'>
           <img src={pics4} alt='112' className='w-75'></img>
    </div>

    <div className='mt-5 mb-5'>
           <img src={pics5} alt='112' className='w-75 '></img>
    </div>

    <div className='mt-5 mb-5'>
           <img src={pics6} alt='112' className='w-75'></img>
    </div>

    <div className='mt-5 mb-5'>
           <img src={pics7} alt='112' className='w-75 mt-4'></img>
    </div>

    <div className='mt-5 mb-5'>
           <img src={pics8} alt='112' className='w-75 mt-4'></img>
    </div>

    <div className='mt-5 mb-5'>
           <img src={pics9} alt='112' className='w-75 mt-5'></img>
    </div>

    <div className='mt-5 mb-5'>
           <img src={pics10} alt='112' className='w-75 mt-3'></img>
    </div>

    <div className='mt-5 mb-5'>
           <img src={pics11} alt='112' className='w-50'></img>
    </div>

    <div className='mt-5 mb-5'>
           <img src={pics12} alt='112' className='w-50'></img>
    </div>

    <div className='mt-5 mb-5'>
           <img src={pics13} alt='112' className='w-75'></img>
    </div>

    <div className='mt-5 mb-5'>
           <img src={pics14} alt='112' className='w-75'></img>
    </div>

    <div className='mt-5 mb-5'>
           <img src={pics15} alt='112' className='w-75'></img>
    </div>

    <div className='mt-5 mb-5'>
           <img src={pics16} alt='112' className='w-50'></img>
    </div>

    <div className='mt-5 mb-5'>
           <img src={pics17} alt='112' className='w-75'></img>
    </div>

    <div className='mt-5 mb-5'>
           <img src={pics18} alt='112' className='w-75 mt-4'></img>
    </div>

    <div className='mt-5 mb-5'>
           <img src={pics19} alt='112' className='w-75'></img>
    </div>

    <div className='mt-5 mb-5'>
           <img src={pics20} alt='112' className='w-75'></img>
    </div>

    <div className='mt-5 mb-5'>
           <img src={pics21} alt='112' className='w-75'></img>
    </div>

    <div className='mt-5 mb-5'>
           <img src={pics22} alt='112' className='w-75'></img>
    </div>

    <div className='mt-5 mb-5'>
           <img src={pics23} alt='112' className='w-75'></img>
    </div>

    <div className='mt-5 mb-5'>
           <img src={pics24} alt='112' className='w-75 mt-5'></img>
    </div>

    <div className='mt-5 mb-5'>
           <img src={pics25} alt='112' className='w-75'></img>
    </div>

    <div className='mt-5 mb-5'>
           <img src={pics26} alt='112' className='w-75'></img>
    </div>

    <div className='mt-5 mb-5'>
           <img src={pics27} alt='112' className='w-75'></img>
    </div>



    </Carousel>
  </div>
   


   <div className='container-fluid mt-5' style={{backgroundColor:'rgb(255, 110, 20)'}}>
                 <div className='text-center '>
                       <p style={{color:'rgb(255,110,20'}}>.</p>
                       <h1 className='mt-4 fw-bold' style={{color:'white',marginTop:'rem'}}>Our Numbers Speak for Us </h1>
                 </div>
      <div className='container mt-3 '>
                <div className='row'>
                    <div className='classcssmarginright col-xl-2 col-lg-2 col-md-4 col-sm-12 col-xs-12 mt-4'>
                      <div className='text-center ' style={{color:'white'}}>
                         <h1 className='fw-bold'>100+</h1>
                        <h3 className='cssfontline1'>Happy Clients</h3>
                       </div>
                       
                    </div>
                    
                    <div className='col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12 classcssmarginright mt-4'>
                      <div className='text-center' style={{color:'white'}}>
                         <h1 className='fw-bold'>45+</h1>
                        <h3 className='cssfontline1'>Industries</h3>
                       </div>
                    </div>
                    <div className='col-xl-2 col-lg-2 col-md-4 col-sm-12 col-xs-12 classcssmarginright mt-4'>
                      <div className='text-center' style={{color:'white'}}>
                         <h1 className='fw-bold'>10x</h1>
                        <h3 className='cssfontline1'>Growth</h3>
                       </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 classcssmarginright mt-4'>
                      <div className='text-center' style={{color:'white'}}>
                         <h1 className='fw-bold'>3,245+</h1>
                        <h3 className='cssfontline1'>Campaigns Cooked</h3>
                       </div>
                    </div>
                    <div className='col-xl-2 col-lg-2 col-md-6 col-sm-12 col-xs-12 mt-4'>
                      <div className='text-center' style={{color:'white'}}>
                         <h1 className='fw-bold'>100%</h1>
                        <h3 className='cssfontline1'>Satisfaction</h3>
                       </div>
                    </div>
                   
                </div>
                </div>
   
                <p style={{color:'rgb(255,110,20)'}} className='mt-3'>.</p>
     
   </div>
   </>
  )
}

export default Page3