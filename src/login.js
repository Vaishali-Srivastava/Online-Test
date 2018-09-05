import React,{Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Login extends Component {
    render() {
        return(
        <div className="main-panel">
            <div className="container">
                <Col sm={12}>
                    <Form className="form-box" autoComplete="off">
                        <FormGroup row>
                            <Label for="exampleEmail" sm={12} className="text-left label-field">Email</Label>
                            <Col sm={12}>
                                <Input type="email" name="email" id="exampleEmail" placeholder="user@abc.com" className="input-field"/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="examplePassword" sm={12} className="text-left label-field">Password</Label>
                            <Col sm={12}>
                                <Input type="password" name="password" id="examplePassword" placeholder="******" className="input-field"/>
                            </Col>
                        </FormGroup>
                        <FormGroup check className="text-left">
                            <Label check>
                                <Input type="checkbox" />{' '}
                                Stay Logged In
                            </Label>
                        </FormGroup>
                        <Button color="primary">Submit</Button>
                    </Form>
                </Col>
            </div>
        </div>
        );
    }
}

export default Login;