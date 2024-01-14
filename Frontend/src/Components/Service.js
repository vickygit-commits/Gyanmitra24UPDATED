import React, { Fragment, useEffect, useRef } from 'react';
import img1 from '../Images/meta1.png';
import styles from '../Images/section.module.css'
import mepco from '../Images/Mepco_Schlenk_Engineering_College_logo.png';
import gyanlogo from '../Images/Gyanmitra_24_logo.png';
import successpics from '../Images/Event-Trophies.png';

import tech from '../Images/portrait-young-african-american-man-with-vr-glasses.jpg';
import work from '../Images/pexels-john-guccione-wwwadvergroupcom-4134179.jpg';
import MetaData from './MetaData';
import { useNavigate } from 'react-router-dom';
import './user/service.css'
import FloatingButton from './FloatingButton';

function Service() {
  const address =
  '\nMepco Schlenk Engineering College Campus, Mepco Schlenk Engineering College Post, Sivakasi – 626005,\nVirudhunagar District, Tamilnadu, India.';
const phoneNumber = '+91-4562-235000 (30 Lines)';
const mapPosition = [9.525360975955065, 77.85359498936283]; // Default position for the map (latitude, longitude)
const email = 'msec@mepcoeng.ac.in';
    const navigate=useNavigate();
    const handleExploreClick = () => {
      navigate('/workshop');
    };
    const handleExploreEventClick = () => {
      navigate('/event');
    };
    
   

    return (
    

    <Fragment>
    <MetaData title={'Home'}/>
    <body className={`${styles.sectionbody}`}>
      <FloatingButton />
      <div className= {`${styles.glass_content} container-fluid col-10`}>
        <section id="Home" 
        >
          <div className="row" >
      <div className="col-lg-6 col-md-6 col-12 order-1 ">
        <h1 className="display-4" style={{
                color:'white',
                fontFamily:'Poppins',
                fontSize:'200%'
              }}>Mepco Schlenk Engineering College (Autonomous), Sivakasi Presents<br/><span class="display-3" style={{fontSize:'180%'}}>Gyan Mitra '24</span></h1>
        <p className="my-lg-2 my-3 display-4" style={{
                color:'white'
              }}>
          Get ready to immerse yourself in a mind-blowing tech extravaganza</p>
          <p style={{color:"red"}}> Last Date to register: 12.2.24
</p>
        <a class="btn btn-danger my-lg-3 my-3" href="#ew"><b>Explore! </b></a>
      </div>
      <div className="col-lg-6 col-md-6 col-12 py-lg-0 w-2 py-3 order-sm-2">
      <img src={img1} className="img-fluid"/>
      </div>
    </div>
    
        </section>
        <hr style={{
                color: 'white'
              }}/>
        <section id="about"  >
          <div className="row" >
          <div className="col-lg-6 col-md-6 col-12 py-lg-0 px-lg-5 py-3 order-sm-1">
      <img src={mepco} className="img-fluid"/>
      </div>
      <div className="col-lg-6 col-md-6 col-12 order-2">
        <h1 className="display-4" style={{
                color:'#dd1133',
                fontFamily:'Poppins'
              }}>About <span style={{
                color:'white',
                fontSize:"54px",
              }}>Mepco Schlenk</span> Engineering College</h1>
        <p className="my-lg-2 my-3" style={{
                color:'white',
                textAlign:'justify'
              }}>
          Welcome to Mepco Schlenk Enigneering College, a vibrant hub of knowledge, innovation, and endless possibilities! Nestled in the heart of Sivakasi, our institution stands as a beacon of academic excellence, where students embark on transformative journeys, fueled by curiosity, guided by expert faculty, and surrounded by a community of like-minded individuals.
At MSEC, we believe in the power of education to shape futures and inspire greatness. Our commitment to foster a holistic learning environment is reflected in a diverse range of academic programs, cutting-edge research initiatives, and a plethora of extracurricular activities that cater to every passion and interest.
                 
         </p>
        <a class="btn btn-outline-danger my-lg-3 my-3" href="https://www.mepcoeng.ac.in" target="_blank">Website</a>
      </div>
      
    </div>
    
    
        </section>
        <hr style={{
                color: 'white'
              }}/>
              <br></br><br></br><br></br>
        <section id="about"  >
          <div className="row" >
          
      <div className="col-lg-6 col-md-6 col-12 order-2">
        <h1 className="display-4" style={{
                color:'white',
                fontFamily:'Poppins'
              }}>About <span style={{
                color:'#dd1133',
                fontSize:"54px",
              }}>Gyanmitra '24</span></h1>
        <p className="my-lg-2 my-3" style={{
                color:'white',
                textAlign:'justify'
              }}>
          Gyanmitra '24 is a distinguished national-level technical symposium proudly presented by Mepco Schlenk Engineering College. This annual event serves as a dynamic platform that brings together bright minds, aspiring engineers, and industry experts to foster innovation, knowledge exchange, and technological advancements.
With a rich tradition of excellence, Gyanmitra '24 showcases a diverse range of technical competitions, interactive workshops, insightful seminars, and engaging panel discussions. Participants have the opportunity to delve into cutting-edge technologies, explore the latest trends in engineering and technology, and connect with like-minded individuals from across the nation.                 

         </p><br></br><br></br>
         <img src={successpics} className='img-fluid'/> 
      </div>
      <div className="col-lg-6 col-md-6 col-12 py-lg-0 px-lg-5 py-3 order-sm-1">
      <img src={gyanlogo} className="img-fluid"/>
      </div>
    </div>
    
    
        </section>


        <br/><br></br>
        <h1 id="ew" style={{
                color:'white',
                fontFamily:'Poppins' 
              }}>Events & Workshops</h1>
        <hr style={{
              border:'1px solid white'
              }}/>
        <section id="Events"  >
          <div className="row"  >
          <div className="col-lg-6 col-md-6 col-12 py-lg-0 py-3 order-sm-1">
      <img src={tech} className="img-fluid img1 rounded-3"/>
      </div>
      <div className="col-lg-6 col-md-6 col-12 order-2">
        <h1 className="display-4" style={{
                color:'#dd1133',
                fontFamily:'Poppins'
              }}>Technical Events</h1>
        <p className="my-lg-2 my-3" style={{
                color:'white',
                textAlign:'justify'
              }}>
          Our technical events serve as a platform for students to explore, showcase, and enhance their technical prowess. Fueled by a passion for cutting-edge advancements, these events bring together bright minds, fostering a culture of curiosity and creativity.
Throughout the academic year, our college hosts a diverse array of technical events, ranging from hackathons and coding competitions to robotics challenges and tech expos. These events are designed to cater to the varied interests and skills of our student community, providing them with hands-on experiences and opportunities to apply theoretical knowledge to real-world scenarios.
                  </p>
        <button class="btn btn-danger my-lg-3 my-3" onClick={handleExploreEventClick}><b>Explore</b></button>
      </div>
      
    </div>

</section>
        <hr style={{
              color:'white',
              }}/>
        <section id="workshop" >
        <div className="row"  >
          <div className="col-lg-6 col-md-6 col-12 py-lg-0 py-3 order-sm-2">
      <img src={work} className="img-fluid img1 rounded-3"/>
      </div>
      <div className="col-lg-6 col-md-6 col-12 order-1">
        <h1 className="display-4" style={{
                color:'#dd1133',
                fontFamily:'Poppins'

              }}>Workshops</h1>
        <p className="my-lg-2 my-3 " style={{
                color:'white',
               textAlign:'justify'
              }}>
          At Mepco Schlenk Engineering College, workshops are not just about learning; they're about acquiring tangible skills that set you apart in the competitive world. Covering a spectrum of disciplines, our workshops cater to the diverse interests and career aspirations of our student body.
These interactive sessions are facilitated by industry experts, seasoned professionals, and faculty members who bring a wealth of experience to the learning environment. From technical workshops delving into coding languages, software development, and hardware design to soft skills workshops focusing on communication, leadership, and teamwork, we strive to empower students with a holistic skill set.
                  </p>
        <button class="btn btn-danger my-lg-3 my-3" onClick={handleExploreClick}><b>Explore</b></button>
      </div>
      
    </div>


        </section>
        <br/><br/>
        <h1 className="text-center" style={{
                color:'#dd1133',
                fontFamily:'Poppins',
                

              }}>Organized by Students' Professional Societies</h1>
              <hr style={{
              color: 'white'
              }}/>
        <section id="logo_sliders" >
        
    <div className={`${styles.slider_logo}`}>

<div className={`${styles.slider_track}`}>
  <div className={`${styles.slider1} `}>
  
  <h6 className="text-center" style={{
                color:'white',
                fontFamily:'Jura',
                justifyContent:'center',
                alignItems:'center',
                marginRight:'50px',
                fontSize:'2em',
                fontWeight:'bolder'

              }}>SAE India (Southern Edition)</h6>
  </div>
  <div className={`${styles.slider1} `}>
  
  <h6 className="text-center" style={{
                color:'white',
                fontFamily:'Jura',
                justifyContent:'center',
                alignItems:'center',
                marginRight:'50px',
                fontSize:'2em',
                fontWeight:'bolder'


              }}>Indian Society for Technical Education(ISTE)</h6>
  </div>
  <div className={`${styles.slider1} `}>
  
  <h6 className="text-center" style={{
                color:'white',
                fontFamily:'Jura',
                justifyContent:'center',
                alignItems:'center',
                marginRight:'50px',
                fontSize:'2em',
                fontWeight:'bolder'

              }}>Institute of Electrical and Electronics Engineers(IEEE)</h6>
  </div>
  <div className={`${styles.slider1} `}>
  
  <h6 className="text-center" style={{
                color:'white',
                fontFamily:'Jura',
                justifyContent:'center',
                alignItems:'center',
                marginRight:'50px',
                fontSize:'2em',
                fontWeight:'bolder'

              }}>International Association of Civil Engineering Students(IACES)</h6>
  </div>
  <div className={`${styles.slider1} `}>
  
  <h6 className="text-center" style={{
                color:'white',
                fontFamily:'Jura',
                justifyContent:'center',
                alignItems:'center',
                marginRight:'50px',
                fontSize:'2em',
                fontWeight:'bolder'

              }}>Consumer Club</h6>
  </div>
  <div className={`${styles.slider1} `}>
  
  <h6 className="text-center" style={{
                color:'white',
                fontFamily:'Jura',
                justifyContent:'center',
                alignItems:'center',
                marginRight:'50px',
                fontSize:'2em',
                fontWeight:'bolder'

              }}>
              Indian Green Building Council (IGBC)</h6>
  </div>
  <div className={`${styles.slider1} `}>
  
  <h6 className="text-center" style={{
                color:'white',
                fontFamily:'Jura',
                justifyContent:'center',
                alignItems:'center',
                marginRight:'50px',
                fontSize:'2em',
                fontWeight:'bolder'

              }}>American Society of Mechanical Engineers (ASME)</h6>
  </div>
  <div className={`${styles.slider1} `}>
  
  <h6 className="text-center" style={{
                color:'white',
                fontFamily:'Jura',
                justifyContent:'center',
                alignItems:'center',
                marginRight:'50px',
                fontSize:'2em',
                fontWeight:'bolder'

              }}>Apti-Forum Club</h6>
  </div>
  <div className={`${styles.slider1} `}>
  
  <h6 className="text-center" style={{
                color:'white',
                fontFamily:'Jura',
                justifyContent:'center',
                alignItems:'center',
                marginRight:'50px',
                fontSize:'2em',
                fontWeight:'bolder'

              }}>Maths Club</h6>
  </div>
  <div className={`${styles.slider1} `}>
  
  <h6 className="text-center" style={{
                color:'white',
                fontFamily:'Jura',
                justifyContent:'center',
                alignItems:'center',
                marginRight:'50px',
                fontSize:'2em',
                fontWeight:'bolder'

              }}>Robotics Club</h6>
  </div>
  <div className={`${styles.slider1} `}>
  
  <h6 className="text-center" style={{
                color:'white',
                fontFamily:'Jura',
                justifyContent:'center',
                alignItems:'center',
                marginRight:'50px',
                fontSize:'2em',
                fontWeight:'bolder'

              }}>Computer Society of India(CSI)</h6>
  </div>
  <div className={`${styles.slider1} `}>
  
  <h6 className="text-center" style={{
                color:'white',
                fontFamily:'Jura',
                justifyContent:'center',
                alignItems:'center',
                marginRight:'50px',
                fontSize:'2em',
                fontWeight:'bolder'

              }}>MCA Assosiation</h6>
  </div>
  <div className={`${styles.slider1} `}>
  
  <h6 className="text-center" style={{
                color:'white',
                fontFamily:'Jura',
                justifyContent:'center',
                alignItems:'center',
                marginRight:'50px',
                fontSize:'2em',
                fontWeight:'bolder'

              }}>Microsoft Campus Club(MCC)</h6>
  </div>
  <div className={`${styles.slider1} `}>
  
  <h6 className="text-center" style={{
                color:'white',
                fontFamily:'Jura',
                justifyContent:'center',
                alignItems:'center',
                marginRight:'50px',
                fontSize:'2em',
                fontWeight:'bolder'

              }}>Google Students Club</h6>
  </div>
  <div className={`${styles.slider1} `}>
  
  <h6 className="text-center" style={{
                color:'white',
                fontFamily:'Jura',
                justifyContent:'center',
                alignItems:'center',
                marginRight:'50px',
                fontSize:'2em',
                fontWeight:'bolder'

              }}>Institution of Engineers(IE)</h6>
  </div>
  <div className={`${styles.slider1} `}>
  
  <h6 className="text-center" style={{
                color:'white',
                fontFamily:'Jura',
                justifyContent:'center',
                alignItems:'center',
                marginRight:'50px',
                fontSize:'2em',
                fontWeight:'bolder'

              }}>Science Forum</h6>
  </div>
  <div className={`${styles.slider1} `}>
  
  <h6 className="text-center" style={{
                color:'white',
                fontFamily:'Jura',
                justifyContent:'center',
                alignItems:'center',
                marginRight:'50px',
                fontSize:'2em',
                fontWeight:'bolder'

              }}>Indian National Trust for Art and Cultural Heritage(INTACH)</h6>

  </div>


</div>

</div>


</section>

    <h1 style={{
                color:'#dd1133',
                fontFamily:'Poppins'
              }}>Contact Us</h1>
              <hr style={{
              border:'1px solid white'
              }}/>

        
    <div className="row" id="location">
        {/* Left Column */}
        <div className="col-md-6">
          <p className="lead" style={{color:'white'}}>Feel free to reach out to us!</p>
          <div style={{color:'white',fontSize:"20px"}} >
            
              <p>Address: <br/>{address}</p>
              <p>Phone: {phoneNumber}</p>
              <p>Email: {email}</p>
            
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-6 mb-4 text-center">
        <iframe className='map ' style={{borderRadius: '15px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.795634369296!2d77.84947511647749!3d9.526477260291959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06d3287794055d%3A0x9c7b889bf154fb86!2sMepco%20Schlenk%20Engineering%20College!5e0!3m2!1sen!2sin!4v1703528868735!5m2!1sen!2sin" width="90%" height="350px"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      
      <hr style={{color: 'white'}}/>

      <div className="row">
        <center>
      <div className="col-md-6">
        <br/>
        <p className='foot' style={{fontSize: '13px',color:"white"}}>©️2024, Mepco Schlenk Engineering College. All Rights Reserved.<br/>
        Designed and Developed by <a href="https://github.com/coffee-loves-code-2003" style={{fontSize: '13px',color:"#FFEBD8"}} target='_blank'>Vignesh S,</a> <a href="https://vijeshpethuram.web.app" style={{fontSize: '13px',color:"#FFEBD8"}} target='_blank'> Vijesh Pethuram K,</a> and <a href="https://jayanthdev.web.app" style={{fontSize: '13px',color:"#FFEBD8"}} target='_blank'>Jayanth Kumar R V</a> (3rd Year IT students)</p>
        
        </div><br/>
        </center>
      </div>


      </div>
      
      


      
              

    
    
    </body>
    
    </Fragment>
  );
}

export default Service;
