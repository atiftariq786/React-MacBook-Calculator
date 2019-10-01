import React from 'react';
//import ReactDOM from 'react-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import Navbar from 'react-bootstrap/Navbar';
import "./style.css";

const navbar = ()=> {

    return (
        <div>     
            <Navbar expand="sm">
                <h3>{"React MacBook Calculator"}</h3>
                    <div>
                        <Navbar.Brand href="https://github.com/atiftariq786">
                            <FontAwesomeIcon icon={faGithub} size="2x" />          
                        </Navbar.Brand>

                        <Navbar.Brand href="https://www.linkedin.com/in/atif-tariq-5b00b089/">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />            
                        </Navbar.Brand> 
                            
                    </div>               
            </Navbar>
            
        </div>        
    )
}
export default navbar;

