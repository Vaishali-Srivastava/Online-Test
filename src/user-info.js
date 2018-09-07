import React, { Component } from 'react';


class UserInfo extends React.Component {

    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(e) {
      e.preventDefault();
      
      const formData = {};
      for (const field in this.refs) {
        formData[field] = this.refs[field].value;
      }
      console.log('-->', formData);
    }
  
    render() {
      return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <input ref="phone" className="phone" type='tel' name="phone"/>
              <input ref="email" className="email" type='tel' name="email"/>
              <input type="submit" value="Submit"/>
            </form>
          </div>
      );
    }
  }
  
  export default UserInfo;