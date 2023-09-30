import React from 'react'
import footerpic from '../Images/52.jpg'
import '../Allcss/Footer.css'
import { Email } from '@mui/icons-material'
import { Call } from '@mui/icons-material'
import { Chat } from '@mui/icons-material'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { Instagram } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'
import { WhatsApp } from '@mui/icons-material'
const Footer = () => {
  return (
    <>
      <div className='container-fluid ' style={{ backgroundColor: 'rgb(54, 54, 54)' }}>
        <div className='row'>

          <div className='col-xl-4 col-lg-4 col-sm-12 col-xs-12 col-md-4  classfooterdiv1 mt-5 mb-5'>
            <img src={footerpic} alt='23313' className='w-25'></img>
            <h4 className='mt-5' style={{ color: 'white' }}>Welcome to Socio Curry -  Where your brand meets a blend of 360 Degree Design, Branding & Digital Marketing Approach</h4>
            <h4 className='mt-5' style={{ color: 'rgb(255, 110, 20)' }}>Contact Info</h4>
            <h6 className='mt-3 ' style={{ color: "white" }}>SocioCurry Studio, Q</h6>
            <h6 className='lh-1' style={{ color: "white" }}>Block, DLF Phase 2,</h6>
            <h6 className='lh-1 mb-5' style={{ color: "white" }}>Gurgaon, Haryana</h6>
          </div>
          <div className='col-xl-3 col-lg-3 col-sm-12 col-xs-12 col-md-5 ml-3 text-center mt-5 mb-5'></div>
         
          <div className='col-xl-4 col-lg-4 col-sm-12 col-xs-12 col-md-6 ml-3 text-center mt-5 mb-5'>
            <h5 style={{ color: 'rgb(255, 110, 20)' }}>SOCIOCURRY SUPPORT</h5>
            <h6 style={{ color: "white" }}>Available 7 days a week</h6>
            <div className='mt-5 text-left'>
              <a href='mailto:sociocurry.in' >
                <button style={{ height: '3rem', width: '60%', textAlign: 'left' }}>  <Email style={{ width: '2rem', height: '2rem' }} />  <span style={{ color: 'rgb(122, 124, 124)' }}>info@sociocurry.in</span></button>
              </a>
              <a href="tel:+919818777620" >
                <button className='mt-3' style={{ height: '3rem', width: '60%', textAlign: 'left' }}>  <Call style={{ width: '2rem', height: '2rem' }} />  <span style={{ color: 'rgb(122, 124, 124)' }}>+91 9818777620</span></button>
              </a>
              <a href="https://call.whatsapp.com/voice/PEpJ8AMWT3AZRYegwom6NU" >
                <button className='mt-3' style={{ height: '3rem', width: '60%', textAlign: 'left' }}>  <Chat style={{ width: '2rem', height: '2rem' }} />  <span style={{ color: 'rgb(122, 124, 124)' }}>Chat With Us</span></button>
              </a>

            </div>
            <h5 style={{ color: 'rgb(255, 110, 20)' }} className='mt-5'>CONNECT WITH US</h5>
            <div className='mt-4'>
                <a className="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-repeater-item-589f205" href="https://www.facebook.com/profile.php?id=100070066448151&amp;mibextid=LQQJ4d" target="_blank">
                  <FacebookRoundedIcon style={{ color: 'white', width: '3rem', height: '3rem' }} />
                </a>
                <a className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-4fab0ed" href="https://instagram.com/sociocurry_studio?igshid=YmMyMTA2M2Y" target="_blank">
                  <Instagram style={{ color: 'white', width: '3rem', height: '3rem',marginLeft:'1rem' }} />
                </a>
                <a className="elementor-icon elementor-social-icon elementor-social-icon-linkedin elementor-repeater-item-d828e17" href="https://www.linkedin.com/company/sociobeat-studio/" target="_blank">
                  <LinkedIn style={{ color: 'white', width: '3rem', height: '3rem',marginLeft:'1rem' }} />
                </a>
                <a className="elementor-icon elementor-social-icon elementor-social-icon-icon-whatsapp-1 elementor-repeater-item-ba14067" href="https://wa.me/919818777620?text=" target="_blank">
                 
                  <WhatsApp style={{ color: 'white', width: '3rem', height: '3rem',marginLeft:'1rem' }} />
                </a>



            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer