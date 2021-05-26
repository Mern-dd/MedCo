import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Row,Jumbotron} from 'reactstrap'; 
    import { NavLink } from 'react-router-dom';


    




function Products(props) {
return(
    <div>
    
                <div className="container " style={{fontSize:'18px',marginTop:'70px',marginBottom:'70px',backgroundColor:'whitesmoke'}}>
                <center className="section1 clearfix"><h1>Our Products:</h1></center><br></br>
           <div class="row">
               <div className="col-12 col-md m-1 ">
               <NavLink className="nav-link" to='/aboutus'>
                   <div className="card-container">
                       <div className="card">
                           <div className="side"><img src="/assets/images/acu.png" alt="AcuPlan" /></div>
                           <div className="side back"><b>AcuPlan</b><p>Closed-Loop Acupuncture Therapy guidance system</p></div>
                       </div>
                   </div>
                   </NavLink> 
               </div>
             
             
               <div className="col-12 col-md m-1 ">
               <NavLink className="nav-link" to='/scult'>
                   <div className="card-container">
                       <div className="card">
                           <div className="side"><img src="/assets/images/cancer.png" alt="Jimmy Eat World" /></div>
                           <div className="side back"><b>Mobile Cancer Care Unit</b><br></br><p>Specialized Research and Cancer Care Unit for Indian Populations</p></div>
                       </div>
                   </div>
                   </NavLink> 
               </div>
           
               <div className="col-12 col-md m-1">
               <NavLink className="nav-link" to='/drama'>
                       <div className="card-container">
                           <div className="card">
                               <div className="side"><img src="/assets/images/eye.png" alt="Jimmy Eat World" /></div>
                               <div className="side back"><b>Optical Intra-cranial Bypass Planning Software</b><p>Superimposition from and to state of the art Surgical System</p></div>
                           </div>
                       </div>
                       </NavLink> 
                   </div>
               </div>
            
               </div>
               
           
        
   
    </div>
            
            
       
    
);
}


export default Products;