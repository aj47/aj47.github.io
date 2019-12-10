import React, { Component } from "react";
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

/*
import HomeIcon from './icon_1.png';
import Respite from './icon_2.png';
import AgedCare from './icon_3.png';
import Eligibility from './icon_4.png';
import Costs from './icon_5.png';
import Planning from './icon_6.png';
*/
import HomeIcon from './helpinthehome.svg';
import Respite from './respite.svg';
import AgedCare from './agedcarehomes.svg';
import Eligibility from './eligibility.svg';
import Costs from './costs.svg';
import Planning from './planningahead.svg';

import step1 from './1-register.svg';
import step2 from './2-assessment.svg';


import FeeEstimator from './fee_estimator.svg';
import Referral from './referral.svg';
import Feedback from './feedback.svg';
import Advocacy from './advocacy.svg';
import NonCompliance from './non-compliance.svg';
import Finder from './finder.svg';

import RightChevron from './right-chevron.svg';
import BurgerIcon from './burger.svg';
import NavIcon from './navicon.png';
import SearchIcon from './Search-icon.png';


const navContainer = {
  paddingLeft: '137px'
}
const NavStyle = {
  width: '100%'
}

const NoDecor = {
  textDecoration: 'none'
}
const SearchIconStyle = {
  borderLeft: '1px solid #D4D4D4',
  width: '30px',
  float: 'right',
  padding: '25px'
}

const navIcon = {
  marginRight: '15px',
  width: '70px',
  height: '70px'
}


class NavBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      burgerOpen: false 
    };
  }

  getBurgerClasses() {
    return classNames({
      'hamburger': true,
      'hamburger--collapse': true,
      'is-active': this.state.burgerOpen
    }) 
  }

  openBurger = () => {
    this.setState({burgerOpen: !this.state.burgerOpen}) 
  }

  render() {
    return <div style={NavStyle}>

      <div className="mobile-nav" >
        <a href="/Mobile_Menu" className="burger-row">
            <img src={NavIcon} className="nav-icon"/> 
            <div className="burger-label"> Menu </div>
        </a>
        <div className="mobile-search-row">
            <img src={SearchIcon} className="search-icon"/> 
            <div className="burger-label"> Search </div>
        </div>
      </div>

      <div className="desktop-nav" style={navContainer}>
       <ul>
          <li><NavLink exact to="/" href="/"> Home </NavLink></li>
          {/*
          <li className="about-care">
            <NavLink to="/About" href="/About" className="about-btn"> About Aged Care </NavLink>
            <div className="about-dropdown">

              <div className="col-3">
                <a href="/About/HelpStayHome" className="dropdown-button">
                    <img src={HomeIcon} style={navIcon}/>
                    <div className="dropdown-label"> Help to stay at home </div>
                </a>

                <a href="/About/Respite" className="dropdown-button" >
                    <img src={Respite} style={navIcon}/>
                    <div className="dropdown-label"> Respite and Short Term Care</div>
                </a>
              </div>

              <div className="col-3">
                <a href="/About/AgedCareHomes" className="dropdown-button" >
                    <img src={AgedCare} style={navIcon}/>
                    <div className="dropdown-label"> Aged Care Homes </div>
                </a>


                <a href="/About/Eligibility" className="dropdown-button" >
                    <img src={Eligibility} style={navIcon}/>
                    <div className="dropdown-label"> Eligiblity </div>
                </a>
              </div>

              <div className="col-3">
                <a href="/About/Costs" className="dropdown-button" >
                    <img src={Costs} style={navIcon}/>
                    <div className="dropdown-label"> Costs </div>
                </a>

                <a href="/About/PlanningAhead" className="dropdown-button" >
                    <img src={Planning} style={navIcon}/>
                    <div className="dropdown-label"> Planning Ahead </div>
                </a>
              </div>

            </div>
          </li>
          */}

          <li><NavLink to="/Assessment" href="/Assessment" className="about-btn">Get assessed</NavLink></li>

          {/*
          <li className="about-care" >
            <NavLink to="/Assessment" href="/Assessment" className="about-btn">get assessed</NavLink>
            <div className="about-dropdown">
              <div className="col-3">
                <a href="/Assessment/Register" className="dropdown-button">
                  <img src={step1} style={navIcon}/>
                  <div className="dropdown-label"> Register with My Aged Care </div>
                </a>
              </div>

              <div className="col-3">
                <a href="/Assessment/GetAssessment" className="dropdown-button">
                  <img src={step2} style={navIcon}/>
                  <div className="dropdown-label">Get an Assessment</div>
                </a>
              </div>

            </div>
          </li>
          */}


          <li className="about-care" >
            <NavLink to="/Services" href="/Services"> Find a service provider </NavLink>
          </li>

          <li className="about-care" >
            <NavLink to="/Topics" href="/Topics"> Popular topics </NavLink>
          </li>

          <li><NavLink to="/tools" className="about-btn">Tools</NavLink></li>
          {/*
          <li className="about-care" >
            <a className="about-btn"> tools </a>
            <div className="about-dropdown">

              <div className="col-3">
                <div className="dropdown-button">
                  <img src={FeeEstimator} style={navIcon}/>
                  <div className="dropdown-label"> Fee Estimator </div>
                </div>

                <div className="dropdown-button">
                  <img src={NonCompliance} style={navIcon}/>
                  <div className="dropdown-label"> Non compliance service finder </div>
                </div>

              </div>

              <div className="col-3">
                <div className="dropdown-button">
                  <img src={Referral} style={navIcon}/>
                  <div className="dropdown-label">Referral Form</div>
                </div>

                <div className="dropdown-button">
                  <img src={Feedback} style={navIcon}/>
                  <div className="dropdown-label"> Feedback and Complaints </div>
                </div>
              </div>

              <div className="col-3">

                <div className="dropdown-button">
                  <img src={Finder} style={navIcon}/>
                  <div className="dropdown-label"> Find a service provider </div>
                </div>


                <div className="dropdown-button">
                  <img src={Advocacy} style={navIcon}/>
                  <div className="dropdown-label"> Advocacy </div>
                </div>

              </div>
            </div>
          </li>
          */}
         </ul>
        </div>
    </div>;
  }
}

export default NavBar;
