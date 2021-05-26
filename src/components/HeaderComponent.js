import React,{ Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,Button, Modal, ModalHeader, ModalBody,Form, FormGroup, Input, Label } from 'reactstrap';            
import { NavLink } from 'react-router-dom';
import logo from "./videos/logo.jpg";

class Header extends Component {
    constructor(props) {
        super(props);
    
        
        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this)
      }
      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

      handleLogin(event){
          this.toggleModal();
        //   closing the modal
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
        

      }
    render() {
        return(
            <div>
                <Navbar dark expand="md" className="header" style={{zIndex:'1',position:'fixed',width:'100%'}}>
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src={logo} height="60" width="140" style={{paddingTop:'20px',marginRight:'50px'}} alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" href=".collabs" to='/home'> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'>About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/products'>Products</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/collabs'>Collaborators</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contact'> Contact Us</NavLink>
                            </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                {/* ml-auto will push it as much it can to the left */}
                                <NavItem>
                                    <Button className="headerb" outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader  toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                   {/* We use ref but ractstrp uses ref for other purpose so we are saying as innerref */}
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>

                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default Header;