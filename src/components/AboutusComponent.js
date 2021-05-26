import React, { Component } from 'react';
import Bg from "./videos/Bg.mp4" ; 
import logo from "./videos/logo.jpg";

function About(){
        return(
            <React.Fragment>
               <div className="container" style={{fontSize:'18px',marginTop:'110px',marginBottom:'50px',paddingLeft:'40px',paddingRight:'40px',backgroundColor:'whitesmoke'}}>
              <center className="section1 clearfix"><h1>About Us</h1></center><br></br> 
               <p>
               Curneu MedTech Innovation is a health care technology firm based at Heidelberg, Germany. We work on a motive of building an affordable and innovative healthcare solutions that address the clinical needs thereby bringing better lives for the needy.
               As our motto says, "Care beyond reach", the goal of Curneu is to bring the world community smaller such a way each one of the world's population receives better healthcare. Curneu focuses on delivering quality affordable healthcare technology to developing countries.
               A strong team of experienced clinicians, world class scientific team and medical technologists, advisory members, research, and development team on an Indo-German initiative, work alongside with global collaborators at Curneu MedTech Innovations.
               </p><br></br>
               <div className="row row-content">
                       <div className="col-12 col-md-6" style={{borderLeft:'0.2px solid gray'}}>
                       <h3 style={{color:'#57CBCC'}}>Vision</h3><br></br> 
                       <p>We envision to address the complex clinical needs alongside to make healthcare technology reach everyone around the globe</p>
                       </div>
                       <div className="col-12 col-md-6" style={{borderLeft:'0.2px solid gray'}}>
                       <h3 style={{color:'#57CBCC'}}>Mission</h3><br></br>
                       <p>To outfit people with affordable as well as quality health care technology products.</p>
                               
                       </div>
               </div>
              <br></br>
    
                        {/* <h5>Our Mission:</h5>
                        <p>To outfit people with affordable as well as quality health care technology products.</p>
                        <br></br>
                        <h5>Our Vision:</h5>
                        <p>We envision to address the complex clinical needs alongside to make healthcare technology reach everyone around the globe.</p>
               
                */}
               
               </div> 
            </React.Fragment>
        );
    
}

export default About;