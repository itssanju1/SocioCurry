import React from 'react'
import page1pic from '../Images/1.jpg'
import page1pic2 from '../Images/2.jpg'
import '../Allcss/Page1.css'
import { Call } from '@mui/icons-material'
import { WhatsApp } from '@mui/icons-material'

const Page1 = () => {
  return (
    <>
      <div className='container-fluid ' style={{ backgroundColor: ' rgb(255, 110, 20)' }} >
        <div className='row '>
          <div >
            <img className='pic00csspage1' src={page1pic} style={{float:'left'}} alt='55'></img>
          
            <h1 className='w-50 pic00csspage2' style={{textAlign:'center',float:'left',color:'white'}}>Featured on <img src={page1pic2} className='w-25' alt='12'></img></h1>
           <p className='text-center'>
           <a href="tel:+919818777620" className='cssdecoration1'>
            <span type='button' ><Call style={{width:'2.5rem',height:'2.5rem'}} className='cssdiv3button45'/></span>
            </a>
            <a  className="elementor-icon cssdecoration1 elementor-social-icon elementor-social-icon-icon-whatsapp-1 elementor-repeater-item-ba14067" href="https://wa.me/919818777620?text=" target="_blank">
                 
            <span type='button' ><WhatsApp style={{width:'2.5rem',height:'2.5rem'}} className='cssdiv3button451'/></span>
            </a>
            </p>
          </div>

          

         


        </div>

      </div>
      <div className='container-fluid mb-5' style={{ backgroundColor: 'rgb(218, 204, 187)' }}>
        {/* is secound part of page1  */}
        <div className='row'>
          <div className='col-xl-6 col-lg-6 col-md-6 col-xs-12 col-sm-12 mb-5 '>
            <div className=' classforcsspage1dic animationpage1'>
              <h1 className='fw-normal   '  >Accelerate your </h1>
              <h1 className='fw-bold   '><span style={{ color: 'rgb(255, 110, 20)' }}>Business growth </span><span className='fw-normal'>with</span></h1>
              <h1 className='fw-bold  ' style={{ color: 'rgb(255, 110, 20)' }}> SOCIAL MEDIA MARKETING</h1>
            </div>
            <div className='classforcsspage1dic1 animationpage1 mt-3'>
              <h4 className='fw-normal '>Unlock your social media potential with our expert guidance and <span className='fw-bold'>AI-Driven</span> Social Media Marketing Solutions.
              </h4>

            </div>
          </div>
          <div className='col-xl-1 col-lg-1 col-md-1 col-xs-12 col-sm-12 '></div>
          <div className='col-xl-4 col-lg-4 col-md-4 col-xs-12 col-sm-12 mb-5 mt-5'>
          <div className='w-100 classfordivcssform h-100' style={{backgroundColor:'white',borderRadius:'5rem'}}>
               <h4 style={{color:'white',marginLeft:'3rem'}}>111</h4>
               <h2 className='text-center '>Get a FREE Consultation</h2>
            <form className='mt-3 fade-in-out' style={{marginLeft:'2rem',marginRight:'2rem'}}>
              <div className='mb-5'>
            
            </div>
            <div className='mt-3 mb-1 '>
              <label className='form-label fs-5'>Your Name</label>
            <input type='text'required placeholder='Enter your name' className=' border-0 border-bottom w-100 form-control'/>
            </div>
            <div className=' mb-3'>
              <label className='form-label fs-5'>Your Email</label>
            <input type='text' required placeholder='Enter your Email Id' className=' border-0 border-bottom w-100 form-control'/>
            </div>
            <div className=' mb-3'>
              <label className='form-label fs-5'>Your Mobile Number</label>
            <input type='text' required placeholder='Enter your Mobile Number' className=' border-0 border-bottom w-100 form-control'/>
            </div>
            <div className=' mb-5'>
              <label className='form-label fs-5'>Your Service Required</label>
            <input type='text' required placeholder='Enter the service you are looking for' className=' border-0 border-bottom w-100 form-control'/>
            </div>
           <div className='text-center mb-5'>
            <button className='fw-bold classforbuttonsubmit' ><h5>Book a call</h5></button>
           </div>
           
            </form>
          </div>
          </div>
        </div>
      </div>




    </>
  )
}

export default Page1


{/* <form>
          <div className='mt-3 mb-1 '>
              <label className='form-label fs-5'>Your Name</label>
            <input type='text' placeholder='Enter your name' className=' border-0 border-bottom w-50 form-control'/>
            </div>
            <div className=' mb-3'>
              <label className='form-label fs-5'>Your Email</label>
            <input type='text' placeholder='Enter your Email Id' className=' border-0 border-bottom w-100 form-control'/>
            </div>
            <div className=' mb-3'>
              <label className='form-label fs-5'>Your Mobile Number</label>
            <input type='text' placeholder='Enter your Mobile Number' className=' border-0 border-bottom w-100 form-control'/>
            </div>
            <div className=' mb-4'>
              <label className='form-label fs-5'>Your Service Required</label>
            <input type='text' placeholder='Enter the service you are looking for' className=' border-0 border-bottom w-100 form-control'/>
            </div>
          </form> */}