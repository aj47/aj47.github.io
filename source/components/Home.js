import React, { Component } from 'react';

import FurtherImg from '../img/further_info.svg';
import ScrollableAnchor from 'react-scrollable-anchor'

import NavBar from './NavBar/NavBar';
import TopBar from './TopBar/TopBar';
import StepBox from './StepBox/StepBox';
import OptionBox from './OptionBox/OptionBox';
import QuoteBox from './QuoteBox/QuoteBox';
import NumberDivider from './NumberDivider/NumberDivider';
import FlatButton from './FlatButton/FlatButton'
import FlatButtonBlue from './FlatButtonBlue/FlatButtonBlue'
import Footer from './Footer/Footer'

import Style from './style.css';
import Phone from './phone.svg';
import Phone2 from '../img/contact2.png';
import PhoneBlue from './phoneBlue.svg';
import CheckBox from './checkbox.svg';
import HomeDecor from '../img/mac_wave.png'
import RightArrow from './arrow-right.png';

const white = {
  backgroundColor: 'white',
  color: '#1F6193'
}

class Home extends Component {
  render() {
    return (
      <div >
        <TopBar> </TopBar>
        <div className="nav-bar"> <NavBar> </NavBar> </div>

        <div className="header-image"> 
          <div className="myBanner">
            <div className="banner-left">
              <div className="banner-text">
                <i> My Aged Care  </i> is the start point to find information and access Australian Government funded aged care services.
              </div>
            </div>
            <div className="banner-right">
              <div >
               <img src={Phone2} className="icon" alt="Phone"/> 
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
          <h3> To get help, you need to </h3>
          <br></br>
          <br></br>
          <div className="my-row">
            <div className="mobile-box">
              <div className="white-step-box">
                <a href="Assessment/Register" style={{height: '100%'}}>
                  <div className="circle-icon">
                    <div className="white-text"> 1 </div>
                  </div>
                  <div className="flex-column">
                    <div className="step-title"> Register with <i> My Aged Care </i> </div>
                    <div className="grey-text"> Learn about aged care and register to start. </div>
                  </div>
                  <hr></hr>
                  <div className="learn-more">
                    Learn more
                    <img src={RightArrow} className="right-arrow"/>
                  </div>
                </a>
              </div>
              <div className="white-step-box with-border">
                <a href="Assessment/GetAssessment" style={{height: '100%'}}>
                  <div className="circle-icon">
                    <div className="white-text"> 2 </div>
                  </div>
                  <div className="flex-column">
                    <div className="step-title"> Get an assessment </div>
                    <div className="grey-text"> You need to be assessed to access funded services.</div>
                  </div>
                  <hr></hr>
                  <div className="learn-more">
                    Learn more
                    <img src={RightArrow} className="right-arrow"/>
                  </div>
                </a>
              </div>
              <div className="white-step-box">
                <a href="/Services" style={{height: '100%'}}>
                  <div className="circle-icon">
                    <div className="white-text"> 3 </div>
                  </div>
                  <div className="flex-column">
                    <div className="step-title"> Find a service provider </div>
                    <div className="grey-text"> Find local services after your assessment.</div>
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

          <h3> What care is available </h3>

          <div className="my-row">
            <StepBox imgSrc1={require('../img/home_respite.jpg')} imgSrc2={require('../img/home_respite.jpg')}title="Help to stay at home"> </StepBox>
            <StepBox imgSrc1={require('../img/home_help.jpg')} imgSrc2={require('../img/home_help.jpg')}title="Respite and short term care">  </StepBox>
            <StepBox imgSrc1={require('../img/home_aged.jpg')} imgSrc2={require('../img/home_aged.jpg')} title="Aged care homes"></StepBox>
          </div>


          <h3> Popular Topics</h3>
          <hr></hr>
        <div className="flex-row">
          <div className="flex-column popular-column">

            <div className="popular-topic">
              <div className="flex-row" style={{alignItems: 'flex-start', marginTop: '50px', flexWrap: 'nowrap'}}>
                <div>
                  <div className="filler-image"><img src={require('../img/timeframes.jpg')}  className="filler-image" /></div>
                </div>
                <div>
                  <div>
                    <div className="size-22 blue-text"> Timeframes</div>
                    <p> Find out how long it takes to get aged care, and what you can do to help prepare </p>
                    <FlatButtonBlue> Read More </FlatButtonBlue>
                    </div>
                </div>
              </div>
              <hr></hr>
            </div>


            <div className="popular-topic">
              <div className="flex-row" style={{alignItems: 'flex-start', marginTop: '50px', flexWrap: 'nowrap'}}>
                <div>
                  <div className="filler-image"><img src={require('../img/costs.jpg')}  className="filler-image" /></div>
                </div>
                <div>
                  <div>
                    <div className="size-22 blue-text"> Costs </div>
                    <p> Find out how much you might have to pay for different aged care services </p>
                    <FlatButtonBlue> Read More </FlatButtonBlue>
                    </div>
                </div>
              </div>
              <hr></hr>
            </div>
          </div>


          <div className="flex-column popular-column">
            <div className="popular-topic">
              <div className="flex-row" style={{alignItems: 'flex-start', marginTop: '50px', flexWrap: 'nowrap'}}>
                <div>
                  <div className="filler-image"><img src={require('../img/advocacy.jpg')}  className="filler-image" /></div>
                </div>
                <div>
                  <div>
                    <div className="size-22 blue-text"> Advocacy </div>
                    <p> Supporting older people and their representatives to raise and address issues </p>
                    <FlatButtonBlue> Read More </FlatButtonBlue>
                    </div>
                </div>
              </div>
              <hr></hr>
            </div>

            <div className="popular-topic">
              <div className="flex-row" style={{alignItems: 'flex-start', marginTop: '50px', flexWrap: 'nowrap'}}>
                <div>
                  <div className="filler-image"><img src={require('../img/services.jpg')}  className="filler-image" /></div>
                </div>
                <div>
                  <div>
                    <div className="size-22 blue-text"> Setting up services </div>
                    <p> Learn what to expect from service providers and what to do if your care needs change </p>
                    <FlatButtonBlue> Read More </FlatButtonBlue>
                    </div>
                </div>
              </div>
              <hr></hr>
            </div>
          </div>




        </div>


        </div>
        
        <div className="grey-section">
          <div className="padding-20">
            <div className="my-row">
              <button className="middle-blue-button"> View more topics </button>
            </div>
          </div>
        </div>
        
          <div className="container ">
            <div className="blue-text subtitle"> Further information for </div>
            <div className="further-info-section">
              <div className="flex-row info-row">
                <div className="flex-row">
                  <img src={FurtherImg} className="further-icon"/>
                  <div className="grey-text further-info"> Aboriginal and Torres Straight Islander people</div>
                </div>
              </div>


              <div className="flex-row info-row">
                <div className="flex-row">
                  <img src={FurtherImg} className="further-icon"/>

                  <div className="grey-text further-info"> Carers</div>
                </div>
              </div>


              <div className="flex-row info-row">
                <div className="flex-row">
                  <img src={FurtherImg} className="further-icon"/>
                  <div className="grey-text further-info"> LGBTI people</div>
                </div>
              </div>


              <div className="flex-row info-row">
                <div className="flex-row">
                  <img src={FurtherImg} className="further-icon"/>
                  <div className="grey-text further-info"> People with other diverse needs</div>
                </div>
              </div>


              <div className="flex-row info-row">
                <div className="flex-row">
                  <img src={FurtherImg} className="further-icon"/>
                  <div className="grey-text further-info"> People in rural and remote areas</div>
                </div>
              </div>

              <div className="flex-row info-row">
                <div className="flex-row">
                  <img src={FurtherImg} className="further-icon"/>
                  <div className="grey-text further-info"> Veterans </div>
                </div>
              </div>


              <div className="flex-row info-row">
                <div className="flex-row">
                  <img src={FurtherImg} className="further-icon"/>
                  <div className="grey-text further-info"> People who speak other languages</div>
                </div>
              </div>


            </div>

          </div>
 
        <Footer/>

      </div>
    );
  }
}

export default Home;
