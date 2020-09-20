import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Dropdown, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { setLocale, toggleSidebar } from '../actions/actions_info';

let style = {};
const languageOptions = [
    { key: 'English', text: 'English', value: 'en-US' },
    { key: 'Hindi', text: 'Hindi', value: 'hi-IN' },
    { key: 'Punjabi', text: 'Punjabi', value: 'pa-IN' },
];

class NavigationBar extends Component {
    render() {
        const {
            theme,
            setLocaleLanguageAction,
            toggleSidebarAction,
        } = this.props;
        const { intl } = this.props;

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
                    <ul>
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
                                text={intl.formatMessage({
                                    id: 'navbar.language',
                                    defaultMessage: 'Language',
                                })}
                                onChange={(e, data) => {
                                    setLocaleLanguageAction(data.value);
                                }}
                            />
                        </li>
                    </ul>
                    <Button onClick={toggleSidebarAction}>
                        <Icon name='sidebar' fitted />
                    </Button>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    reducerInfo: state.reducerInfo,
});

const mapDispatchToProps = (dispatch) => ({
    setLocaleLanguageAction: (value) => dispatch(setLocale(value)),
    toggleSidebarAction: () => dispatch(toggleSidebar()),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(injectIntl(NavigationBar));
