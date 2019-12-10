import React, { Component } from "react";
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import TopBar from '../TopBar/TopBar';
import PhoneBlue from '../phoneBlue.svg';
import RightArrow from '../arrow-right.png';

import FeeEstimator from '../NavBar/fee_estimator.svg';
import Referral from '../NavBar/referral.svg';
import Feedback from '../NavBar/feedback.svg';
import Advocacy from '../NavBar/advocacy.svg';
import Finder from '../NavBar/finder.svg';
import NonCompliance from '../NavBar/non-compliance.svg';



class Tools extends Component {
  render() {
    return (
      <div className="tools">

        <TopBar> </TopBar>
        <div className="nav-bar"> <NavBar> </NavBar> </div>

        <div className="service-header">
          <div className="container">
            <div className="white-text"> Tools</div>

            <div className="banner-right">
              <div className="circle-icon" >
               <img src={PhoneBlue} className="icon" alt="Phone"/> 
              </div>
              <div>
                <div className="phone-title">
                  Contact us
                </div>
                <div className="phone-number">
                  1800 200 422
                </div>
                <div className="open-times">
                  Monday - Friday 8am - 8pm
                </div>
                <div className="open-times">
                  Saturday 10am - 2pm
                </div>
              </div>
            </div>


          </div>
        </div>
        <div className="container">

          <div className="flex-row" style={{justifyContent: 'center'}}>

            <div className="white-step-box" >
              <a href="Assessment/Register" style={{height: '100%', width: '100%'}}>
                <div className="flex-row" style={{height: '45%', padding: '20px', flexWrap: 'nowrap'}}>
                  <img src={Referral} alt="Referral" className="tool-icon"/>
                  <div className="step-title" style={{marginTop: '0'}}> Referral form </div>
                </div>
                <hr></hr>
                <div className="learn-more">
                  Learn more
                  <img src={RightArrow} className="right-arrow"/>
                </div>
              </a>
            </div>

            <div className="white-step-box" >
              <a href="Assessment/Register" style={{height: '100%', width: '100%'}}>
                <div className="flex-row" style={{height: '45%', padding: '20px', flexWrap: 'nowrap'}}>
                  <img src={FeeEstimator} alt="Referral" className="tool-icon"/>
                  <div className="step-title" style={{marginTop: '0'}}> Fee Estimator</div>
                </div>
                <hr></hr>
                <div className="learn-more">
                  Learn more
                  <img src={RightArrow} className="right-arrow"/>
                </div>
              </a>
            </div>


            <div className="white-step-box" >
              <a href="Assessment/Register" style={{height: '100%', width: '100%'}}>
                <div className="flex-row" style={{height: '45%', padding: '20px', flexWrap: 'nowrap'}}>
                  <img src={Finder} alt="Referral" className="tool-icon"/>
                  <div className="step-title" style={{marginTop: '0'}}> Find a service provider</div>
                </div>
                <hr></hr>
                <div className="learn-more">
                  Learn more
                  <img src={RightArrow} className="right-arrow"/>
                </div>
              </a>
            </div>


            <div className="white-step-box" >
              <a href="Assessment/Register" style={{height: '100%', width: '100%'}}>
                <div className="flex-row" style={{height: '45%', padding: '20px', flexWrap: 'nowrap'}}>
                  <img src={NonCompliance} alt="Referral" className="tool-icon"/>
                  <div className="step-title" style={{marginTop: '0'}}> Non compliance service finder</div>
                </div>
                <hr></hr>
                <div className="learn-more">
                  Learn more
                  <img src={RightArrow} className="right-arrow"/>
                </div>
              </a>
            </div>


            <div className="white-step-box" >
              <a href="Assessment/Register" style={{height: '100%', width: '100%'}}>
                <div className="flex-row" style={{height: '45%', padding: '20px', flexWrap: 'nowrap'}}>
                  <img src={Feedback} alt="Referral" className="tool-icon"/>
                  <div className="step-title" style={{marginTop: '0'}}> Feedback and Complaints</div>
                </div>
                <hr></hr>
                <div className="learn-more">
                  Learn more
                  <img src={RightArrow} className="right-arrow"/>
                </div>
              </a>
            </div>


            <div className="white-step-box" >
              <a href="Assessment/Register" style={{height: '100%', width: '100%'}}>
                <div className="flex-row" style={{height: '45%', padding: '20px', flexWrap: 'nowrap'}}>
                  <img src={Advocacy} alt="Referral" className="tool-icon"/>
                  <div className="step-title" style={{marginTop: '0'}}> Advocacy </div>
                </div>
                <hr></hr>
                <div className="learn-more">
                  Learn more
                  <img src={RightArrow} className="right-arrow"/>
                </div>
              </a>
            </div>

          </div>
        </div>
        <Footer/> 

      </div>

    );
  }
}

export default Tools;
