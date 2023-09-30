import React from 'react'
import '../Allcss/Page9.css'
import pic91 from '../Images/53.jpg'

const Page9 = () => {
  return (
    <>
      <div className='container-fluid mt-5'>
        <h1 className='text-center fw-bold '>Innovative AI- Software Solutions We Leverage</h1>
        <div className='row '>
          <div className='col-xl-12 col-lg-12 col-sm-12 col-xs-12 col-md-12 '>
            <div className='text-center12 w-100 mt-5'>
              <img src={pic91} alt='454' className='w-100 '></img>
            </div>
          </div>
          

        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-1 col-lg-1 col-md-0 '></div>
        <div className='col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12  mb-5 mt-5'>
          <div className='w-100 classfordivcssform h-100' style={{backgroundColor:'rgb(218, 204, 187)',borderRadius:'5rem'}}>
               <h4 style={{color:'rgb(218, 204, 187)',marginLeft:'3rem'}}>111</h4>
            <form className='mt-3' style={{marginLeft:'2rem',marginRight:'2rem'}}>
              <div className='mb-5'>
            <h2 className='text-center '>Get a FREE Consultation</h2>
            </div>
            <div className='mt-3 mb-1 '>
              <label className='form-label fs-5'>Your Name</label>
            <input type='text'required placeholder='Enter your name' style={{backgroundColor:'rgb(218, 204, 187)'}} className=' border-0 border-bottom w-100 form-control'/>
            </div>
            <div className=' mb-3'>
              <label className='form-label fs-5'>Your Email</label>
            <input type='text' required placeholder='Enter your Email Id' style={{backgroundColor:'rgb(218, 204, 187)'}} className=' border-0 border-bottom w-100 form-control'/>
            </div>
            <div className=' mb-3'>
              <label className='form-label fs-5'>Your Mobile Number</label>
            <input type='text' required placeholder='Enter your Mobile Number' style={{backgroundColor:'rgb(218, 204, 187)'}} className=' border-0 border-bottom w-100 form-control'/>
            </div>
            <div className=' mb-5'>
              <label className='form-label fs-5'>Your Service Required</label>
            <input type='text' required placeholder='Enter the service you are looking for'style={{backgroundColor:'rgb(218, 204, 187)'}} className=' border-0 border-bottom w-100 form-control'/>
            </div>
           <div className='text-center mb-5'>
            <button className='fw-bold classforbuttonsubmit' ><h5>Book a call</h5></button>
           </div>
           
            </form>
          </div>
          </div>
          <div className='col-xl-1 col-lg-1 col-md-1'></div>
        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-5 text-center '>
          <h1 style={{fontSize:'3.5rem'}} className='textcssdivmargin'>Ready to create a Social Media Buzz?
</h1>
<h3 className='fw-light'>Let’s craft inspiring Brand Stories, stunning Creatives, and engaging Campaigns for your brand’s Social Media success.</h3>
        </div>
        </div>
      </div>
    </>
  )
}

export default Page9