import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { FormattedMessage } from 'react-intl';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey =
        'pk_test_51HLfecEhqCdcGpxn8MqnGeAlHZMkUpr03vhhMQqU5gwV3LkLqfrbIlRuijJif3YyXPFwcyaD96Q68rgeo10b410a004jy0lv2V';

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
