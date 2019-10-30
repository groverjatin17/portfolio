import React, { Component } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const marginRight = {
  marginRight: "6px"
};
export default class SocialMedia extends Component {
  render() {
    return (
      <div
        style={{ height: "100px", width: "100%", backgroundColor: "#ecf0f1" }}
      >
        <h2>
          <span
            style={{ borderBottom: "2px solid", borderBottomColor: "red" }}
          >
            Follow me on Social Media
          </span>
        </h2>
        <FaFacebookSquare size="2em" style={marginRight} />
        <FaTwitter size="2em" style={marginRight} />
        <FaInstagram size="2em" style={marginRight} />
        <FaYoutube size="2em" style={marginRight} />
      </div>
    );
  }
}
