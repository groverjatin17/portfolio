import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { MdError } from 'react-icons/md';
import { Popup } from 'semantic-ui-react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';

import validationSchema from './ValidationSchema';

function ErrorPopup(props) {
    const { error } = props;
    return (
        <Popup
            trigger={<MdError color='red' size='2em' />}
            content={error}
            position='top center'
        />
    );
}
function ContactMeForm(props) {
    const displayError = (errorName) => {
        const { mediaDevice } = props;
        if (mediaDevice === 'mobile') {
            return <p>{errorName}</p>;
        }
        return <ErrorPopup error={errorName} />;
    };

    return (
        <div>
            <Formik
                initialValues={{ name: '', email: '', query: '' }}
                validationSchema={validationSchema()}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    setTimeout(() => {
                        resetForm();
                        setSubmitting(false);
                    }, 2000);
                }}
            >
                {({
                    values,
                    touched,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                className={
                                    touched.name && errors.name ? 'error' : null
                                }
                                name='name'
                                type='text'
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder={props.intl.formatMessage({
                                    id: 'contactme.namePlaceholder',
                                    defaultMessage: 'Enter your Name',
                                })}
                            />
                            {touched.name && errors.name
                                ? displayError(errors.name)
                                : null}
                        </div>
                        <div>
                            <input
                                className={
                                    touched.email && errors.email
                                        ? 'error'
                                        : null
                                }
                                name='email'
                                type='text'
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder={props.intl.formatMessage({
                                    id: 'contactme.emailPlaceholder',
                                    defaultMessage: "What's your email?",
                                })}
                            />
                            {touched.email && errors.email
                                ? displayError(errors.email)
                                : null}
                        </div>
                        <div>
                            <textarea
                                className={
                                    touched.query && errors.query
                                        ? 'error'
                                        : null
                                }
                                name='query'
                                value={values.query}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder={props.intl.formatMessage({
                                    id: 'contactme.queryPlaceholder',
                                    defaultMessage: 'Your Questions...',
                                })}
                            />

                            {touched.query && errors.query
                                ? displayError(errors.query)
                                : null}
                        </div>

                        <div>
                            <button type='submit' disabled={isSubmitting}>
                                {props.intl.formatMessage({
                                    id: 'contactme.submitButton',
                                    defaultMessage: 'Send Message',
                                })}
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
}

const mapStateToProps = ({ reducerInfo }) => ({
    mediaDevice: reducerInfo.mediaDevice,
});

export default connect(mapStateToProps)(injectIntl(ContactMeForm));
