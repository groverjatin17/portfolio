import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import { Dropdown } from 'semantic-ui-react'
import { connect } from "react-redux";

import {setLocale} from '../actions/actions_info';

import "../styles/scss/index.scss";
let style={};
const languageOptions = [
    { key: 'English', text: 'English', value: 'en-US' },
    { key: 'Hindi', text: 'Hindi', value: 'hi-IN' },
  ]
  
class NavigationBar extends Component {
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
                <Link to="/">
                    <p className='logo'>
                        Jatin Grover
                    </p>
                </Link>
                <nav>
                    <ul style={{display: 'inline-block'}}>
                        <li ><Link to="/" className='link'>Projects</Link></li>
                        <li >
                            <Link to="/images" className='link'>
                                <FormattedMessage 
                                    id="navbar.images" 
                                    defaultMessage="Images"
                                />
                            </Link>
                        </li>
                        <li >
                            <Link to="/contactMe" className='link'>
                                <FormattedMessage 
                                    id="navbar.contactMe" 
                                    defaultMessage="Contact Me"
                                />
                            </Link>
                        </li>
                        <li ><Link to="/potterPage" className='link'>
                                <FormattedMessage 
                                    id="navbar.harryPotter" 
                                    defaultMessage="HP7"
                                />
                            </Link>
                        </li>
                        <li >
                        <Dropdown
                            button
                            className='icon'
                            floating
                            labeled
                            icon='world'
                            options={languageOptions}
                            text={<FormattedMessage 
                                    id="navbar.language" 
                                    defaultMessage="Language"
                            />}
                            onChange={(e, data)=>{this.props.setLocale(data.value);
                            }}
                        />
                        
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    reducerInfo: state.reducerInfo
  });

const mapDispatchToProps = dispatch => {
return {
    setLocale: (value) => dispatch(setLocale(value))
}
}
  export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
  