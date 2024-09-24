import React, { Component } from 'react'
import '../App.css'

export default class Nav extends Component {
    render() {
        return (
            <div className="nav">

                <div className="logo">
                    <img src="/assets/logo3.png" alt="logo image"/>
                <div className="loname">
                    <h1>AMBULANCE</h1>
                    <p>Your Emergency Partner</p>
                </div>
                </div>

                <div>
                    <ul className="con">
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>

            </div>
        )
    }
}


