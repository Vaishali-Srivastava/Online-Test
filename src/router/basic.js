import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const BasicExample = () => (
    <Router>
        <div className="">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    </Router>
);

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

const Contact = () => (
    <div>
        <h2>Contact</h2>
    </div>
);

export default BasicExample;