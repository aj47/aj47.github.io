import React, { Component } from "react";
import '../NavBar/NavBar.css';

import searchIcon from '../NavBar/search.svg';

import HomeIcon from '../NavBar/helpinthehome.svg';
import Respite from '../NavBar/respite.svg';
import AgedCare from '../NavBar/agedcarehomes.svg';
import Eligibility from '../NavBar/eligibility.svg';
import Costs from '../NavBar/costs.svg';
import Planning from '../NavBar/planningahead.svg';

import step1 from '../NavBar/1-register.svg';
import step2 from '../NavBar/2-assessment.svg';


import RightChevron from '../NavBar/right-chevron.svg';
import LeftChevron from '../NavBar/left-chevron.svg';

import FeeEstimator from '../NavBar/fee_estimator.svg';
import Referral from '../NavBar/referral.svg';
import Feedback from '../NavBar/feedback.svg';
import Advocacy from '../NavBar/advocacy.svg';
import NonCompliance from '../NavBar/non-compliance.svg';
import Finder from '../NavBar/finder.svg';

class MobileNavMenu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      level: 'main' 
    };
  }

  render() { 
    return (
      <div className="super-container">
        <div className="mobile-nav2">
          <div className="mobile-nav-menu">
            <div>
              <a href="/">
                <div className="mobile-nav-item"> 
                  Home
                </div>
              </a>

              <a href="/Assessment">
                <div className="mobile-nav-item"> 
                  Get assessed
                </div>
              </a>

              <a href="/Services">
                <div className="mobile-nav-item"> 
                  Find a service provider
                </div>
              </a>


              <a href="/Topics">
                <div className="mobile-nav-item"> 
                  Popular Topics
                </div>
              </a>

              <a href="/tools">
                <div className="mobile-nav-item"> 
                  Tools
                </div>
              </a>

            </div>
          </div>
      </div>

    </div>
  
    
    )
  }
}

export default MobileNavMenu;
