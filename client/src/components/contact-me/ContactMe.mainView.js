import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import NavigationBar from '../NavigationBar';
import ContactMeForm from './ContactMeForm';

import { CONTACTME_LETTER_IMAGE } from '../common/global-constants/ContactMe.consts';
import Sidebar from '../common/components/Sidebar';

class ContactMe extends Component {
    render() {
        return (
            <Sidebar>
                <NavigationBar theme='dark' />
                <div className='contactme-container'>
                    <h1>
                        <FormattedMessage
                            id='contactme.heading'
                            defaultMessage='Have any Questions?'
                        />
                    </h1>
                    <div>
                        <img
                            src={CONTACTME_LETTER_IMAGE}
                            alt='letter-outline'
                        />
                        <ContactMeForm />
                    </div>
                </div>
            </Sidebar>
        );
    }
}

export default ContactMe;
