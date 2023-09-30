import React from 'react'
import '../Allcss/Page6.css'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import page61 from '../Images/38.jpg'
import page62 from '../Images/39.jpg'
import page63 from '../Images/40.jpg'
import page64 from '../Images/41.jpg'
import page65 from '../Images/42.jpg'
import page66 from '../Images/43.jpg'
import page67 from '../Images/44.jpg'
import page68 from '../Images/45.jpg'
import page69 from '../Images/46.jpg'
import page60 from '../Images/47.jpg'
import page611 from '../Images/48.jpg'
import page612 from '../Images/49.jpg'
import page613 from '../Images/50.jpg'
import page614 from '../Images/51.jpg'



const Page6 = () => {
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
        <div className='text-center'>
          <h1 className='fw-bold mt-5 mb-5'>Industries We Have Served So Far</h1>
        </div>
        <Carousel arrows={false} responsive={responsive} swipeable={true} draggable={true} autoPlay={true}  autoPlaySpeed={2000} showDots={true} draggable={false}>
          
          <div style={{marginBottom:'5rem'}}>
            <div className='text-center w-75'>
              <img src={page61} className='w-50 mb-4' alt='21'></img>
              <h4 className='fw-normal'>Real Estate, Architecture & Interrior Design</h4>
            </div>
          </div>

          <div>
            <div className='text-center w-75'>
              <img src={page62} className='w-50 mb-4' alt='21'></img>
              <h4 className='fw-normal'>Homeware & Furniture</h4>
            </div>
          </div>

          <div>
            <div className='text-center w-75'>
              <img src={page63} className='w-50 mb-4' alt='21'></img>
              <h4 className='fw-normal'>Food, Beverages & Hospitality</h4>
            </div>
          </div>

          <div>
            <div className='text-center w-75'>
              <img src={page64} className='w-50 mb-4' alt='21'></img>
              <h4 className='fw-normal'>Beauty & Wellness </h4>
            </div>
          </div>

          <div>
            <div className='text-center w-75'>
              <img src={page65} className='w-50 mb-4' alt='21'></img>
              <h4 className='fw-normal'>Fast Moving Consumer Good </h4>
            </div>
          </div>

          <div>
            <div className='text-center w-75'>
              <img src={page66} className='w-50 mb-4' alt='21'></img>
              <h4 className='fw-normal'>Fashion & Lifestyle </h4>
            </div>
          </div>

          <div>
            <div className='text-center w-75'>
              <img src={page67} className='w-50 mb-4' alt='21'></img>
              <h4 className='fw-normal'>Tech & AI </h4>
            </div>
          </div>

          <div>
            <div className='text-center w-75'>
              <img src={page68} className='w-50 mb-4' alt='21'></img>
              <h4 className='fw-normal'> Automobile & Electronics </h4>
            </div>
          </div>

          <div>
            <div className='text-center w-75'>
              <img src={page69} className='w-50 mb-4' alt='21'></img>
              <h4 className='fw-normal'> Sports & Entertainment </h4>
            </div>
          </div>

          <div>
            <div className='text-center w-75'>
              <img src={page60} className='w-50 mb-4' alt='21'></img>
              <h4 className='fw-normal'> B2B, Finance & Corporates </h4>
            </div>
          </div>

          <div>
            <div className='text-center w-75'>
              <img src={page611} className='w-50 mb-4' alt='21'></img>
              <h4 className='fw-normal'> Real Estate, Architecture & Interior Design </h4>
            </div>
          </div>

          <div>
            <div className='text-center w-75'>
              <img src={page612} className='w-50 mb-4' alt='21'></img>
              <h4 className='fw-normal'> Homeware & Furniture </h4>
            </div>
          </div>

          <div>
            <div className='text-center w-75'>
              <img src={page613} className='w-50 mb-4' alt='21'></img>
              <h4 className='fw-normal'> Food, Beverages & Hospitality</h4>
            </div>
          </div>

          

         




        </Carousel>

     <div className='row'>
      <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
        <div className='m-5 csspage6from1'>
          <h1><span className='fw-bold' style={{color:'rgb(255, 110, 20)'}}>Goals</span> we help you achieve</h1>
          <h1>with our<span className='fw-bold' style={{color:'rgb(255, 110, 20)'}}> Expert Guidance </span></h1>
        </div>

        
      </div>
      <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
        <div className='mt-5 csspage6from1'>
         <h4 className='fw-normal csspage6from2' style={{lineHeight:'2rem'}}>Is your brand rocking the social scene but lacking in conversions and sales? Or are you hungry for more likes and shares? Fear not, we’ve got the magic touch to turn things around!

         </h4>
        </div>
        </div>
      </div>

      <div className='row'>
      <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
              <div className='m-5 csspage6from1' >
                  <div className='csspage6from' style={{borderBottom:'0.1rem solid black'}}>
                    <h3 className='fw-normal mb-4'>Create Brand Awareness</h3>

                  </div>
              

              
                  <div className='mt-3 csspage6from ' style={{borderBottom:'0.1rem solid black'}}>
                    <h3 className='fw-normal mb-4'>Generate Leads & Sales</h3>

                  </div>
             
                  <div className='mt-3 csspage6from' style={{borderBottom:'0.1rem solid black'}}>
                    <h3 className='fw-normal mb-4'>Community & Brand Building</h3>

                  </div>
             
                  <div className='mt-3 csspage6from' style={{borderBottom:'0.1rem solid black'}}>
                    <h3 className='fw-normal mb-4'>Organic Social media Growth</h3>

                  </div>
              
                  <div className='mt-3 csspage6from' style={{borderBottom:'0.1rem solid black'}}>
                    <h3 className='fw-normal mb-4'>Multiple Platform Management </h3>

                  </div>
              </div>
        </div>
        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-5'>
          <div className='text-center w-100 '>
            <img src={page614} alt='545' className='w-75'></img>
          </div>
        </div>
      </div>
     
















       
      </div>
    </>
  )
}

export default Page6