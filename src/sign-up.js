import React, {Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SignUp extends Component {
    render (){
        return(
            <div className="form-group">
                <div className="container">
                    <Col sm={12}>
                        <Form className="form-box" autoComplete="off">
                            <FormGroup row>
                                <Label for="full_name" Col={12} className="text-left label-field">Full Name</Label> 
                                <Col sm={12}>
                                    <input type="text" name="full_name" id="full_name" className="input-field" placeholder="Full Name"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="email_address" Col={12} className="text-left label-field">Email Address</Label> 
                                <Col sm={12}>
                                    <input type="email" name="email_address" id="email_address" className="input-field" placeholder="Email Address"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="contact_no" Col={12} className="text-left label-field">Contact No.</Label> 
                                <Col sm={12}>
                                    <input type="number" name="contact_no" id="contact_no" className="input-field" placeholder="Contact No."/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="nationality" Col={12} className="text-left label-field">Nationality</Label> 
                                <Col sm={12}>
                                    <input type="text" name="nationality" id="nationality" className="input-field" placeholder="Nationality"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="password" Col={12} className="text-left label-field">Password</Label> 
                                <Col sm={12}>
                                    <input type="password" name="password" id="password" className="input-field" placeholder="*****"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="cn_password" Col={12} className="text-left label-field">Confirm Password</Label> 
                                <Col sm={12}>
                                    <input type="password" name="cn_password" id="cn_password" className="input-field" placeholder="*****"/>
                                </Col>
                            </FormGroup>
                            <FormGroup check className="text-left">
                                <Label check>
                                    <Input type="checkbox" />{''}  
                                    Accept all the conditions from the above.
                                </Label>
                            </FormGroup>
                            <Button color="success" >Create Account</Button>
                        </Form>
                    </Col>
                </div>
            </div>
        );     
    }
}

export default SignUp;