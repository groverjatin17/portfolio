import React from 'react';
import { Formik } from 'formik';
import { MdError } from 'react-icons/md';
import { Popup } from 'semantic-ui-react';
import { injectIntl } from 'react-intl';

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
                    console.log('ContactMe -> render -> values', values);
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
                            &nbsp;
                            {touched.name && errors.name ? (
                                <ErrorPopup error={errors.name} />
                            ) : null}
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
                            &nbsp;
                            {touched.email && errors.email ? (
                                <ErrorPopup error={errors.email} />
                            ) : null}
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
                            &nbsp;
                            {touched.query && errors.query ? (
                                <ErrorPopup error={errors.query} />
                            ) : null}
                        </div>

                        <div style={{ width: '430px' }}>
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

export default injectIntl(ContactMeForm);
