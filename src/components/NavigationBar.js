/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import "../styles/scss/index.scss";
let style={};

export default class NavigationBar extends Component {
    render() {
        
        if (this.props.theme === 'dark') {
            style = {
                backgroundColor: '#24292d',
                position: 'inherit'
            }
        } else {
            style= {}
        }

        return (
            <div className='navbar' style={style}> 
             <Link to="/"><p className='logo'>Jatin Grover</p></Link>

                <nav>
                    <ul style={{display: 'inline-block'}}>
                        <li ><Link to="/" className='link'>Projects</Link></li>
                        <li ><Link to="/images" className={'link'}>Images</Link></li>
                        <li ><Link to="/" className={'link'}>Contact Me</Link></li>
                        <li ><Link to="/potterPage" className={'link'}>HP7</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
