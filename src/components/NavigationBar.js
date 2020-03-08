import React, { Component } from 'react'
import "../styles/scss/index.scss"

export default class NavigationBar extends Component {
    render() {
        return (
            <div style={{width:'100%', height: '46px', verticalAlign: 'middle'}}> 
          <p className='logo' style={{color: 'black'}}>Jatin Grover</p>

                <nav style={{display: 'inline', float:'right', height: '100%'}}>
                    <ul style={{display: 'inline-block'}}>
                        <li style={{display: 'inline', marginRight: '10px'}}><a href='#projects'>Projects</a></li>
                        <li style={{display: 'inline', marginRight: '10px'}}><a href='#skills'>Skills</a></li>
                        <li style={{display: 'inline', marginRight: '10px'}} ><a href='#contactMe'>Contact Me</a></li>
                        <li style={{display: 'inline', marginRight: '10px'}}><a href='#hp7'>HP7</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
