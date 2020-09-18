import React from 'react';
import { Dropdown, Menu, Sidebar } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { injectIntl } from 'react-intl';

import { toggleSidebar, setLocale } from '../../../actions/actions_info';

const SidebarExampleDimmed = (props) => {
    const {
        intl,
        children,
        toggleSidebarAction,
        setLocaleLanguageAction,
        history,
    } = props;
    const {
        reducerInfo: { showHideSidebar },
    } = props;

    const languageOptions = [
        { key: 'English', text: 'English', value: 'en-US' },
        { key: 'Hindi', text: 'Hindi', value: 'hi-IN' },
    ];
    return (
        <div>
            <Sidebar.Pushable>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    onHide={toggleSidebarAction}
                    vertical
                    visible={showHideSidebar}
                    width='thin'
                    direction='right'
                >
                    <Menu.Item
                        name={intl.formatMessage({
                            id: 'navbar.miscellaneous',
                            defaultMessage: 'Miscellaneous',
                        })}
                        onClick={() => {
                            history.push('/misc');
                            toggleSidebarAction();
                        }}
                    />
                    <Menu.Item
                        name={intl.formatMessage({
                            id: 'navbar.images',
                            defaultMessage: 'Images',
                        })}
                        onClick={() => {
                            history.push('/images');
                            toggleSidebarAction();
                        }}
                    />
                    <Menu.Item
                        name={intl.formatMessage({
                            id: 'navbar.contactMe',
                            defaultMessage: 'Contact Me',
                        })}
                        onClick={() => {
                            history.push('/contactMe');
                            toggleSidebarAction();
                        }}
                    />
                    <Menu.Item
                        name={intl.formatMessage({
                            id: 'navbar.harryPotter',
                            defaultMessage: 'HP7',
                        })}
                        onClick={() => {
                            history.push('/potterPage');
                            toggleSidebarAction();
                        }}
                    />
                    <Menu.Item>
                        <Dropdown
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
                    </Menu.Item>
                </Sidebar>

                <Sidebar.Pusher dimmed={showHideSidebar}>
                    {children}
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </div>
    );
};

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
)(withRouter(injectIntl(SidebarExampleDimmed)));
