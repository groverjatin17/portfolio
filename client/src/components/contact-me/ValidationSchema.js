import * as Yup from 'yup';
import { FormattedMessage } from 'react-intl';

import React from 'react';

export default function ValidationSchema(props) {
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(
                2,
                <FormattedMessage
                    id='contactme.nameValidation.min'
                    defaultMessage='Name should contain minimum of 2 characters'
                />
            )
            .max(
                25,
                <FormattedMessage
                    id='contactme.nameValidation.max'
                    defaultMessage='Name should be shorter than 25 characters'
                />
            )
            .required(
                <FormattedMessage
                    id='contactme.nameValidation.required'
                    defaultMessage='Name is required'
                />
            ),
        email: Yup.string()
            .email(
                <FormattedMessage
                    id='contactme.emailValidation'
                    defaultMessage='Please enter a valid Email Address'
                />
            )
            .required(
                <FormattedMessage
                    id='contactme.emailValidation.required'
                    defaultMessage='Email address is required'
                />
            ),
        query: Yup.string()
            .min(
                20,
                <FormattedMessage
                    id='contactme.queryValidation.min'
                    defaultMessage='Please enter 20 characters atleast'
                />
            )
            .required(
                <FormattedMessage
                    id='contactme.queryValidation.required'
                    defaultMessage='Please enter your Query'
                />
            ),
    });
    return validationSchema;
}
