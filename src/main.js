import React from 'react';
import {BrowserRouter as Router,Route, Link, Switch} from 'react-router-dom';
import {   Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu,
    DropdownItem , Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import Index from './reactjs/index';
import ReactjsOverview from './reactjs/reactjs_overview';
import ReactjsEnvironmentSetup from './reactjs/reactjs_environment_setup';
import ReactjsComponents from './reactjs/reactjs_components';
import ReactjsJsx from './reactjs/reactjs_jsx';
import ReactjsState from './reactjs/reactjs_state';
import ReactjsPropsOverview from './reactjs/reactjs_props_overview';
import ReactjsPropsValidation from './reactjs/reactjs_props_validation';
import ReactjsComponentApi from './reactjs/reactjs_component_api';
import ReactjsComponentLifeCycle from './reactjs/reactjs_component_life_cycle';
import ReactjsForms from './reactjs/reactjs_forms';
import ReactjsEvents from './reactjs/reactjs_events';


export default class Main extends React.Component {
        constructor(props) {
          super(props);
      
          this.toggle = this.toggle.bind(this);
          this.state = {
            isOpen: false
          };
        }
        toggle() {
          this.setState({
            isOpen: !this.state.isOpen
          });
        }
        
    render(){
        return(
            <div>
                <header role="header" data-qa="header" className="top-navigation">
                    <div className="container">
                        <Navbar expand="md"  className="pl-0 pr-0">
                            <NavbarBrand href="/">Tutorials Point Fantasy</NavbarBrand>
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="nav-wrapper ml-auto" navbar>
                                    <NavItem>
                                        <NavLink href="javascript:void(0)">Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="javascript:void(0)">Q/A</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="javascript:void(0)">Library</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="javascript:void(0)">Videos</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="javascript:void(0)">Tutors</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="javascript:void(0)">Coding Ground</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </div>
                </header>
                <section className="main-wrapper" role="main">
                    <div className="container">
                            <Router>
                                <Row>
                                    <Col sm="4">
                                        <aside className="sidebar-wrap">
                                            <h4 class="title-head">HTML and CSS</h4>
                                                <div>
                                                <ListGroup className="list-panel">
                                                    <ListGroupItem>
                                                        <NavLink exact href="/reactjs/index">ReactJS - Home</NavLink>
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        <NavLink exact href="/reactjs/overview">Overview</NavLink>
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        <NavLink exact href="/reactjs/reactjs_environment_setup">ReactJS - Environment Setup</NavLink>
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        <NavLink  exact href="/reactjs/reactjs_jsx">ReactJS - JSX</NavLink>
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        <NavLink exact href="/reactjs/reactjs_components">ReactJS - Components</NavLink>
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        <NavLink exact href="/reactjs/reactjs_state">ReactJS - State</NavLink>
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        <NavLink exact href="/reactjs/reactjs_props_overview">ReactJS - Props Overview</NavLink>
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        <NavLink exact href="/reactjs/reactjs_props_validation">ReactJS - Props Validation</NavLink>
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        <NavLink exact href="/reactjs/reactjs_component_api">ReactJS - Component API</NavLink>
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        <NavLink exact href="/reactjs/reactjs_component_life_cycle">ReactJS - Component Life Cycle</NavLink>
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        <NavLink exact href="/reactjs/reactjs_forms">ReactJS - Forms</NavLink>
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        <NavLink exact href="/reactjs/reactjs_events">ReactJS - Events</NavLink>
                                                    </ListGroupItem>
                                                    
                                                </ListGroup>
                                                
                                                </div>
                                        </aside>
                                    </Col>
                                    <Col sm="8">
                                        <div className="right-wrapper">
                                            <Switch>
                                                <Route path="/reactjs/index" component={Index} />
                                                <Route path="/reactjs/overview" component={ReactjsOverview} />
                                                <Route path="/reactjs/reactjs_environment_setup" component={ReactjsEnvironmentSetup} />
                                                <Route path="/reactjs/reactjs_jsx" component={ReactjsJsx} />
                                                <Route path="/reactjs/reactjs_components" component={ReactjsComponents} />
                                                <Route path="/reactjs/reactjs_state" component={ReactjsState} />
                                                <Route path="/reactjs/reactjs_props_overview" component={ReactjsPropsOverview} />
                                                <Route path="/reactjs/reactjs_props_validation" component={ReactjsPropsValidation} />
                                                <Route path="/reactjs/reactjs_component_api" component={ReactjsComponentApi} />
                                                <Route path="/reactjs/reactjs_component_life_cycle" component={ReactjsComponentLifeCycle} />
                                                <Route path="/reactjs/reactjs_forms" component={ReactjsForms} />
                                                <Route path="/reactjs/reactjs_events" component={ReactjsEvents} />
                                            </Switch>
                                            <p>React is a front-end library developed by Facebook. It is used for handling the view layer for web and mobile apps. ReactJS allows us to create reusable UI components. It is currently one of the most popular JavaScript libraries and has a strong foundation and large community behind it.</p>
                                            <h4 className="main-title">Audience</h4>
                                            <p>This tutorial will help JavaScript developers who look ahead to deal with ReactJS for the first time. We will try to introduce every concept by showing simple code examples that can be easily understood. After finishing all the chapters, you will feel confident working with ReactJS. As a bonus we will introduce additional elements that work well with ReactJS to help you learn the best practices and follow the modern JavaScript trends.</p>
                                            <h4 className="main-title">Prerequisites</h4>
                                            <p>If you want to work with ReactJS, you need to have solid knowledge of JavaScript, HTML5, and CSS. Even though ReactJS doesn't use HTML, the JSX is similar so your HTML knowledge will be very helpful. We will explain this more in one of the next chapters. We will also use EcmaScript 2015 syntax so any knowledge in this area can be helpful.</p>
                                            <div className="btn-wrapper clearfix">
                                                <NavLink href="javascript:void(0)" className="prev-btn btn">Previous</NavLink>
                                                <NavLink href="javascript:void(0)" className="next-btn btn">Next</NavLink>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Router>
                    </div>
                </section>
            </div>
        );
    }
}



