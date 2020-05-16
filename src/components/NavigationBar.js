import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { setLocale } from '../actions/actions_info';

import '../styles/scss/index.scss';

let style = {};
const languageOptions = [
    { key: 'English', text: 'English', value: 'en-US' },
    { key: 'Hindi', text: 'Hindi', value: 'hi-IN' },
];

class NavigationBar extends Component {
    render() {
        const { theme, setLocaleLanguage } = this.props;

        if (theme === 'dark') {
            style = {
                backgroundColor: '#24292d',
                position: 'inherit',
            };
        } else {
            style = {};
        }

        return (
            <div className='navbar' style={style}>
                <NavLink to='/'>
                    <p className='logo'>Jatin Grover</p>
                </NavLink>
                <nav>
                    <ul style={{ display: 'inline-block' }}>
                        <li>
                            <NavLink to='/misc' className='link'>
                                <FormattedMessage
                                    id='navbar.miscellaneous'
                                    defaultMessage='Miscellaneous'
                                />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/images' className='link'>
                                <FormattedMessage
                                    id='navbar.images'
                                    defaultMessage='Images'
                                />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contactMe' className='link'>
                                <FormattedMessage
                                    id='navbar.contactMe'
                                    defaultMessage='Contact Me'
                                />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/potterPage' className='link'>
                                <FormattedMessage
                                    id='navbar.harryPotter'
                                    defaultMessage='HP7'
                                />
                            </NavLink>
                        </li>
                        <li>
                            <Dropdown
                                button
                                className='icon'
                                floating
                                labeled
                                icon='world'
                                options={languageOptions}
                                text={
                                    <FormattedMessage
                                        id='navbar.language'
                                        defaultMessage='Language'
                                    />
                                }
                                onChange={(e, data) => {
                                    setLocaleLanguage(data.value);
                                }}
                            />
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    reducerInfo: state.reducerInfo,
});

const mapDispatchToProps = (dispatch) => ({
    setLocaleLanguage: (value) => dispatch(setLocale(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
