import React, { Component } from "react";
import {FormattedMessage} from 'react-intl';

import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";

import TipJar from '../../assets/tip-jar.png'
import IndianHead from '../common/components/IndianHead';

import '../../styles/scss/index.scss';

export default class SocialMedia extends Component {
  render() {
    return (
      <div className='footer' >
        <div className='footer-column'>
          <div className='indian-head'>
            <IndianHead height={'200px'} width={'200px'} />
          </div>
          <div className='divider'></div>
          <div className='content'> 
            <FormattedMessage
              id='footer.getInTouch'
              defaultMessage='Get in touch with the creator'
            />
            <br />
            <TiSocialFacebook className='social-media-icon' />
            <TiSocialGithub className='social-media-icon'/>
            <TiSocialLinkedin className='social-media-icon'/>
            <TiSocialTwitter className='social-media-icon'/>
          </div>
        </div>
        <div className= 'footer-column'>
          <img src={TipJar} alt='tipjar' className='tipjar' />
          <div className='divider'></div>
            <div className='content'> 
              <FormattedMessage
                id='footer.donateDesc'
                defaultMessage='It took hours and hours to build this website. Wanna donate few extra meals?'
              />
             <button className='' onClick={() => {console.log('do  this');}} >
               <FormattedMessage
                id='footer.donateButton'
                defaultMessage='DONATE'
              />
             </button>
          </div>
        </div>
        <div className='termsFooter' >
          <p>| <a href='#privacy' >
            <FormattedMessage
              id='footer.privacyPolicy'
              defaultMessage='PRIVACY POLICY'
            />
          </a> | <a href='#terms'>
            <FormattedMessage
              id='footer.termsOfService'
              defaultMessage='TERMS OF SERVICE'
            />
          </a>|</p>
        </div>
      </div>
    );
  }
}
