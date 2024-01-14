import React from 'react'
import mepco from '../Images/Mepco_Schlenk_Engineering_College_logo.png';
function About_College() {
  return (

    <section id="About">
      <div className="container-fluid col-10">
      <div className="row" >
      <div className="col-lg-6 col-md-6 col-12 order-1 ">
        <h1 className="display-4">About MSEC</h1>
        <p class="my-lg-2 my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus in voluptate quia sed enim placeat totam labore, consectetur velit id, fuga distinctio veritatis similique cum dolore non nostrum deleniti odit!
        </p>
        <button class="btn btn-danger my-lg-3 my-3">Move on</button>
      </div>
      <div className="col-lg-6 col-md-6 col-12 py-lg-0 py-3 order-sm-2">
      <img src={mepco} className="img-fluid"/>
      </div>
    </div>
      </div>


    </section>
    
  )
}

export default About_College
