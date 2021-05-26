import React, { Component } from 'react';
import collabs from './videos/colloabs.png';

function Collabs(){
        return(
            <React.Fragment>
                <div className="collabs" style={{fontSize:'18px',marginTop:'70px',marginBottom:'80px'}}>
                <center className="section1 clearfix "><h1>Our collaborators:</h1></center><br></br>
                <center><img src={collabs} type="image/png"></img></center>
                </div>
               
                
            </React.Fragment>
        );
    
}

export default Collabs;