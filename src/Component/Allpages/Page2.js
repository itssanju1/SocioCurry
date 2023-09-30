import React from 'react'
import '../Allcss/PAge2.css'
import pic3 from '../Images/3.jpg'
import page2pic from '../Images/64.jpg'
import { Accordion } from 'react-bootstrap'
// import ArrowForwardIcon from '@mui/icons-material/ArrowCircleRight';
// import pic4 from '../Images/7.png'
const Page2 = () => {
    return (
        <>
            <div className='container-fluid mt-5'>
                <div className='text-center mt-5'>
                    <h1 className='fw-bold mt-5 rotate-text'>Our Services</h1>
                </div>
                <div className='row'>
                    <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12'>
                        <div className='text-center mt-3 typing-text'>
                            <p><img src={page2pic} alt='1212' style={{ width: '13%' }}></img></p>
                        </div>

                    </div>

                </div>
                <div className='row'>
                    <div className='col-xl-1'></div>
                    <div className='text-center col-10'>
                        <h3>
                            Tailored packages to suit your brand’s unique needs and budget, ensuring the right platform selection for maximum impact and results.


                        </h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 '></div>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12  mb-5' >
                        <Accordion className='colorcss mt-3 fade-in-out1' >
                            <Accordion.Item className='colorcss' eventKey="0">
                                <Accordion.Header><h5 className='colorh5css'>1. SOCIAL MEDIA MANAGEMENT</h5></Accordion.Header>
                                <Accordion.Body>
                                    <h6 style={{ lineHeight: '1.8rem' }}>
                                        Social Media Strategy | Monthly Content Calendar | Regular Posting | Graphic Design | Community Management
                                    </h6>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='colorcss' eventKey="1">
                                <Accordion.Header><h5 className='colorh5css'>2. SOCIAL MEDIA MARKETING</h5></Accordion.Header>
                                <Accordion.Body>
                                    <h6>
                                        Paid Ads for Instagram, Facebook, Youtube, etc
                                    </h6>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='colorcss' eventKey="2">
                                <Accordion.Header><h5 className='colorh5css'>3. ONLINE REPUTATION MANAGEMENT</h5></Accordion.Header>
                                <Accordion.Body>
                                    <h6 style={{ lineHeight: '1.8rem' }}>

                                        First Level Response | Handling Queries | Handling Positive & Negative conversations | Message automation through FAQs
                                    </h6>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='colorcss' eventKey="3">
                                <Accordion.Header><h5 className='colorh5css'>4. PRODUCT PHOTOSHOOT & REELS</h5></Accordion.Header>
                                <Accordion.Body>
                                    <h6 style={{ lineHeight: '1.8rem' }}>

                                        Creative Photoshoot & Videography | Mood-board Conceptualization | Creative Direction & Styling | Corporate Videos | Reel Making for Instagram, Snapchat and Youtube | Post production Editing | Model Procurement | Script Writing
                                    </h6>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='colorcss' eventKey="4">
                                <Accordion.Header><h5 className='colorh5css'>
                                    5. SOCIAL MEDIA AUDIT</h5></Accordion.Header>
                                <Accordion.Body>
                                    <h6 style={{ lineHeight: '1.8rem' }}>

                                        Top statistic of the month for for each platform | Best performing posts on each platform | Key Observations | Suggestions for improvement | Plan for next month
                                    </h6>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='colorcss' eventKey="5">
                                <Accordion.Header><h5 className='colorh5css'>

                                    6. CONTENT & SEO</h5></Accordion.Header>
                                <Accordion.Body>
                                    <h6 style={{ lineHeight: '1.8rem' }}>


                                        Keyword Optimization | Profile Optimisation | Link Building | Social Media Strategy | Brand Storytelling | Brand Building | Monitoring Trends | Community Engagement | Increasing Followers, Likes and Views through Organic Content

                                    </h6>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='colorcss' eventKey="6">
                                <Accordion.Header><h5 className='colorh5css'>

                                    7. CAMPAIGN MANAGEMENT
                                </h5></Accordion.Header>
                                <Accordion.Body>
                                    <h6 style={{ lineHeight: '1.8rem' }}>


                                        Campaign Strategy Development | Ideation & Conceptualisation | Visual Design | Creative Direction | Scheduling & Posting | Performance Tracking | Campaign Evaluation


                                    </h6>
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                        <div className='cssfordivpage2hand' style={{textAlign:'right'}}>
                            
                      <img src={pic3} style={{textAlign:'right',width:'15%'}} alt='454'></img>
                      
                    </div>
                    </div>
                </div>
                
            </div>

        </>
    )
}

export default Page2