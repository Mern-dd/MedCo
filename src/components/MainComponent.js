import React, { Component } from 'react';
import Header from "./HeaderComponent";
import Products from './ProductComponent';
import Bg from "./BackGroundComponent";
import About from './AboutusComponent';
import Contact from './contactComponent';
import Collabs from './CollabsComponent';

import {Switch,Route,Redirect,BrowserRouter as Router} from 'react-router-dom';

class Main extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <Router>
                <Header></Header>

               
                <Bg></Bg>
                <About></About>
                <Products></Products>
                <Collabs></Collabs>
                <Contact></Contact>
                </Router>
               
            </React.Fragment>
        );
    }
}

export default Main;