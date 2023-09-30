import React from 'react'
import '../Allcss/Page7.css'
import page7pic from '../Images/socio.jpg'
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import pic3 from '../Images/handpic0.png'
import page7pic1 from '../Images/insta.jpg'
import Carousel from 'react-multi-carousel';
const PAge7 = () => {
  const responsive = {
    superLargeDesktop: {

      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
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
      <div className='container-fluid'>
        <div className='row'>
          <h1 className='fw-bold text-center mt-5'>Take a Look at Our Best Work</h1>
          <Carousel arrows={false} contin responsive={responsive}  swipeable={true} draggable={true} autoPlay={true}  autoPlaySpeed={2000} showDots={true} >
         
            <div >
              <div className='row'>
                <div className='col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12 '>
                  <div className='m-5 csssmscreenpage7' style={{ borderBottom: '0.1rem solid black' }}>
                    <h3 className='fw-bold'><span className='fw-normal'>Crafting</span> Brand Awareness <span className='fw-normal'>&</span> Creative</h3>
                    <h3 className='fw-bold'>Positioning <span className='fw-normal'>for</span><span style={{ color: 'rgb(255, 110, 20)', fontSize: '3rem' }}> M' onique's </span></h3>
                    <h3 className='fw-bold'>Launch Campaign <span className='fw-normal'>with a compelling</span> </h3>
                    <h3 className='fw-bold mb-4' style={{ color: 'rgb(255, 110, 20)' }}>Branch Storyline</h3>
                  </div>
                  <div className='m-5 csssmscreenpage7'>
                    <p>
                      We crafted a captivating brand story that merged fantasy and fashion, immersing little girls in a fairy dreamworld through enchanting dresses. Each dress embodied this magical narrative, blurring the lines between reality and fantasy with carefully chosen names. We orchestrated an enchanting photoshoot aligned with our narrative and complemented it with strategic social media content.
                    </p>
                  </div>
                </div>
                <div className='col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12'>
                  <div className=' text-center w-100' >
                    <img src={page7pic} alt='221'></img>
                  </div>
                </div>
              </div>
              <div className='container mb-5' style={{backgroundColor:'rgb(218, 204, 187)'}}>
                <div className='row '>
                  <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center mt-3 mb-3 borderrightpage7' >
                    <h3 className='fw-bold lh-1' style={{color:"rgb(255, 110, 20)"}}>Creative</h3>
                    <h4 className='lh-1 borderrightpage71'>Photoshoot</h4>
                  </div>
                  <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center mt-3 mb-3 borderrightpage7' >
                    <h3 className='fw-bold lh-1' style={{color:"rgb(255, 110, 20)"}}>Captivating</h3>
                    <h4 className='lh-1 borderrightpage71'>Brand Storyline</h4>
                  </div>
                  <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center mt-3 mb-3 borderrightpage7' >
                    <h3 className='fw-bold lh-1' style={{color:"rgb(255, 110, 20)"}}>1.4L+</h3>
                    <h4 className='lh-1 borderrightpage71'>Reach</h4>
                  </div>
                  <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center mt-3 mb-3'>
                    <h3 className='fw-bold lh-1' style={{color:"rgb(255, 110, 20)"}}>2.5L+</h3>
                    <h4 className='lh-1 borderrightpage71'>Impressions</h4>
                  </div>
                </div>

              </div>
            </div>


            <div >
              <div className='row'>
                <div className='col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12'>
                  <div className='m-5 csssmscreenpage7' style={{ borderBottom: '0.1rem solid black' }}>
                    <h3 className='fw-normal'>Maximizing Engagement For</h3>
                    <h3 className='fw-bold'> <span className='fw-bold'style={{ color: 'rgb(255, 110, 20)', fontSize: '3rem' }}>My Muscle Meal </span><span className='fw-normal'> by</span></h3>
                    <h3 className='fw-normal'>leveraging    <span className='fw-bold'>IPL craze</span> leading to <span className='fw-bold' style={{color: 'rgb(255, 110, 20)'}}>20X </span></h3>
                    <h3 className='fw-bold mb-4' >increase in Engagement</h3>
                  </div>
                  <div className='m-5 csssmscreenpage7'>
                    <p>
                    We launched the Muscle Premiere League during IPL to boost Instagram engagement, encouraging fans to predict wining teams before matches for a chance to earn points and win free meals from MMM. We generated entertaining reels and enlisted cricket influencers to amplify the campaign.
                    </p>
                  </div>
                </div>
                <div className='col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12'>
                  <div className=' text-center w-100' >
                    <img src={page7pic1} className='w-75 mb-5 mt-5' alt='221'></img>
                  </div>
                </div>
              </div>
              <div className='container mb-5 ' style={{backgroundColor:'rgb(218, 204, 187)'}}>
                <div className='row '>
                  <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12  mt-3 mb-3 text-center borderrightpage7' >
                    <h3 className='fw-bold lh-1 text-center' style={{color:"rgb(255, 110, 20)"}}>MPL</h3>
                    <h4 className='lh-1   borderrightpage71'>Campaign</h4>
                  </div>
                  <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center mt-3 mb-3 borderrightpage7' >
                    <h3 className='fw-bold lh-1' style={{color:"rgb(255, 110, 20)"}}>20X</h3>
                    <h4 className='lh-1 borderrightpage71'>Increase In Engagement</h4>
                  </div>
                  <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center mt-3 mb-3 borderrightpage7' >
                    <h3 className='fw-bold lh-1' style={{color:"rgb(255, 110, 20)"}}>40K</h3>
                    <h4 className='lh-1 borderrightpage71'>Profile Visits</h4>
                  </div>
                  <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center mt-3 mb-3'>
                    <h3 className='fw-bold lh-1' style={{color:"rgb(255, 110, 20)"}}>1L+</h3>
                    <h4 className='lh-1 borderrightpage71'>Impressions</h4>
                  </div>
                </div>

              </div>
            </div>
            
            <div >
              <div className='row'>
                <div className='col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12'>
                  <div className='m-5 csssmscreenpage7' style={{ borderBottom: '0.1rem solid black' }}>
                    <h3 className='fw-bold'><span className='fw-normal'>Crafting</span> Brand Awareness <span className='fw-normal'>&</span> Creative</h3>
                    <h3 className='fw-bold'>Positioning <span className='fw-normal'>for</span><span style={{ color: 'rgb(255, 110, 20)', fontSize: '3rem' }}> M' onique's </span></h3>
                    <h3 className='fw-bold'>Launch Campaign <span className='fw-normal'>with a compelling</span> </h3>
                    <h3 className='fw-bold mb-4' style={{ color: 'rgb(255, 110, 20)' }}>Branch Storyline</h3>
                  </div>
                  <div className='m-5 csssmscreenpage7'>
                    <p>
                      We crafted a captivating brand story that merged fantasy and fashion, immersing little girls in a fairy dreamworld through enchanting dresses. Each dress embodied this magical narrative, blurring the lines between reality and fantasy with carefully chosen names. We orchestrated an enchanting photoshoot aligned with our narrative and complemented it with strategic social media content.
                    </p>
                  </div>
                </div>
                <div className='col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12'>
                  <div className=' text-center w-100' >
                    <img src={page7pic} alt='221'></img>
                  </div>
                </div>
              </div>
              <div className='container mb-5' style={{backgroundColor:'rgb(218, 204, 187)'}}>
                <div className='row '>
                  <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center mt-3 mb-3 borderrightpage7'>
                    <h3 className='fw-bold lh-1' style={{color:"rgb(255, 110, 20)"}}>Creative</h3>
                    <h4 className='lh-1 borderrightpage71'>Photoshoot</h4>
                  </div>
                  <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center mt-3 mb-3 borderrightpage7' >
                    <h3 className='fw-bold lh-1' style={{color:"rgb(255, 110, 20)"}}>Captivating</h3>
                    <h4 className='lh-1 borderrightpage71'>Brand Storyline</h4>
                  </div>
                  <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center mt-3 mb-3 borderrightpage7' >
                    <h3 className='fw-bold lh-1' style={{color:"rgb(255, 110, 20)"}}>1.4L+</h3>
                    <h4 className='lh-1 borderrightpage71'>Reach</h4>
                  </div>
                  <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center mt-3 mb-3'>
                    <h3 className='fw-bold lh-1' style={{color:"rgb(255, 110, 20)"}}>2.5L+</h3>
                    <h4 className='lh-1 borderrightpage71'>Impressions</h4>
                  </div>
                </div>

              </div>
            </div>



          </Carousel>
        </div>
      </div>
















      <div className='container-fluid mt-5' style={{ backgroundColor: 'rgb(218, 204, 187)' }}>
        <div className='mt-5 text-center' >
          <p style={{ color: 'rgb(218, 204, 187)' }}>.</p>
          <h1 className='fw-bold mt-5'>Request Your<span style={{ color: 'rgb(255, 110, 20)' }}> Free 1-Month Custom Social Media</span></h1>
          <h1 className='fw-bold'><span style={{ color: 'rgb(255, 110, 20)' }}>Roadmap </span>for Your Brand</h1>
          <h4 className='fw-normal mt-4'>Offer valid for next 3 days only. Hurry up!</h4>
        </div>
        <div className='text-center mt-5'>
          <a href='sociocurry.in'>
          <button className='fw-bold  classforbuttonpage5'>Get a Quote <ArrowCircleRightRoundedIcon style={{ width: '2rem', height: '2rem', marginLeft: '0.8rem' }} /></button>
          </a>
          <p className='mt-1' style={{ color: 'rgb(218, 204, 187)' }}>.</p>
        </div>

      </div>

      <div className='text-center'>
        <img src={pic3} alt='221' style={{ width: '10%', marginLeft: '10rem' }}></img>
      </div>
    </>
  )
}

export default PAge7