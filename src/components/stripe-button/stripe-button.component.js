import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { FormattedMessage } from 'react-intl';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout
            label={
                <FormattedMessage
                    id='footer.donateButton'
                    defaultMessage='DONATE'
                />
            }
            name='Thank you'
            billingAddress
            shippingAddress
            image='http://www.svgshare.com/i/CUz.svg'
            description={`Your are contributing $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
