import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { injectIntl } from 'react-intl';
import axios from 'axios';

const StripeCheckoutButton = ({ price, intl }) => {
    const priceForStripe = price * 100;
    const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

    const onToken = (token) => {
        // The token includes all the info such as credit card info. The amount to be deducted etc.
        console.log(token);

        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token,
            },
        })
            .then((response) => {
                console.log('response ', response);
                alert('Payment Successful');
            })
            .catch((error) => {
                console.log('Payment failed, check the error ', error);
                alert('There is an issue with the payment');
            });
    };

    return (
        <StripeCheckout
            label={intl.formatMessage({
                id: 'footer.donateButton',
                defaultMessage: 'DONATE',
            })}
            name='Thank you'
            billingAddress
            shippingAddress
            image='http://www.svgshare.com/i/CUz.svg'
            description={`You are contributing $${price}`}
            currency='INR'
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default injectIntl(StripeCheckoutButton);
