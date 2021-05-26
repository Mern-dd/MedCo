import React, { Component } from 'react';
import Bg from "./videos/Bg.mp4" ; 
import logo from "./videos/logo.jpg";

function BackGround(){
        return(
            <React.Fragment>
                
                <video autoPlay loop muted 
                style={{position:"absolute",width:'100%',height:'100%',
                left:'50%',top:'50%',objectFit:'cover',transform:"translate(-50%,-50%)",zIndex:'-1',opacity: 0.6}}>
                <source src={Bg} type="video/mp4" />
                </video>
                <div className="Bg-overlay-text">
                <center><img src={logo} type="image/jpg" className="logo"></img>
                <p>We are a team of Clinicians, Scientists, Designers, MedTech Innovators and Engineers from Germany and India joined hands
                     with a motive to create and innovate,
                     affordable healthcare solutions for the unmet clinical needs.</p></center>
                </div>
                
                
               
                
            </React.Fragment>
        );
    
}

export default BackGround;