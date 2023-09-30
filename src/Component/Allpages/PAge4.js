import React from 'react'

import pic6 from '../Images/1.jpg'
import picpage4 from '../Images/arrow.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const PAge4 = () => {
  const responsive = {
    superLargeDesktop: {
     
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile1: {
      breakpoint: { max: 767.98, min: 576 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 575.98, min: 0 },
      items: 1
    }
  };
  return (

    <>
      <div className='container-fluid mt-5'>
        <h1 className='fw-bold text-center mt-5 mb-5'>See What Our Clients Have to Say About Us</h1>
        <div className='container-fluid'>
        <Carousel arrows={false} responsive={responsive} showDots={true} draggable={false}>
         {/* first */}
           <div>
              <div className=' '  >
              <div className='m-2' style={{ backgroundColor: ' rgb(243, 240, 240)' }}>
              <div className='m-4 '>
                <img src={picpage4} className='mt-5' style={{ width: '15%' }} alt='21'></img>
                <h5 className='fw-normal mt-4' style={{ lineHeight: '2rem' }}>I am incredibly grateful for the remarkable work done by Sociocurry in not only creating a captivating brand identity for our brand but also crafting a compelling visual storyline. Their expertise in developing a cohesive narrative that resonates with our clients  has been instrumental in creating an appealing and unforgettable perspective in the eyes of our customers.

                </h5>
                <h5 className='mt-5' style={{ color: 'rgb(255, 110, 20) ' }}>Sonalika Dhand</h5>
                <h5 className='' style={{ color: 'rgb(189, 186, 186' }}>Studio Unbox</h5>
                <p style={{ color: 'rgb(243, 240, 240)' }}>.</p>
              </div>
            </div>
            </div>
          </div>
          
       {/* secound */}
       <div>
            <div className=''  >
            <div className='m-2' style={{ backgroundColor: ' rgb(243, 240, 240)' }}>
              <div className='m-4 '>
                <img src={picpage4} className='mt-5' style={{ width: '15%' }} alt='21'></img>
                <h5 className='fw-normal mt-4' style={{ lineHeight: '2rem' }}>A huge shoutout to Geetika and their awesome team at Sociocurry! These youngsters have some seriously out-of-the-box ideas. When we approached them to do the branding for our bakery, Crumbl, we had no idea what to expect. But let me tell you, we were blown away by their creativity and the way they brought our vision to life. Not only that, but they were super professional and delivered everything on time. 

                </h5>
                <h5 className='mt-3' style={{ color: 'rgb(255, 110, 20) ' }}>Swati Upendra</h5>
                <h5 className='' style={{ color: 'rgb(189, 186, 186' }}>Crumbl</h5>
               
              </div>
            </div>
            </div>
          </div>
          {/* third */}
                   <div>
                    <div   >
                    <div className='m-2' style={{ backgroundColor: ' rgb(243, 240, 240)' }}>
              <div className='m-4 '>
                <img src={picpage4} className='mt-5' style={{ width: '15%' }} alt='21'></img>
                <h5 className='fw-normal mt-4' style={{ lineHeight: '2rem' }}>We brought Sociocurry on board right after our launch to handle our social media and digital marketing, and they've been killing it ever since. Their content strategy is seriously top notch, and we're loving the quirky design vibe they've brought to our page.  We were absolutely thrilled with their idea and how they brought our IPL campaign for My Muscle Meal to life. 

                </h5>
                <h5 className='mt-5' style={{ color: 'rgb(255, 110, 20) ' }}>Kamalpreet Singh</h5>
                <h5 className='' style={{ color: 'rgb(189, 186, 186' }}>My Muscle Meal</h5>
                <p style={{ color: 'rgb(243, 240, 240)' }}>.</p>
              </div>
            </div>
                    </div>
                   </div>
                   {/* fourth */}
          <div>
          <div className='m-2' style={{ backgroundColor: ' rgb(243, 240, 240)' }}>
              <div className='m-4 '>
                <img src={picpage4} className='mt-5' style={{ width: '15%' }} alt='21'></img>
                <h5 className='fw-normal mt-4' style={{ lineHeight: '2rem' }}>Hats off to Sociocurry for the incredible work they've done for our brand, Siddharth Opticals! We couldn't be happier with the results. Their expertise in social media management and digital marketing is truly unmatched. We're seeing  amazing growth and engagement as a result.  We highly recommend them for their exceptional skills and ability to deliver outstanding branding solutions. 

                </h5>
                <h5 className='mt-5' style={{ color: 'rgb(255, 110, 20) ' }}>Siddharth Nanda</h5>
                <h5 className='' style={{ color: 'rgb(189, 186, 186' }}>Siddharth Opticals</h5>
                <p style={{ color: 'rgb(243, 240, 240)' }}>.</p>
              </div>
            </div>
          </div>
          {/* fifth */}
          <div>
          <div className='m-2' style={{ backgroundColor: ' rgb(243, 240, 240)' }}>
              <div className='m-4 '>
                <img src={picpage4} className='mt-5' style={{ width: '15%' }} alt='21'></img>
                <h5 className='fw-normal mt-4' style={{ lineHeight: '2rem' }}>I can't thank Sociocurry enough for the brilliant work they did for Milletude. These guys really know how to create a buzz and spread the word! Their strategies have been spot on in getting our brand in front of the right people.  They know how to ride the wave of the latest social media trends with content, reels, etc and make our brand shine.  Kudos to the Sociocurry team for their exceptional work!

                </h5>
                <h5 className='mt-5' style={{ color: 'rgb(255, 110, 20) ' }}>Kanika Tamak</h5>
                <h5 className='' style={{ color: 'rgb(189, 186, 186' }}>Milletude</h5>
                <p style={{ color: 'rgb(243, 240, 240)' }}>.</p>
              </div>
            </div>
          </div>
          <div>
          <div className='m-2' style={{ backgroundColor: ' rgb(243, 240, 240)' }}>
              <div className='m-4 '>
                <img src={picpage4} className='mt-5' style={{ width: '15%' }} alt='21'></img>
                <h5 className='fw-normal mt-4' style={{ lineHeight: '2rem' }}>Sociocurry has truly nailed it when it comes to branding, website development and design. for Cybbes  Their creativity and attention to detail are absolutely brilliant. From the moment we shared our vision, they brought it to life with a unique and captivating brand identity. We couldn't be happier with the results. The Sociocurry team has exceeded our expectations in every way. 

                </h5>
                <h5 className='mt-5' style={{ color: 'rgb(255, 110, 20) ' }}>Ayaan Gupta</h5>
                <h5 className='' style={{ color: 'rgb(189, 186, 186' }}>Cybees</h5>
                <p style={{ color: 'rgb(243, 240, 240)' }}>.</p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>












       
      </div>



    </>
  )
}

export default PAge4;