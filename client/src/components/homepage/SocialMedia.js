import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import {
    TiSocialFacebook,
    TiSocialGithub,
    TiSocialLinkedin,
    TiSocialTwitter,
} from 'react-icons/ti';

import TipJar from '../../assets/images/tip-jar.png';
import IndianHead from '../common/components/lottie-animations/IndianHead';
import StripeCheckoutButton from '../stripe-button/stripe-button.component';

export default class SocialMedia extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer-column'>
                    <div className='indian-head'>
                        <IndianHead
                            height='100%'
                            width='100%'
                            additionalStyle={{
                                // margin: '50px 10px 50px 50px',
                                display: 'inline-block',
                            }}
                        />
                    </div>
                    <div className='divider' />
                    <div className='content'>
                        <p>
                            <FormattedMessage
                                id='footer.getInTouch'
                                defaultMessage='Get in touch with the creator. <br></br>Replies within 24 hours'
                                values={{
                                    br: () => <br />,
                                }}
                            />
                        </p>
                        <div>
                            <TiSocialFacebook className='social-media-icon' />
                            <TiSocialGithub className='social-media-icon' />
                            <TiSocialLinkedin className='social-media-icon' />
                            <TiSocialTwitter className='social-media-icon' />
                        </div>
                    </div>
                </div>
                <div className='footer-column'>
                    <img src={TipJar} alt='tipjar' className='tipjar' />
                    <div className='divider' />
                    <div className='content'>
                        <p>
                            <FormattedMessage
                                id='footer.donateDesc'
                                defaultMessage='It took hours and hours to build this website. <br></br>Wanna donate few extra meals?'
                                values={{
                                    br: () => <br />,
                                }}
                            />
                        </p>
                        <center>
                            <StripeCheckoutButton price={5} />
                        </center>
                    </div>
                </div>
                <div className='termsFooter'>
                    <p>
                        |
                        <a href='#privacy'>
                            <FormattedMessage
                                id='footer.privacyPolicy'
                                defaultMessage='PRIVACY POLICY'
                            />
                        </a>
                        |
                        <a href='#terms'>
                            <FormattedMessage
                                id='footer.termsOfService'
                                defaultMessage='TERMS OF SERVICE'
                            />
                        </a>
                        |
                    </p>
                </div>
            </div>
        );
    }
}
