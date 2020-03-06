import React, { Component } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import IndianHead from './common/components/IndianHead';
import MoneyWallet from './common/components/MoneyWallet';

const marginRight = {
  marginRight: "6px"
};

export default class SocialMedia extends Component {
  render() {
    return (
      <div
        style={{ height: "300px", width: "100%", backgroundColor: "#484848" }}
      >
        {/* <h2>
          <span
            style={{ borderBottom: "2px solid", borderBottomColor: "red" }}
          >
            Follow me on Social Media
          </span>
        </h2> */}
        <div style={{margin: '50px 15px 50px 50px', float: 'left'}}>
        <IndianHead height={'200px'} width={'200px'} />
        </div>
        <div style={{borderLeft: '2px solid #929292', height:'80%', display: 'inline-block', verticalAlign: 'top', borderRadius: '50%', marginTop: '33px'}}></div>
        <div 
        style={{width: '300px', display: 'inline-block', verticalAlign: 'top', margin: '130px 0 0 20px', color: '#939598'}}>
          Hi, this website was made with love. I hope you liked it. This portfolio is amalgamation of variety of wonderful libraries
          </div>
        <div style={{margin: '50px 15px 50px 30px', display: 'inline-block'}}>
        <MoneyWallet height={'200px'} width={'200px'} />
        </div>
        <div style={{borderLeft: '2px solid #929292', height:'80%', display: 'inline-block', verticalAlign: 'top', borderRadius: '50%', marginTop: '33px'}}></div>
        <div 
        style={{width: '300px', display: 'inline-block', verticalAlign: 'top', margin: '130px 0 0 20px', color: '#939598'}}>
          It took hours and hours to build this website. Wanna donate few extra meals?
          </div>
        
        {/* <FaFacebookSquare size="2em" style={marginRight} />
        <FaTwitter size="2em" style={marginRight} />
        <FaInstagram size="2em" style={marginRight} />
        <FaYoutube size="2em" style={marginRight} /> */}
      </div>
    );
  }
}
