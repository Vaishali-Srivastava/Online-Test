import React,{Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Login extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: ' ',
            password: ' '
        };
      }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
      onSubmit = (e) => {
        e.preventDefault();
        const form = {
         email: this.state.email,
         password: this.state.password
         
        }
          {/* -----------you would send data to API to get results, I used database for ease, this also clears the form on submit----------------*/}
       // database.push(form);
        this.setState({
            email: '',
            password: ''
        })
        console.log('-->', form);
     }

    

    render() {
        return(
        <div className="main-panel">
            <div className="container">
                <Col sm={12}>
                    <Form className="form-box" autoComplete="off" onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Label for="exampleEmail" sm={12} className="text-left label-field">Email</Label>
                            <Col sm={12}>
                                <Input ref="email" type="email" name="email" id="exampleEmail" placeholder="user@abc.com" className="input-field" value={this.state.email} onChange={e => this.handleChange(e)} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="examplePassword" sm={12} className="text-left label-field">Password</Label>
                            <Col sm={12}>
                                <Input ref="password" type="password" name="password" id="examplePassword" placeholder="******" className="input-field" value={this.state.password} onChange={e => this.handleChange(e)} />
                            </Col>
                        </FormGroup>
                        <FormGroup check className="text-left">
                            <Label check>
                                <Input type="checkbox" />{' '}
                                Stay Logged In
                            </Label>
                        </FormGroup>
                        
                        <Button color="primary" onClick={(e) => this.onSubmit(e)}>Submit</Button>
                    </Form>
                </Col>
            </div>
        </div>
        );
    }
}

export default Login;