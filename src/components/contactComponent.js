import React, { Component } from 'react';
import Bg from "./videos/Bg.mp4" ; 
import logo from "./videos/logo.jpg";
import { render } from '@testing-library/react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class Contact extends Component{
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
      render(){
        return(
            <React.Fragment>
                
               <div className="container">
                    <section class="section1 clearfix">
                        <div class="textcenter">
                            <span class="shtext">Contact Us</span>
                            <span class="seperator"></span>
                            <h1>Drop Us a Mail</h1>
                        </div>
                    </section>
                    <section class="section2 clearfix">
                   <div className="row row-content">
                       <div className="col-12 col-md-6">
                                    <div style={{ height: '100vh', width: '100%' }}>
                        <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyC-kqB9dfI-XLGX5hXD9AscERPE3nrlqBc' }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                        >
                        <AnyReactComponent
                            lat={80.2423}
                            lng={12.9908}
                            text="My Marker"
                        />
                        </GoogleMapReact>
                    </div>
                       </div>
                       <div class="col2 column2 last">
                            <div class="sec2innercont">
                                    <div class="sec2addr">
                                        <p>No1, 5th Floor, C Block, Phase 2, IIT Madras Research Park, Chennai, Tamil Nadu - 600113</p>
                                        <p><i class="fas fa-map-marker-alt"></i><span class="collig">Phone :</span> +91 9715707807</p>
                                        <p><span class="collig">Email :</span> contact@curneu.com</p>
                                        
                                    </div>
                            </div>
                            
                            <div class="sec2contactform">
                                <h3 class="sec2frmtitle">Want to Know More?? Drop Us a Mail</h3>
                                <form action="">
                                        <div class="clearfix">
                                            <input class="col2 first" type="text" placeholder="FirstName"/>
                                            <input class="col2 last" type="text" placeholder="LastName"/>
                                        </div>
                                        <div class="clearfix">
                                            <input  class="col2 first" type="Email" placeholder="Email" />
                                            <input class="col2 last" type="text" placeholder="Contact Number"/>
                                        </div>
                                        <div class="clearfix">
                                            <textarea name="textarea" id="" cols="30" rows="7">Your message here...</textarea>
                                        </div>
                                        <div class="clearfix"><input type="submit" value="Send"/></div>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                    </section>
                </div>
                
               
                
            </React.Fragment>
        );
        }
    
}

export default Contact;