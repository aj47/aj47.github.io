import React, { Component } from "react";
import Twitter from './twitter_icon.svg';
import Email from './email_icon.svg';
import Google from './google.svg';
import Facebook from './facebook_icon.svg';

const marginRight = {
  marginRight : "10px"
}

class Footer extends Component {
  render() {
    return (
    <div className="footer">
      <div className="container">
        <div className="social">
          <img src={Email} style={marginRight} className="small-size"/>
          <img src={Facebook} style={marginRight}  className="small-size"/>
          <img src={Twitter} style={marginRight}  className="small-size"/>
          <img src={Google} className="small-size"/>
        </div>

        <div className="flex-row">
          For health professionals 
          <div className="horizontal-sep"> </div>
          For service providers
        </div>

        <div className="flex-row">
          Sitemap
          <div className="horizontal-sep"> </div>
          Accessibility
          <div className="horizontal-sep"> </div>
          Privacy
          <div className="horizontal-sep"> </div>
          Terms of use
          <div className="horizontal-sep"> </div>
          Copyright
          <div className="horizontal-sep"> </div>
          Contact us
        </div>
        <br></br>
        <div className="subtext">
          Copyright © Commonwealth of Australia ABN:36 342 015 855
        </div>
      </div>
    </div>
    )
  }
}

export default Footer;
    /* ---- Old Footer ----------
    <div className="container">

          <div className="my-row-footer">

            <div className="footer-column">
              <div className="footer-header">
                Key Topics
              </div>
              <hr className="footer-hr"></hr>
              <div className="footer-link"> Advocacy </div>
              <div className="footer-link"> Feedback and complaints </div>
              <div className="footer-link"> Quality in aged care </div>

            </div>

            <div className="footer-column">
              <div className="footer-header">
                Further Information
              </div>
              <hr className="footer-hr"></hr>
              <div className="footer-link"> Accessibillity </div>
              <div className="footer-link"> Resources </div>
              <div className="footer-link"> Privacy </div>
              <div className="footer-link"> Terms of use </div>
              <div className="footer-link"> Copyright </div>
              <div className="footer-link"> Contact us </div>

            </div>

            <div className="footer-column">
              <div className="footer-header">
                Share this page
              </div>
              <hr className="footer-hr"></hr>
              <img src={Email} style={marginRight} className="small-size"/>
              <img src={Facebook} style={marginRight}  className="small-size"/>
              <img src={Twitter} style={marginRight}  className="small-size"/>
              <img src={Google} className="small-size"/>
            </div>

          </div>
    </div>
    */

