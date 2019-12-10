import React, { Component } from "react";
import Image from './image.jpg';
import { goToAnchor } from 'react-scrollable-anchor';
import NavBar from '../NavBar/NavBar';
import TopBar from '../TopBar/TopBar';
import Style from '../style.css';
import Collapsible from '../Collapsible/Collapsible';
import FilterColumn from '../FilterColumn/FilterColumn';
import Footer from '../Footer/Footer';
import FlatButton from '../FlatButton/FlatButton';
import ResultCard from '../ResultCard/ResultCard';
import TagBubbles from '../TagBubbles/TagBubbles';
import Placeholder from '../../img/card3.png';
import ChevronDown from './chevron-arrow-down.svg';
import ChevronUp from './chevron-arrow-up.svg';
import RadioActive from './radio_active.png';
import RadioDefault from './radio_default.png';
import CheckActive from './check-active.png'
import CheckDefault from './check-default.png'
import FilterActive from './Filter_Active.png'
import FilterDefault from './Filter_Default.png'
import CategoryTickOn from './tick.png'
import CategoryTickOff from './tick-default.png'
import Tick from './tick.svg';
import SearchIcon from './search.png';
import Spinner from 'react-spinkit';
import FilterData from './filter_data3.json';
import FilterHeaders from './filter_headers3.json';
import PhoneBlue from '../phoneBlue.svg';
import Info from './info.svg';
import Dropdown from 'react-dropdown'
import Cross_Tag from '../TagBubbles/cross_tag.svg';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import './SuperResponsiveTableStyle.css'

const centerText = {
  position: 'relative',
  left: '50%'
}

const view_options = [
  'List', 'Cards'
]


const cost_options = [
  'Standard Hours', 'Per Hour', 'Per Day', 'Per Month', 'Per Year'
]

const language_options = [
  'French', 'Spanish', 'Arabic'
]

const religion_options = [
  'Jewish', 'Christian', 'Islamic'
]

const cultural_options = [
  'Greek', 'Chinese', 'Lebanese'
]

const distance_options = [
  '5km', '10km', '20km', '50km', '50km +'
]

const provider_methods = [
  'By the providers staff', 'By the providers staff and through other service providers', 'Through other service providers'
]

let cost_seed = Math.floor(Math.random() * (60 - 20 + 1)) + 20;
let cost_seed2 = Math.floor(Math.random() * (60 - 20 + 1)) + 20;
let cost_seed3 = Math.floor(Math.random() * (60 - 20 + 1)) + 20;

const defaultOption = distance_options[0]


class Services extends Component {

  constructor(props) {
    super(props);
    let searchVal = '';
    if(props.location.state) {
      if(props.location.state.searched) {
        if(props.location.state.filters["Respite and short term care"]) {
          FilterHeaders["Help in the home"] = false;
          FilterHeaders["Respite and short term care"] = true;
        } else if(props.location.state.filters["Respite and short term care"]) {
          FilterHeaders["Help in the home"] = false;
          FilterHeaders["Aged care homes"] = false;
        }

        if(props.location.state.searchValue) {
          searchVal = props.location.state.searchValue;
        }
      }
    }

    this.state = {
      openHeaders: [],
      compareViewOpen: false,
      currentTest: true,
      width: 0,
      height: 0,
      hideFilters: true,
      hasSearched: false,
      viewingProfile : false ,
      compare: [],
      searchResults: [],
      filters: FilterHeaders,
      info: {},
      isSearching: false,
      searchProviderLocation: searchVal,
      searchProviderValue: '',
      locationTag: '',
      keywordTag: ''
    }

    if(props.location.state) {
      if(props.location.state.searched) {
        this.searchProviders();
      }
    }
    
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  showHideFilters = () => {
    this.setState({hideFilters: !this.state.hideFilters});
  }

  changeTest= () => {
    if (this.state.filters["Help in the home"])
    this.setState({currentTest: !this.state.currentTest})
  }

  openCompareView = () => {
    this.setState({compareViewOpen: !this.state.compareViewOpen})  
    if(!this.state.compareViewOpen){
      setTimeout(function(){goToAnchor('compare-section');}.bind(this), 200);
    } else {
      setTimeout(function(){goToAnchor('results-section');}.bind(this), 200);
    }
  }

  addCompare= (result) => {
    let newCompare = [...this.state.compare];
    let originalLength = newCompare.length;
    console.log(result.Outlet_Name, newCompare);
    this.state.compare.forEach((element, index) => {
      console.log(element.Outlet_Name);
      if(element.Outlet_Name == result.Outlet_Name) {
        newCompare.splice(index, 1);
      }
    })
    if(newCompare.length < originalLength) {
      this.setState({compare: newCompare}, () => {
        console.log(newCompare);
        return;
      });
    } else if(newCompare.length < 3) {
      newCompare.push(result);
      this.setState({compare: newCompare});
    }
  }


  myFilter = (key) => {
    return (element) => {
      let currentFilters = FilterData[key];
      if (!currentFilters) {
        return true;
      }
      if (currentFilters.Programme) {
        let filterKeys = currentFilters["Programme"].split(",").map(item => item.trim());;
        let none = true;
        for (let filterKey in filterKeys) {
          if (element.Programme == filterKeys[filterKey]) {
            none = false; 
          }   
        }
        if (none == true)
          return false;
      }
        
      if (currentFilters["Service type"]) {
        let filterKeys = currentFilters["Service type"].split(",").map(item => item.trim());;
        let none = true;
        for (let filterKey in filterKeys) {
          if (element["Service_Type"] == filterKeys[filterKey]) {
            none = false; 
          }   
        }
        if (none == true)
          return false;
      }

      if (currentFilters["Service sub-type"]) {
        let filterKeys = currentFilters["Service sub-type"].split(",").map(item => item.trim());
        let elementSubTypes = element["Service_Sub_Types"].split(",").map(item => item.trim());
        let none = true;
        for (let filterKey in filterKeys) {
          for (let elementSubType in elementSubTypes) {
            if (elementSubTypes[elementSubType] == filterKeys[filterKey]) {
              none = false; 
            }   
          }
        }
        if (none == true)
          return false;
      }

      if (currentFilters["Funded"]) {
        let filterKeys = currentFilters["Funded"].split(",").map(item => item.trim());
        let none = true;
        for (let filterKey in filterKeys) {
          if (element["Funded"] == filterKeys[filterKey]) {
            none = false; 
          }   
        }
        if (none == true)
          return false;
      }
      return true;
    }  
  }

  applyFilters = () => {
    let tempState = this.state; 
    let filteredResults = tempState.unfilteredResults
    tempState.searchResults = filteredResults;
    for(var key in tempState.filters) {
      if(tempState.filters[key]) {
        tempState.searchResults = filteredResults.filter(this.myFilter(key));
      }
      filteredResults = tempState.searchResults;
    }
    tempState.hasSearched = true;
    this.setState(tempState);
  }

  filterMethod = (key, val, header) => {
    let tempState = this.state;
    tempState.filters[key] = val;
    if (header) {
      if (tempState.openHeaders.indexOf(header) == -1)
        tempState.openHeaders.push(header); 
    }
    if (key == "Help in the home") {
      if (val) {
        tempState.filters["Respite and short term care"] = false;
        tempState.filters["Aged care homes"] = false;
      } else {
        return; 
      }
    } else if(key == "Aged care homes") {
      if (val) {
        tempState.filters["Respite and short term care"] = false;
        tempState.filters["Help in the home"] = false;
      } else {
        return; 
      }
    } else if(key == "Respite and short term care") {
      if (val) {
        tempState.filters["Help in the home"] = false;
        tempState.filters["Aged care homes"] = false;
      } else {
        return; 
      }
    }
    tempState.isSearching = false;
    this.setState(tempState);
    if(tempState.unfilteredResults)
      this.applyFilters();
  }
  
  removeTag = (tag) => {
     let tempState = this.state;
     if(tag == "location") {
      tempState.searchProviderLocation = '';
      tempState.locationTag = '';
      this.setState(tempState); 
     } else if(tag == "keyword") {
      tempState.searchProviderValue = '';
      tempState.locationTag = '';
      this.setState(tempState); 

     } else {
      tempState.filters[tag] = false
      this.setState(tempState);
     }
     this.searchProviders();
  }

  searchProviders = () => {
    let self = this;
    let tempState = this.state;
    if(this.state.width > 800 || this.state.width == 0) {
      tempState.hideFilters = false;
    }
    tempState.isSearching = true;
    tempState.locationTag = self.state.searchProviderLocation;
    tempState.keywordTag = self.state.searchProviderValue;
    this.setState(tempState);
    if (this.state.hasSearched == false) {
      setTimeout(function(){goToAnchor('results-section');}.bind(this), 200)
    }
    let location = self.state.searchProviderLocation;
    location = location.replace(',','').split(' ').join('%');
    fetch('http://13.58.91.209:1337/findProvider3', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        $keyword: '%' + self.state.searchProviderValue + '%',
        $location: '%' + location + '%'
      })
    }).then(function(response) {
      if (response.status >= 400) {
        console.error("Bad response form server");
      } else {
        return response.json(); 
      } 
    }).then(function(data) {
      if (data.length == 0) {
        tempState.searchResults = [];
        tempState.unfilteredResults = [];
        tempState.hasSearched = true;
        tempState.isSearching = false;
        self.setState(tempState);
      } else {
        tempState.unfilteredResults = data;
        tempState.searchResults = data;
        self.setState(tempState);
        self.filterMethod();
        goToAnchor('results-section');
        console.log(tempState.compare);
      } 
    })
  }
  
  inputChanged = (e) => {
    let tempState = this.state;
    tempState[e.target.name] = e.target.value;
    this.setState(tempState);
  }

  viewProfile = (profile) => {
    this.setState({
      viewingProfile: !this.state.viewingProfile,
      title: profile.title,
      business: profile.business,
      phone : profile.phone,
      description: profile.children,
      detail: 'services'
    },() => {
      if (this.state.viewingProfile) {
        goToAnchor('profile-section');
      } else {
        goToAnchor('results-section');
      }
    });
  }

  changeTab = (tab) => {
    let tempState = this.state;
    tempState.detail = tab;
    this.setState(tempState);
  }

  render() {
    return ( 
    <div>

        <TopBar> </TopBar>
        <div className="nav-bar"> <NavBar> </NavBar> </div>
        <div className="service-header">
          <div className="container">
            <div className="circle-icon">
              <h2 style={{color: '#154569', marginLeft: '29px'}}>3</h2>
            </div>
            <div className="white-text"> Find a service provider </div>

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
        {
          (this.state.viewingProfile && !this.state.compareViewOpen) &&
          <div className="container">
            {/* -------------------- Start Profile View ----------------- */}
            <button className="return-results-button" onClick={this.viewProfile} id={'profile-section'}> Return to results </button>
             <div>
             <div className="result-card">
              <div className="card-content">
                <div className="result-card-heading"> {this.state.title} </div>
                <div className="result-card-info"> {this.state.business} </div>
                <div className="result-card-phone"> Ph. {this.state.phone} </div>
                {this.state.services && <div>
                  <div className="result-card-service-title">
                    Services
                  </div>
                  <div className="result-card-service-text">
                    {this.state.subService && <div> {this.state.services} , {this.state.subService} </div>}
                    {!this.state.subService && <div> {this.state.services} </div>}
                  </div>
                </div>}
                <hr></hr>
                <div className="card-compare-row">
                  <div className="my-row">
                      { this.state.comparing && <img className="big-radio2" src={CheckActive} /> }
                      { !this.state.comparing && <img className="big-radio2" src={CheckDefault} /> }
                      Compare
                  </div>
                  <div>
                    <button className="card-button" > View Website </button>
                  </div>
                </div>
              </div>
              <div className="card-bottom2">
                <hr></hr>
                <div className="flex-space">
                  <div className="my-row">
                    <div className="grey-text">
                      Tags: Respite, Deakin ACT 2600
                    </div>
                  </div>
                  <div className="subsidy-bubble">
                    Government Subsidised
                  </div>
                </div>
              </div>
              </div>
            </div>

            <div>
              {this.state.detail == "quality" &&
              <div>
                <div className="details-tabs">
                  <div className="unselected-tab" onClick={() => this.changeTab('services')}> Services </div>
                  <div className="unselected-tab" onClick={() => this.changeTab('costs')}> Costs </div>
                  <div className="unselected-tab" onClick={() => this.changeTab('contact')}> Contact Details </div>
                  <div className="unselected-tab" onClick={() => this.changeTab('photos')}> Photos </div>
                  <div className="selected-tab" onClick={() => this.changeTab('quality')}> Quality </div>
                </div>

                <div className="profile-details-box">
                  <div className="padding-10">

                    <div className="details-row">
                      <img src={ChevronUp} className="detail-chevron"/>
                      <div className="circle-icon small-size"><img className="tick-icon" src={Tick}/></div>
                      <div>
                        <div className="details-heading"> Community Access - Individual Respite </div>
                        <div className="business-description">
                          Community access respite provides activities to encourage a sense of independence and social interaction and provides your carer with a break. This is provided to you individually. 
                        </div>
                       </div>
                    </div>

                    <hr></hr>

                    <div className="details-row">
                      <img src={ChevronDown} className="detail-chevron"/>
                      <div className="circle-icon small-size"><img className="tick-icon" src={Tick}/></div>
                      <div>
                        <div className="details-heading"> In-home Day Respite</div>
                      </div>
                    </div>

                    <hr></hr>

                    <div className="details-row">
                      <img src={ChevronDown} className="detail-chevron"/>
                    <div className="circle-icon small-size"><img className="tick-icon" src={Tick}/></div>
                      <div>
                        <div className="details-heading"> In-home Overnight Respite</div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              }

              {this.state.detail == "services" &&
              <div>
                <div className="details-tabs">
                  <div className="selected-tab"> Services </div>
                  <div className="unselected-tab" onClick={() => this.changeTab('costs')}> Costs </div>
                  <div className="unselected-tab" onClick={() => this.changeTab('contact')}> Contact Details </div>
                  <div className="unselected-tab" onClick={() => this.changeTab('photos')}> Photos </div>
                  <div className="unselected-tab" onClick={() => this.changeTab('quality')}> Quality </div>
                </div>

                <div className="profile-details-box">
                  <div className="padding-10">

                    <div className="details-row">
                      <img src={ChevronUp} className="detail-chevron"/>
                      <div className="circle-icon small-size"><img className="tick-icon" src={Tick}/></div>
                      <div>
                        <div className="details-heading"> Community Access - Individual Respite </div>
                        <div className="business-description">
                          Community access respite provides activities to encourage a sense of independence and social interaction and provides your carer with a break. This is provided to you individually. 
                        </div>
                       </div>
                    </div>

                    <hr></hr>

                    <div className="details-row">
                      <img src={ChevronDown} className="detail-chevron"/>
                      <div className="circle-icon small-size"><img className="tick-icon" src={Tick}/></div>
                      <div>
                        <div className="details-heading"> In-home Day Respite</div>
                      </div>
                    </div>

                    <hr></hr>

                    <div className="details-row">
                      <img src={ChevronDown} className="detail-chevron"/>
                    <div className="circle-icon small-size"><img className="tick-icon" src={Tick}/></div>
                      <div>
                        <div className="details-heading"> In-home Overnight Respite</div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              }
              {this.state.detail == "costs" &&
              <div>
                <div className="details-tabs">
                  <div className="unselected-tab" onClick={() => this.changeTab('services')}> Services </div>
                  <div className="selected-tab" > Costs </div>
                  <div className="unselected-tab" onClick={() => this.changeTab('contact')}> Contact Details </div>
                  <div className="unselected-tab" onClick={() => this.changeTab('photos')}> Photos </div>
                  <div className="unselected-tab" onClick={() => this.changeTab('quality')}> Quality </div>
                </div>

                <div className="profile-details-box">
                  <div className="padding-10">
                <p><i>
                  This Schedule provides information on home care pricing. It includes the price for the common services you can access through a home care package. The costs will be deducted from your overall package budget. There are many other services available through a home care package not listed below. For example, allied health services, home maintenance, aids or equipment may all form a part of your Care Plan. For further pricing information, please contact the home care provider. 
                </i> </p>


                    <h5> Provider Information about Pricing </h5>
                    <p> We provide flexibility in our service which means you can access services when you need it - 24 hours a day, 7 days a week. All services are delivered by our fully qualified staff and range from help with basic help around the home, to support for your complex healthcare needs or for your carer.</p>

                    <h5> Approximate Home Care Package Amount </h5>
                    <Table>
                      <Thead>
                        <Tr>
                          <Th> </Th>
                          <Th> </Th>
                          <Th> Level 1 </Th>
                          <Th> Level 2 </Th>
                          <Th> Level 3 </Th>
                          <Th> Level 4 </Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td> Home care package funding (From the Government) </Td>
                          <Td> Annual </Td>
                          <Td> $8,250  </Td>
                          <Td> $15,000 </Td>
                          <Td> $33,000 </Td>
                          <Td> $50,250 </Td>
                        </Tr>
                        <Tr>
                          <Td> Home care package funding (From the Government) </Td>
                          <Td> Per fortnight </Td>
                          <Td> $315  </Td>
                          <Td> $575 </Td>
                          <Td> $1,270 </Td>
                          <Td> $1,930 </Td>
                        </Tr>
                        <Tr>
                          <Td> Basic Daily Fee (paid by the client)</Td>
                          <Td> Per fortnight</Td>
                          <Td> $145 </Td>
                          <Td> $145 </Td>
                          <Td> $145 </Td>
                          <Td> $145 </Td>
                        </Tr>

                      </Tbody>
                    </Table>
                    <p> Note: clients may be required to make a contribution to the cost of their care by paying an Income Tested Care Fee and/or Basic Daily Fee.
                    </p>
                    <h5> Care Management</h5>
                    <Table style={{border:'1px solid #CCCCCC'}}>
                      <Tbody>
                        <Tr>
                          <Td> Per hour </Td>
                          <Td> $35 </Td>
                        </Tr>
                        <Tr>
                          <Td> Approach to care management</Td>
                          <Td> Our Care Managers are there to ensure you reach your goals. Our Care Managers ensure your needs are being met and will contact you or visit you. Please discuss with us how much support you would like from us in order to manage your services.</Td>
                        </Tr>
                      </Tbody>
                    </Table>

                    <br></br>
                    <br></br>

                    <h5> Price for common services </h5>

                    <Table>
                      <Thead>
                        <Tr>
                          <Th> </Th>
                          <Th ></Th>
                          <Th> How services are provided</Th>
                          <Th style={{width: '5px'}}> Standard Hours </Th>
                          <Th style={{width: '5px'}}> Out of weekday/ standard hours </Th>
                          <Th style={{width: '5px'}}> Saturday</Th>
                          <Th style={{width: '5px'}}> Sunday </Th>
                          <Th style={{width: '5px'}}> Public Holiday</Th>
                        </Tr>
                      </Thead>
                      <Tbody>

                        <Tr>
                          <Td> Social Support </Td>
                          <Td> Per Hour </Td>
                          <Td>By the providers staff</Td>
                          <Td> ${cost_seed}</Td>
                          <Td> ${cost_seed + 15}</Td>
                          <Td> ${cost_seed + 20}</Td>
                          <Td> ${cost_seed + 20}</Td>
                          <Td> ${cost_seed + 20}</Td>
                        </Tr>

                        <Tr>
                          <Td> Personal Care</Td>
                          <Td> Per Hour </Td>
                          <Td>By the providers staff and through other services</Td>
                          <Td> ${cost_seed}</Td>
                          <Td> ${cost_seed + 15}</Td>
                          <Td> ${cost_seed + 20}</Td>
                          <Td> ${cost_seed + 20}</Td>
                          <Td> ${cost_seed + 20}</Td>
                      </Tr>

                        <Tr>
                          <Td> Nursing</Td>
                          <Td> Per Hour </Td>
                          <Td> Through other service providers</Td>
                          <Td> ${cost_seed}</Td>
                          <Td> ${cost_seed + 15}</Td>
                          <Td> ${cost_seed + 20}</Td>
                          <Td> ${cost_seed + 20}</Td>
                          <Td> ${cost_seed + 20}</Td>
                       </Tr>

                        <Tr>
                          <Td> Cleaning and household tasks </Td>
                          <Td> Per Hour </Td>
                          <Td>By the providers staff</Td>
                          <Td> ${cost_seed}</Td>
                          <Td> ${cost_seed + 15}</Td>
                          <Td> ${cost_seed + 20}</Td>
                          <Td> ${cost_seed + 20}</Td>
                          <Td> ${cost_seed + 20}</Td>
                       </Tr>

                        <Tr>
                          <Td> Transport by car</Td>
                          <Td> Per Hour </Td>
                          <Td>By the providers staff and through other service providers</Td>
                          <Td> ${cost_seed}</Td>
                          <Td> ${cost_seed + 15}</Td>
                          <Td> ${cost_seed + 20}</Td>
                          <Td> ${cost_seed + 20}</Td>
                          <Td> ${cost_seed + 20}</Td>
                       </Tr>

                        <Tr>
                          <Td> Meal preparation </Td>
                          <Td> Per Hour </Td>
                          <Td> Through other service providers</Td>
                          <Td> ${cost_seed}</Td>
                          <Td> ${cost_seed + 15}</Td>
                          <Td> ${cost_seed + 20}</Td>
                          <Td> ${cost_seed + 20}</Td>
                          <Td> ${cost_seed + 20}</Td>
                       </Tr>

                        <Tr>
                          <Td> Light gardening </Td>
                          <Td> Per Hour </Td>
                          <Td>By the providers staff</Td>
                          <Td> ${cost_seed}</Td>
                          <Td> ${cost_seed + 15}</Td>
                          <Td> ${cost_seed + 20}</Td>
                          <Td> ${cost_seed + 20}</Td>
                          <Td> ${cost_seed + 20}</Td>
                       </Tr>


                        <Tr>
                          <Td> In-home respite</Td>
                          <Td> Per Hour </Td>
                          <Td>By the providers staff and through other service providers</Td>
                          <Td> ${cost_seed}</Td>
                          <Td> ${cost_seed + 15}</Td>
                          <Td> ${cost_seed + 20}</Td>
                          <Td> ${cost_seed + 20}</Td>
                          <Td> ${cost_seed + 20}</Td>
                       </Tr>


                        <Tr>
                          <td rowspan="2"> Sleepover/overnight respite</td>
                          <Td> No. Hour </Td>
                          <Td>By the providers staff and through other service providers</Td>
                          <Td> ${cost_seed}</Td>
                          <Td> ${cost_seed + 15}</Td>
                          <Td> ${cost_seed + 20}</Td>
                          <Td> ${cost_seed + 20}</Td>
                          <Td> ${cost_seed + 20}</Td>
                       </Tr>


                        <Tr>
                          <Td> Per Hour </Td>
                          <Td>By the providers staff and through other service providers</Td>
                          <Td> ${cost_seed}</Td>
                          <Td> ${cost_seed + 15}</Td>
                          <Td> ${cost_seed + 20}</Td>
                          <Td> ${cost_seed + 20}</Td>
                          <Td> ${cost_seed + 20}</Td>
                        </Tr>

                      </Tbody>
                    </Table>

                    <br></br>
                    <br></br>

                    <h5>Other charges</h5>
                    <Table>
                      <Thead>
                        <Tr>
                          <Th> </Th>
                          <Th> </Th>
                          <Th> Level 1 </Th>
                          <Th> Level 2 </Th>
                          <Th> Level 3 </Th>
                          <Th> Level 4 </Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td> Package Management </Td>
                          <Td> Per fortnight </Td>
                          <Td> $</Td>
                          <Td> $ </Td>
                          <Td> $  </Td>
                          <Td> $ </Td>
                        </Tr>
                        <Tr>
                          <Td> Maximum exit amount </Td>
                          <Td> Max. Total</Td>
                          <Td> $  </Td>
                          <Td> $ </Td>
                          <Td> $  </Td>
                          <Td> $ </Td>
                        </Tr>
                        <Tr>
                          <Td> Staff travel costs to visit client</Td>
                          <Td> Per km </Td>
                          <Td> $ </Td>
                          <Td> $ </Td>
                          <Td> $ </Td>
                          <Td> $ </Td>
                        </Tr>
                        <Tr>
                          <Td> Separate charge to receive services from a different provider</Td>
                          <Td> Y/N</Td>
                          <td colspan="4"> We are happy to organise for you to access services from a different provider </td>
                        </Tr>

                      </Tbody>
                    </Table>

                    <br></br>
                    <br></br>
                    <Table style={{border:'1px solid #CCCCCC'}}>
                      <Tbody>
                        <Tr>
                          <Td> Full price list </Td>
                          <Td>  URL </Td>
                          <Td> [Web link to pricing information]</Td>
                        </Tr>
                        <Tr>
                          <Td> Full price list</Td>
                          <Td> PDF </Td>
                          <Td> [Hyperlink to pricing information] </Td>
                        </Tr>
                        <Tr>
                          <Td> Contact </Td>
                          <Td> Email </Td>
                          <Td> [Email address]</Td>
                        </Tr>
                        <Tr>
                          <Td> Contact </Td>
                          <Td> Phone </Td>
                          <Td> [Phone number]</Td>
                        </Tr>
                      </Tbody>
                    </Table>

                    <h5> Version </h5>

                    <Table style={{border:'1px solid #CCCCCC'}}>
                    
                      <Tbody>
                        <Tr>
                          <Td> Date pricing schedule last updated</Td>
                          <Td> </Td>
                          <Td> Date / Month / Year </Td>
                        </Tr>

                      </Tbody>

                    </Table>

                    <p> <i> Note: This information is maintained by the Australian Government Department of Health. While the Depeartment has exercised due care in collating the material contained on this Website, it does not guarantee the accuracy, currency or completeness of the information nor the quality and suitability of the service </i> </p>

                  </div>
                </div>
              </div>
              }
              {this.state.detail == "contact" &&
              <div>
                <div className="details-tabs">
                  <div className="unselected-tab" onClick={() => this.changeTab('services')}> Services </div>
                  <div className="unselected-tab" onClick={() => this.changeTab('costs')}> Costs </div>
                  <div className="selected-tab" > Contact Details </div>
                  <div className="unselected-tab" onClick={() => this.changeTab('photos')}> Photos </div>
                  <div className="unselected-tab" onClick={() => this.changeTab('quality')}> Quality </div>
                </div>

                <div className="profile-details-box">
                  <div className="padding-10">

                    <div className="details-row">
                      <img src={ChevronUp} className="detail-chevron"/>
                      <div className="circle-icon small-size"><img className="tick-icon" src={Tick}/></div>
                      <div>
                        <div className="details-heading"> Community Access - Individual Respite </div>
                        <div className="business-description">
                          Community access respite provides activities to encourage a sense of independence and social interaction and provides your carer with a break. This is provided to you individually. 
                        </div>
                       </div>
                    </div>

                    <hr></hr>

                    <div className="details-row">
                      <img src={ChevronDown} className="detail-chevron"/>
                      <div className="circle-icon small-size"><img className="tick-icon" src={Tick}/></div>
                      <div>
                        <div className="details-heading"> In-home Day Respite</div>
                      </div>
                    </div>

                    <hr></hr>

                    <div className="details-row">
                      <img src={ChevronDown} className="detail-chevron"/>
                      <div className="circle-icon small-size"><img className="tick-icon" src={Tick}/></div>
                      <div>
                        <div className="details-heading"> In-home Overnight Respite</div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              }
              {this.state.detail == "photos" &&
              <div>
                <div className="details-tabs">
                  <div className="unselected-tab" onClick={() => this.changeTab('services')}> Services </div>
                  <div className="unselected-tab" onClick={() => this.changeTab('costs')}> Costs </div>
                  <div className="unselected-tab" onClick={() => this.changeTab('contact')}> Contact Details </div>
                  <div className="selected-tab" >  Photos </div>
                  <div className="unselected-tab" onClick={() => this.changeTab('quality')}> Quality </div>
                </div>

                <div className="profile-details-box">
                  <div className="flex-row" style={{justifyContent: 'center'}}>
                    <div className="main-image">
                    </div>
                    <div className="flex-row" style={{width: '38%', justifyContent: 'center'}}>
                      <div className="secondary-image"></div>
                      <div className="secondary-image"></div>
                      <div className="secondary-image"></div>
                      <div className="secondary-image"></div>
                      <div className="secondary-image"></div>
                      <div className="secondary-image"></div>
                    </div>
                  </div>
                </div>
              </div>
              }
              <div className="flex-row" style={{justifyContent: 'flex-end', marginTop: '30px'}}>
                <button className="card-button" > Print </button>
                <button className="card-button" > Email </button>
              </div>
            </div>
            {/* -------------------- End Profile View ----------------- */}
          </div> 
        }
        {
          (!this.state.viewingProfile && !this.state.compareViewOpen) &&
          <div>
            {/* -------------------- Start Search Results ----------------- */}
            <div className="blue-section" style={{backgroundColor: 'white'}}>
                <div className="container">
                  <div className="location-checkbox-row">
                    { this.state.filters["Help in the home"] &&
                      <div onClick={e => this.filterMethod('Help in the home', !this.state.filters["Help in the home"])}  className="main-category selected">
                        <div className="white-label"> Help in the home </div>
                        <img className="big-radio" src={CategoryTickOn} />
                      </div>
                    }
                    { !this.state.filters["Help in the home"] && 
                      <div onClick={e => this.filterMethod('Help in the home', !this.state.filters["Help in the home"])}  className="main-category">
                        <div className="white-label"> Help in the home </div>
                        <img className="big-radio" src={CategoryTickOff} /> 
                      </div>
                    }

                    { this.state.filters["Respite and short term care"] &&
                      <div onClick={e => this.filterMethod('Respite and short term care', !this.state.filters["Respite and short term care"])}  className="main-category selected">
                        <div className="white-label"> Respite and short term care</div>
                        <img className="big-radio" src={CategoryTickOn} /> 
                      </div>
                    }
                    { !this.state.filters["Respite and short term care"] &&
                      <div onClick={e => this.filterMethod('Respite and short term care', !this.state.filters["Respite and short term care"])} className="main-category">
                        <div className="white-label"> Respite and short term care</div>
                        <img className="big-radio" src={CategoryTickOff} /> 
                      </div>
                    }

                    { this.state.filters["Aged care homes"] &&
                      <div onClick={e => this.filterMethod('Aged care homes', !this.state.filters["Aged care homes"])} className="main-category selected">
                        <div className="white-label"> Aged care homes</div>
                        <img className="big-radio" src={CategoryTickOn} /> 
                      </div>
                    }
                    { !this.state.filters["Aged care homes"] &&
                      <div onClick={e => this.filterMethod('Aged care homes', !this.state.filters["Aged care homes"])} className="main-category">
                        <div className="white-label"> Aged Care Homes</div>
                        <img className="big-radio" src={CategoryTickOff} /> 
                      </div>
                    }
                  </div>
                  <br></br>
                  <div className="location-search-row">
                    <input value={this.state.searchProviderLocation} onChange={e => this.inputChanged(e)} type="text" name="searchProviderLocation" placeholder="Deakin, ACT 2600" className="location-search-bar"/>
                    <button onClick={this.searchProviders} className="service-search-button"> Search </button>
                  </div>
                  <br></br>
                  <div className="surrounding-areas">
                    <img className="big-radio2" src={CheckActive} />
                    Include surrounding areas
                  </div>
                </div>
            </div>
            {(!this.state.hasSearched && !this.state.isSearching) ? 
              <div>
                <div className="grey-section">
                  <div className="container" style={{position: "relative"}}>

                    <h3> Narrow my search </h3>
                    {this.state.filters["Help in the home"] && <h5> Entry level care </h5> }
                    {this.state.filters["Respite and short term care"] && <h5> Length of respite </h5> }

                    <div className="white-pill" onClick={this.changeTest}>
                      <div className="title">
                        Tip
                      </div>

                      <div className="text">
                        An assessment will help you work out what services / care you may be eligible for.
                      </div>
                    </div>

                    {this.state.filters["Aged care homes"] && 
                    <div>
                      <div className="flex-row" style={{marginTop: "95px"}}>

                        <div className="vertically-center">
                          <div className="top-down-15" style={{width: "80%"}}>
                            <div>  Distance from me </div>
                               <Dropdown options={distance_options} onChange={this._onSelect} value={defaultOption} className="narrow-dropdown" placeholder="Select an option" /> 
                            <hr style={{marginLeft: '0'}}></hr>
                          </div>
                        </div>  

                        <div className="vertically-center">
                          <div className="top-down-15" style={{width: "80%"}}>
                            <div>  Language </div>
                               <Dropdown options={language_options} onChange={this._onSelect} className="narrow-dropdown" placeholder="Language" /> 
                            <hr style={{marginLeft: '0'}}></hr>
                          </div>
                        </div>  

                        <div className="vertically-center">
                          <div className="top-down-15" style={{width: "80%"}}>
                            <div>  Cultural environment </div>
                               <Dropdown options={cultural_options} onChange={this._onSelect} className="narrow-dropdown" placeholder="Cultural environment" /> 
                            <hr style={{marginLeft: '0'}}></hr>
                          </div>
                        </div>  

                        <div className="vertically-center">
                          <div className="top-down-15" style={{width: "80%"}}>
                            <div>  Religion </div>
                               <Dropdown options={religion_options} onChange={this._onSelect} className="narrow-dropdown" placeholder="Religion" /> 
                            <hr style={{marginLeft: '0'}}></hr>
                          </div>
                        </div>  
                      
                        <div onClick={e => this.filterMethod('Aboriginal and/or Torres Strait Islander', !this.state.filters["Aboriginal and/or Torres Strait Islander"], "Specialisations")}  className="vertically-center">
                          { this.state.filters["Aboriginal and/or Torres Strait Islander"] && <img className="big-radio2" src={CheckActive} /> }
                          { !this.state.filters["Aboriginal and/or Torres Strait Islander"] && <img className="big-radio2" src={CheckDefault} /> }
                          <div className="top-down-15">
                            <div>  Aboriginal and/or Torres Strait Islander </div>
                            <div className="example-text"> Lorem ipsum sedem unde umnis iste ofter aslan</div>
                            <hr></hr>
                          </div>
                        </div>               
                      
                        <div onClick={e => this.filterMethod('Veterans', !this.state.filters["Veterans"], "Specialisations")}  className="vertically-center">
                          { this.state.filters["Veterans"] && <img className="big-radio2" src={CheckActive} /> }
                          { !this.state.filters["Veterans"] && <img className="big-radio2" src={CheckDefault} /> }
                          <div className="top-down-15">
                            <div>  Veterans </div>
                            <div className="example-text"> Lorem ipsum sedem unde umnis iste ofter aslan</div>
                            <hr></hr>
                          </div>
                        </div>               
                       
                        <div onClick={e => this.filterMethod('Lesbian, gay, transgender, intersex', !this.state.filters["Lesbian, gay, transgender, intersex"], "Specialisations")}  className="vertically-center">
                          { this.state.filters["Lesbian, gay, transgender, intersex"] && <img className="big-radio2" src={CheckActive} /> }
                          { !this.state.filters["Lesbian, gay, transgender, intersex"] && <img className="big-radio2" src={CheckDefault} /> }
                          <div className="top-down-15">
                            <div>  Lesbian, gay, transgender, intersex </div>
                            <div className="example-text"> Lorem ipsum sedem unde umnis iste ofter aslan</div>
                            <hr></hr>
                          </div>
                        </div>               

                     
                        <div onClick={e => this.filterMethod('Homelessness', !this.state.filters["Homelessness"], "Specialisations")}  className="vertically-center">
                          { this.state.filters["Homelessness"] && <img className="big-radio2" src={CheckActive} /> }
                          { !this.state.filters["Homelessness"] && <img className="big-radio2" src={CheckDefault} /> }
                          <div className="top-down-15">
                            <div>  Homelessness </div>
                            <div className="example-text"> Lorem ipsum sedem unde umnis iste ofter aslan</div>
                            <hr></hr>
                          </div>
                        </div>               






                      </div>
                    </div>
                    }

                    {this.state.filters["Respite and short term care"] && 
                    <div>
                      <div className="flex-row">
                      
                        <div onClick={e => this.filterMethod('Day respite', !this.state.filters["Day respite"], "Respite length")}  className="vertically-center">
                          { this.state.filters["Day respite"] && <img className="big-radio2" src={CheckActive} /> }
                          { !this.state.filters["Day respite"] && <img className="big-radio2" src={CheckDefault} /> }
                          <div className="top-down-15">
                            <div>  Day respite </div>
                            <div className="example-text"> Lorem ipsum sedem unde umnis iste ofter aslan</div>
                            <hr></hr>
                          </div>
                        </div>               
                      
                        <div onClick={e => this.filterMethod('Overnight respite', !this.state.filters["Overnight respite"], "Respite length")}  className="vertically-center">
                          { this.state.filters["Overnight respite"] && <img className="big-radio2" src={CheckActive} /> }
                          { !this.state.filters["Overnight respite"] && <img className="big-radio2" src={CheckDefault} /> }
                          <div className="top-down-15">
                            <div>  Overnight respite </div>
                            <div className="example-text"> Lorem ipsum sedem unde umnis iste ofter aslan</div>
                            <hr></hr>
                          </div>
                        </div>               
                      </div>

                      <h5> Respite type </h5>
                      <div className="flex-row">
                      
                        <div onClick={e => this.filterMethod('Home', !this.state.filters["Home"], "Respite location")}  className="vertically-center">
                          { this.state.filters["Home"] && <img className="big-radio2" src={CheckActive} /> }
                          { !this.state.filters["Home"] && <img className="big-radio2" src={CheckDefault} /> }
                          <div className="top-down-15">
                            <div>  Home </div>
                            <div className="example-text"> Lorem ipsum sedem unde umnis iste ofter aslan</div>
                            <hr></hr>
                          </div>
                        </div>               
                      
                        <div onClick={e => this.filterMethod('Centre', !this.state.filters["Centre"], "Respite location")}  className="vertically-center">
                          { this.state.filters["Centre"] && <img className="big-radio2" src={CheckActive} /> }
                          { !this.state.filters["Centre"] && <img className="big-radio2" src={CheckDefault} /> }
                          <div className="top-down-15">
                            <div>  Centre </div>
                            <div className="example-text"> Lorem ipsum sedem unde umnis iste ofter aslan</div>
                            <hr></hr>
                          </div>
                        </div>               
                    
                        <div onClick={e => this.filterMethod('Aged care home', !this.state.filters["Aged care home"], "Respite location")}  className="vertically-center">
                          { this.state.filters["Aged care home"] && <img className="big-radio2" src={CheckActive} /> }
                          { !this.state.filters["Aged care home"] && <img className="big-radio2" src={CheckDefault} /> }
                          <div className="top-down-15">
                            <div>  Aged care home </div>
                            <div className="example-text"> Lorem ipsum sedem unde umnis iste ofter aslan</div>
                            <hr></hr>
                          </div>
                        </div>               
                      
                        <div onClick={e => this.filterMethod('Community', !this.state.filters["Community"], "Respite location")}  className="vertically-center">
                          { this.state.filters["Community"] && <img className="big-radio2" src={CheckActive} /> }
                          { !this.state.filters["Community"] && <img className="big-radio2" src={CheckDefault} /> }
                          <div className="top-down-15">
                            <div>  Community </div>
                            <div className="example-text"> Lorem ipsum sedem unde umnis iste ofter aslan</div>
                            <hr></hr>
                          </div>
                        </div>               
                      </div>
                    </div>
                    }

                    {(this.state.filters["Help in the home"] && this.state.currentTest) && 
                    <div>
                      <div className="flex-row">

                        
                        <div  className="vertically-center" onClick={e => this.filterMethod('Cleaning, laundry and shopping', !this.state.filters["Cleaning, laundry and shopping"], "Services")}>

                          { this.state.filters["Cleaning, laundry and shopping"] && <img  className="big-radio2" src={CheckActive} /> }
                          { !this.state.filters["Cleaning, laundry and shopping"] && <img onClick={e => this.filterMethod('Cleaning, laundry and shopping', !this.state.filters["Cleaning, laundry and shopping"], "Services")} className="big-radio2" src={CheckDefault} /> }
                          <div  className="top-down-15">
                            <div>  Cleaning, laundry and shopping</div>
                            <div className="example-text"> Help with basic chores around the house</div>
                            <hr></hr>
                          </div>
                        </div>               
                        
                        <div  className="vertically-center" onClick={e => this.filterMethod('Social support', !this.state.filters["Social support"], "Services")}>

                          { this.state.filters["Social support"] && <img className="big-radio2" src={CheckActive} /> }
                          { !this.state.filters["Social support"] && <img className="big-radio2" src={CheckDefault} /> }
                          <div  className="top-down-15">
                            <div>  Social support</div>
                            <div className="example-text"> Contact and company with others</div>
                            <hr></hr>
                          </div>
                        </div>               

                       
                        <div  className="vertically-center" onClick={e => this.filterMethod('Cooking and meals', !this.state.filters["Cooking and meals"], "Services")}>

                          { this.state.filters["Cooking and meals"] && <img className="big-radio2" src={CheckActive} /> }
                          { !this.state.filters["Cooking and meals"] && <img className="big-radio2" src={CheckDefault} /> }
                          <div  className="top-down-15">
                            <div>  Cooking and meals</div>
                            <div className="example-text"> Meals and help with food preparation</div>
                            <hr></hr>
                          </div>
                        </div>               
                       
                        <div  className="vertically-center" onClick={e => this.filterMethod('Home modifications', !this.state.filters["Home modifications"], "Services")}>

                          { this.state.filters["Home modifications"] && <img className="big-radio2" src={CheckActive} /> }
                          { !this.state.filters["Home modifications"] && <img className="big-radio2" src={CheckDefault} /> }
                          <div  className="top-down-15">
                            <div>  Home modifications</div>
                            <div className="example-text"> Changes to your home to improve safety and access, e.g ramps and rails</div>
                            <hr></hr>
                          </div>
                        </div>               
                       
                        <div  className="vertically-center" onClick={e => this.filterMethod('Nursing', !this.state.filters["Nursing"], "Services")}>

                          { this.state.filters["Nursing"] && <img className="big-radio2" src={CheckActive} /> }
                          { !this.state.filters["Nursing"] && <img className="big-radio2" src={CheckDefault} /> }
                          <div  className="top-down-15">
                            <div>  Nursing</div>
                            <div className="example-text">Wound management or help with medicines</div>
                            <hr></hr>
                          </div>
                        </div>               
                       
                        <div  className="vertically-center" onClick={e => this.filterMethod('Homelessness support', !this.state.filters["Homelessness support"], "Services")}>

                          { this.state.filters["Homelessness support"] && <img className="big-radio2" src={CheckActive} /> }
                          { !this.state.filters["Homelessness support"] && <img className="big-radio2" src={CheckDefault} /> }
                          <div  className="top-down-15">
                            <div>  Homelessness support</div>
                            <div className="example-text">Housing and linking support for people experiencing homelessness</div>
                            <hr></hr>
                          </div>
                        </div>               
                       
                        <div  className="vertically-center" onClick={e => this.filterMethod('Allied Health', !this.state.filters["Allied Health"], "Services")}>

                          { this.state.filters["Allied Health"] && <img className="big-radio2" src={CheckActive} /> }
                          { !this.state.filters["Allied Health"] && <img className="big-radio2" src={CheckDefault} /> }
                          <div  className="top-down-15">
                            <div>  Allied Health</div>
                            <div className="example-text">Health and therapy services, e.g. podiatrym occupational therapy</div>
                            <hr></hr>
                          </div>
                        </div>               
                        
                        <div  className="vertically-center" onClick={e => this.filterMethod('Transport', !this.state.filters["Transport"], "Services")}>

                          { this.state.filters["Transport"] && <img className="big-radio2" src={CheckActive} /> }
                          { !this.state.filters["Transport"] && <img className="big-radio2" src={CheckDefault} /> }
                          <div  className="top-down-15">
                            <div>  Transport</div>
                            <div className="example-text"> Community transport or vouchers</div>
                            <hr></hr>
                          </div>
                        </div>               
                        
                        <div  className="vertically-center" onClick={e => this.filterMethod('Aids for mobility, communication and support', !this.state.filters["Aids for mobility, communication and support"], "Services")}>


                          { this.state.filters["Aids for mobility, communication and support"] && <img className="big-radio2" src={CheckActive} /> }
                          { !this.state.filters["Aids for mobility, communication and support"] && <img className="big-radio2" src={CheckDefault} /> }
                          <div  className="top-down-15">
                            <div>  Aids for mobility, communication and support</div>
                            <div className="example-text"> Items to help you get around or adapt, e.g walking frame, shower chair</div>
                            <hr></hr>
                          </div>
                        </div>               
                        
                        <div  className="vertically-center" onClick={e => this.filterMethod('Specialised support', !this.state.filters["Specialised support"], "Services")}>

                          { this.state.filters["Specialised support"] && <img className="big-radio2" src={CheckActive} /> }
                          { !this.state.filters["Specialised support"] && <img className="big-radio2" src={CheckDefault} /> }
                          <div  className="top-down-15">
                            <div>  Specialised support</div>
                            <div className="example-text"> Help for people with a particlar condition e.g. vision, dementia</div>
                            <hr></hr>
                          </div>
                        </div>               
                         
                        <div  className="vertically-center" onClick={e => this.filterMethod('Gardening and maintenance', !this.state.filters["Gardening and maintenance"], "Services")}>

                          { this.state.filters["Gardening and maintenance"] && <img className="big-radio2" src={CheckActive} /> }
                          { !this.state.filters["Gardening and maintenance"] && <img className="big-radio2" src={CheckDefault} /> }
                          <div  className="top-down-15">
                            <div>  Gardening and maintenance</div>
                            <div className="example-text"> Help with keeping your home and garden safe</div>
                            <hr></hr>
                          </div>
                        </div>               
                        
                      </div>
                      
                      <h5> Higher level care </h5>

                      <div className="flex-row">
                        <div onClick={e => this.filterMethod('Home care package', !this.state.filters["Home care package"], "Services")} className="vertically-center">
                            { this.state.filters["Home care package"] && <img className="big-radio2" src={CheckActive} /> }
                            { !this.state.filters["Home care package"] && <img className="big-radio2" src={CheckDefault} /> }
                            <div className="top-down-15">
                              <div>  Home care package 1 - 4 </div>
                              <div className="example-text"> A coordinated package of care and services to help maintain independence</div>
                              <hr></hr>
                            </div>

                        </div>               

                        <div onClick={e => this.filterMethod('After hospital care', !this.state.filters["After hospital care"], "Services")} className="vertically-center">
                            { this.state.filters["After hospital care"] && <img className="big-radio2" src={CheckActive} /> }
                            { !this.state.filters["After hospital care"] && <img className="big-radio2" src={CheckDefault} /> }
                            <div className="top-down-15">
                              <div> After hospital care </div>
                              <div className="example-text"> Transition care and rehabilitation support</div>
                              <hr></hr>
                            </div>

                        </div>
                      </div>
                    </div>
                    }
                    {(this.state.filters["Help in the home"] && !this.state.currentTest) && 
                    <div>
                      <div className="flex-row">

                        
                        <div onClick={e => this.filterMethod('Cleaning, laundry and shopping', !this.state.filters["Cleaning, laundry and shopping"])}  className="vertically-center">
                          { this.state.filters["Cleaning, laundry and shopping"] && <img className="big-radio2" src={CheckActive} /> }
                          { !this.state.filters["Cleaning, laundry and shopping"] && <img className="big-radio2" src={CheckDefault} /> }
                          <div className="top-down-15">
                            <div>  Domestic Assistance </div>
                            <div className="example-text"> Help with basic chores around the house</div>
                            <hr></hr>
                          </div>
                        </div>               

                        <div onClick={e => this.filterMethod('Allied Health', !this.state.filters["Allied Health"])}  className="vertically-center">
                          { this.state.filters["Allied Health"] && <img className="big-radio2" src={CheckActive} /> }
                          { !this.state.filters["Allied Health"] && <img className="big-radio2" src={CheckDefault} /> }
                          <div className="top-down-15">
                            <div>  Allied Health and Therapy Services </div>
                            <div className="example-text"> Health and therapy services, e.g podiatry, occupational therapy</div>
                            <hr></hr>
                          </div>
                        </div>               

                        <div onClick={e => this.filterMethod('Cooking and meals', !this.state.filters["Cooking and meals"])}  className="vertically-center">
                          { this.state.filters["Cooking and meals"] && <img className="big-radio2" src={CheckActive} /> }
                          { !this.state.filters["Cooking and meals"] && <img className="big-radio2" src={CheckDefault} /> }
                          <div className="top-down-15">
                            <div>  Meals </div>
                            <div className="example-text"> Meals at a centre or delivered to your home</div>
                            <hr></hr>
                          </div>
                        </div>               

                        <div onClick={e => this.filterMethod('Social support', !this.state.filters["Social support"])}  className="vertically-center">
                          { this.state.filters["Social support"] && <img className="big-radio2" src={CheckActive} /> }
                          { !this.state.filters["Social support"] && <img className="big-radio2" src={CheckDefault} /> }
                          <div className="top-down-15">
                            <div>  Social support (individual) </div>
                            <div className="example-text"> Contact and company with others one-on-one</div>
                            <hr></hr>
                          </div>
                        </div>               


                        <div onClick={e => this.filterMethod('Cooking and meals', !this.state.filters["Cooking and meals"])}  className="vertically-center">
                          { this.state.filters["Cooking and meals"] && <img className="big-radio2" src={CheckActive} /> }
                          { !this.state.filters["Cooking and meals"] && <img className="big-radio2" src={CheckDefault} /> }
                          <div className="top-down-15">
                            <div>  Other meal services </div>
                            <div className="example-text"> Help with food preperation and advice</div>
                            <hr></hr>
                          </div>
                        </div>               

                        <div onClick={e => this.filterMethod('Social support', !this.state.filters["Social support"])}  className="vertically-center">
                          { this.state.filters["Social support"] && <img className="big-radio2" src={CheckActive} /> }
                          { !this.state.filters["Social support"] && <img className="big-radio2" src={CheckDefault} /> }
                          <div className="top-down-15">
                            <div>  Social support (group) </div>
                            <div className="example-text"> Contact and company with others as a group</div>
                            <hr></hr>
                          </div>
                        </div>               


                        <div onClick={e => this.filterMethod('Nursing', !this.state.filters["Nursing"])}  className="vertically-center">
                          { this.state.filters["Nursing"] && <img className="big-radio2" src={CheckActive} /> }
                          { !this.state.filters["Nursing"] && <img className="big-radio2" src={CheckDefault} /> }
                          <div className="top-down-15">
                            <div>  Nursing </div>
                            <div className="example-text"> Wound management or help with medicines</div>
                            <hr></hr>
                          </div>
                        </div>               

                        <div onClick={e => this.filterMethod('Home maintenance', !this.state.filters["Home maintenance"])}  className="vertically-center">
                          { this.state.filters["Home maintenance"] && <img className="big-radio2" src={CheckActive} /> }
                          { !this.state.filters["Home maintenance"] && <img className="big-radio2" src={CheckDefault} /> }
                          <div className="top-down-15">
                            <div>  Home maintenance </div>
                            <div className="example-text"> Help with keeping your home and garden safe to use and access</div>
                            <hr></hr>
                          </div>
                        </div>               

                        <div onClick={e => this.filterMethod('Showering and self-care', !this.state.filters["Showering and self-care"])}  className="vertically-center">
                          { this.state.filters["Showering and self-care"] && <img className="big-radio2" src={CheckActive} /> }
                          { !this.state.filters["Showering and self-care"] && <img className="big-radio2" src={CheckDefault} /> }
                          <div className="top-down-15">
                            <div> Personal care</div>
                            <div className="example-text">Help with showering, self-care, hygiene and grooming</div>
                            <hr></hr>
                          </div>
                        </div>   

                        <div onClick={e => this.filterMethod('Home modificiations', !this.state.filters["Home modificiations"])}  className="vertically-center">
                          { this.state.filters["Home modificiations"] && <img className="big-radio2" src={CheckActive} /> }
                          { !this.state.filters["Home modificiations"] && <img className="big-radio2" src={CheckDefault} /> }
                          <div className="top-down-15">
                            <div>  Home Modificatoins </div>
                            <div className="example-text"> Changes to your home to improve safety and access</div>
                            <hr></hr>
                          </div>

                        </div>               

                        <div onClick={e => this.filterMethod('Transport', !this.state.filters["Transport"])}  className="vertically-center">
                          { this.state.filters["Transport"] && <img className="big-radio2" src={CheckActive} /> }
                          { !this.state.filters["Transport"] && <img className="big-radio2" src={CheckDefault} /> }
                          <div className="top-down-15">
                            <div>  Transport </div>
                            <div className="example-text"> Community transport or vouchers to help you get around</div>
                            <hr></hr>
                          </div>

                        </div>               

                        <div onClick={e => this.filterMethod('Aids for mobility, communication and support', !this.state.filters["Aids for mobility, communication and support"])}  className="vertically-center">
                          { this.state.filters["Aids for mobility, communication and support"] && <img className="big-radio2" src={CheckActive} /> }
                          { !this.state.filters["Aids for mobility, communication and support"] && <img className="big-radio2" src={CheckDefault} /> }
                          <div className="top-down-15">
                            <div>  Goods, equipment and assistive technology</div>
                            <div className="example-text" > Items to help you get around or adapt, e.g. walking frame, shower chair</div>
                            <br></br>
                            <hr></hr>
                          </div>

                        </div>               

                      </div>
                      
                      <h5> Higher level care </h5>

                      <div className="flex-row">
                        <div onClick={e => this.filterMethod('Home care package', !this.state.filters["Home care package"])} className="vertically-center">
                            { this.state.filters["Home care package"] && <img className="big-radio2" src={CheckActive} /> }
                            { !this.state.filters["Home care package"] && <img className="big-radio2" src={CheckDefault} /> }
                            <div className="top-down-15">
                              <div>  Home care package 1 - 4 </div>
                              <div className="example-text"> A coordinated package of care and services to help maintain independence</div>
                              <hr></hr>
                            </div>

                        </div>               

                        <div onClick={e => this.filterMethod('After hospital care', !this.state.filters["After hospital care"])} className="vertically-center">
                            { this.state.filters["After hospital care"] && <img className="big-radio2" src={CheckActive} /> }
                            { !this.state.filters["After hospital care"] && <img className="big-radio2" src={CheckDefault} /> }
                            <div className="top-down-15">
                              <div> After hospital care </div>
                              <div className="example-text"> Transition care and rehabilitation support</div>
                              <hr></hr>
                            </div>

                        </div>
                      </div>
                    </div>
                    }


                    <div className="not-sure"> Still not sure? </div>

                    <div className="location-search-row">
                      <input value={this.state.searchProviderValue} onChange={e => this.inputChanged(e)} type="text" name="searchProviderValue" placeholder="What help do you need?" className="location-search-bar"/>
                      <button onClick={this.searchProviders} className="service-search-button"> Search </button>
                    </div>

                  </div> {/*------- End Container ------*/}

                </div> 
                <div className="container">
                  <h3> An assessment will help you find the services you need: </h3>
                  <a href="/Assessment/Register">
                    <div className="white-box">
                      <div className="circle-icon">
                        <div className="white-text"> 1 </div>
                      </div>
                      <div className="grey-text"> Register with Myagedcare </div>
                    </div>
                  </a>

                  <a href="/Assessment/GetAssessment">
                    <div className="white-box">
                      <div className="circle-icon">
                        <div className="white-text"> 2 </div>
                      </div>
                      <div className="grey-text"> Get an Assessment </div>
                    </div>
                  </a>

                </div>
              </div>

            : 
              <div>
                {this.state.compare.length > 0 && 
                  <div className="compare-bar">
                    <div className="title"> Compare </div>
                    <div className="tags">
                      
                      {Object.keys(this.state.compare).map (item => {
                             if (this.state.compare[item]) {
                              return (
                              <div key={item} className="tag-bubble"> <div className="text">{this.state.compare[item].Outlet_Name}</div> <div className="circle-icon"> <img src={Cross_Tag} className="cross-tag"/></div>  </div>
                              )
                             }  
                            })}

                      <button onClick={this.openCompareView} className="button"> Compare </button>
                    </div>
                  </div>
                }
                <div className="results-counts-row" id={'results-section'} >
                  <div className="result-counts" >
                    {this.state.searchResults.length} Results found:
                  </div>
                  <div className="hide-mobile">
                    <TagBubbles filters={this.state.filters} removeTag={this.removeTag} location={this.state.locationTag} keyword={this.state.keywordTag}/>
                  </div>
                  <div className="mobile-filter-button" onClick={this.showHideFilters}>
                    {this.state.hideFilters && <img className="filter-icon" src={FilterDefault}/>}
                    {!this.state.hideFilters && <img className="filter-icon" src={FilterActive}/>}
                  </div>
                </div>
                <div className="show-mobile">
                  <TagBubbles filters={this.state.filters} removeTag={this.removeTag} location={this.state.locationTag} keyword={this.state.keywordTag}/>
                </div>
                <div className="results-flex">
                  <div className="filter-col-30" style={{flexGrow: "0"}}>
                    {!this.state.hideFilters && <FilterColumn openHeaders={this.state.openHeaders} hideFilters={this.showHideFilters} filters={this.state.filters} filterMethod={this.filterMethod}/>}
                  </div>

                  <div className="results-col-70" >
                    <div className="view-options">
                      View: <Dropdown options={view_options} onChange={this._onSelect} value="List" className="view-options-dropdown" placeholder="Standard hours" /> 
                    </div>
                    {this.state.isSearching &&
                      <div className="spinner-class">
                        <Spinner name="chasing-dots" color="#1F6193"/>
                      </div>
                    }
                    {(this.state.searchResults.length == 0 && !this.state.isSearching) ? "No Results Found.." :
                      <div> 
                        {this.state.searchResults.map(function(item, index) {
                          return (
                            <ResultCard imgsrc={Image} wholeObject={item} compare={this.state.compare} compareMethod={this.addCompare} filters={this.state.filters} funded={item.Funded} index={index} key={item.Organisation_ID} phone={item.Enquiry_Phone} business={item.Organisation_Name} services={item.Service_Type} subService={item.Service_Sub_Types} title={item.Outlet_Name} profileMethod={this.viewProfile}> {item.Description} </ResultCard> 
                          )
                        }, this)}
                      </div>
                    }
                  </div>
                </div>
              </div>
            }
            {/* -------------------- End Search Results ----------------- */}
          </div>
        }

            {/* -------------------- Begin Compare View----------------- */}
        {
          this.state.compareViewOpen && <div className="compare-view">
            <div className="compare-bar">
              <div className="title"> Compare </div>
              <div className="tags">
                
                {Object.keys(this.state.compare).map (item => {
                       if (this.state.compare[item]) {
                        return (
                        <div key={item} className="tag-bubble"> <div className="text">{this.state.compare[item].Outlet_Name}</div> <div className="circle-icon"> <img src={Cross_Tag} className="cross-tag"/></div>  </div>
                        )
                       }  
                })}

              </div>
            </div>
            <div className="container" >
              <button className="return-results-button" onClick={this.openCompareView} id={'compare-section'}> Return to results </button>
              <div className="flex-row" style={{justifyContent: 'space-between'}}>
                <div style={{width: '15vw'}}>
                  &nbsp;
                </div>
                
                {Object.keys(this.state.compare).map (item => {
                       if (this.state.compare[item]) {
                        return (
                        <div className="compare-title">
                          <h5 key={item} style={{marginRight: '15px'}}> {this.state.compare[item].Outlet_Name} </h5>
                        </div>
                        )
                       }  
                })}

              </div>

              <hr></hr>
              <div className="flex-row" style={{justifyContent: 'space-between'}}>
                <p style={{width: '15vw'}}>
                  Availabilty
                </p>
                
                {Object.keys(this.state.compare).map (item => {
                       if (this.state.compare[item]) {
                        return (
                          <div key={item} className="circle-icon small-size"><img className="tick-icon" src={Tick}/></div>
                        )
                       }  
                })}
              </div>

              <hr></hr>
              <div className="flex-row" style={{justifyContent: 'space-between'}}>
                <p style={{width: '15vw'}}>
                  Government Subsidised
                </p>
                
                {Object.keys(this.state.compare).map (item => {
                       if (this.state.compare[item].Funded == "Yes") {
                        return (
                          <div key={item} className="circle-icon small-size"><img className="tick-icon" src={Tick}/></div>
                        )
                       }  
                })}
              </div>


              <hr></hr>
              <div className="flex-row" style={{justifyContent: 'space-between'}}>
                <p style={{width: '15vw'}}>
                  Self Management
                </p>
                {Object.keys(this.state.compare).map (item => {
                       if (this.state.compare[item].Funded == "Yes") {
                        return (
                            <div className="circle-icon small-size"><img className="tick-icon" src={Tick}/></div>
                        )
                       }  
                })}

              </div>
            </div>

            <div className="divider">
              Services offered 
            </div>

            <div className="container">

              <div className="flex-row" style={{justifyContent: 'space-between', flexWrap: 'nowrap'}}>
                <p style={{paddingRight: '15vw'}}>  </p>
                
                {Object.keys(this.state.compare).map (item => {
                       if (this.state.compare[item]) {
                        return (

                          <p key={item} className="paragraph-cell" >  Our 160 bed Griffith Centre is Canberra's newest residential aged care centre. Conveniently located near the CBD, Lake Burley Griffin, Shopping precincts</p>
                        )
                       }  
                })}

              </div>

              <hr></hr>

              <div className="flex-row" style={{justifyContent: 'space-between', flexWrap: 'nowrap'}}>
 
                <p style={{width: '5vw'}}>
                  Contact Number
                </p>
               
                {Object.keys(this.state.compare).map (item => {
                       if (this.state.compare[item]) {
                        return (
                          <div className="div-cell">
                            <div className="phone">
                              (02) 6123 4567
                            </div>

                            <p>
                              Mon - Fri: 9am - 6pm <br></br>
                              Sat: 9am - 3pm <br></br>
                              Sun: 10am - 3pm <br></br>
                            </p>
                          </div>
                        )
                       }  
                })}

              </div>

              <hr></hr>

              <div className="flex-row" style={{justifyContent: 'space-between', flexWrap: 'nowrap'}}>
 
                <p style={{width: '15vw'}}>
                  Website
                </p>
                {Object.keys(this.state.compare).map (item => {
                       if (this.state.compare[item]) {
                        return(<div className="phone div-cell"> websitelink.com.au </div>)
                          
                       }  
                })}

              </div>

            </div>

            <div className="divider">
              Specialised Support
            </div>
            <br></br>
            <div className="divider" style={{backgroundColor: '#e8e8e8', marginTop: '-20px', color: '#4f4f4f'}}>
              Culture
            </div>
            <div className="container">

              <div className="flex-row" style={{justifyContent: 'space-between', flexWrap: 'nowrap'}}>
 
                <p style={{width: '15vw'}}>
                  Languages other than english
                </p>
                {Object.keys(this.state.compare).map (item => {
                  if(this.state.compare.indexOf(this.state.compare[item]) == 0)
                    return(<p> "Italian, German"</p>);
                  else if(this.state.compare.indexOf(this.state.compare[item]) == 1)
                    return(<p> "Thai, Japanese"</p>);

                  else if(this.state.compare.indexOf(this.state.compare[item]) == 2)           
                    return(<p> "Arabic, Italian, Mandarin"</p>);
                })}

              </div>

              <hr></hr>
              <div className="flex-row" style={{justifyContent: 'space-between', flexWrap: 'nowrap'}}>
 
                <p style={{width: '15vw'}}>
                  Food
                </p>

              </div>
              <hr></hr>

              <div className="flex-row" style={{justifyContent: 'space-between', flexWrap: 'nowrap'}}>
 
                <p style={{width: '15vw'}}>
                  Religions
                </p>
                {Object.keys(this.state.compare).map (item => {
                  if(this.state.compare.indexOf(this.state.compare[item]) == 0)
                    return(<p> "Christian"</p>);
                  else if(this.state.compare.indexOf(this.state.compare[item]) == 1)
                    return(<p> "Anglican, Budhism"</p>);

                  else if(this.state.compare.indexOf(this.state.compare[item]) == 2)           
                    return(<p> "Orthodox"</p>);
                })}

              </div>

            </div>
            <div className="divider" style={{backgroundColor: '#e8e8e8', color: "#4f4f4f", borderBottom: '24px solid white'}}>
              Diverse backgrounds
            </div>
            <div className="divider" style={{backgroundColor: '#e8e8e8', color: "#4f4f4f", marginTop: '-20px', borderBottom: '3px solid white'}}>
              Care needs
            </div>
            <div className="divider" style={{marginTop: '0'}} >
              Costs
            </div>

            <div className="container">

              <div className="flex-row" style={{justifyContent: 'space-between', flexWrap: 'nowrap'}}>
                <h5>Price for common services</h5>
                <div style={{display:'flex', alignItems: 'center'}}>
                  View: <Dropdown options={cost_options} onChange={this._onSelect} value={cost_options[0]} className="narrow-dropdown2" placeholder="Standard hours" /> 
                </div>
              </div>

              <hr></hr>
              <div className="flex-row" style={{justifyContent: 'space-between', flexWrap: 'nowrap'}}>
                <p style={{width: '15vw'}}>
                  Social Support
                </p>
                {Object.keys(this.state.compare).map (item => {
                  if(this.state.compare.indexOf(this.state.compare[item]) == 0)
                    return(<p> ${cost_seed}</p>);
                  else if(this.state.compare.indexOf(this.state.compare[item]) == 1)
                    return(<p> ${cost_seed2}</p>);
                  else if(this.state.compare.indexOf(this.state.compare[item]) == 2)           
                    return(<p> ${cost_seed3}</p>);
                })}

              </div>

              <hr></hr>
              <div className="flex-row" style={{justifyContent: 'space-between', flexWrap: 'nowrap'}}>
                <p style={{width: '15vw'}}>
                  Personal Care
                </p>
                {Object.keys(this.state.compare).map (item => {
                  if(this.state.compare.indexOf(this.state.compare[item]) == 0)
                    return(<p> ${cost_seed}</p>);
                  else if(this.state.compare.indexOf(this.state.compare[item]) == 1)
                    return(<p> ${cost_seed2}</p>);
                  else if(this.state.compare.indexOf(this.state.compare[item]) == 2)           
                    return(<p> ${cost_seed3}</p>);
                })}

              </div>


              <hr></hr>
              <div className="flex-row" style={{justifyContent: 'space-between', flexWrap: 'nowrap'}}>
                <p style={{width: '15vw'}}>
                  Nursing
                </p>
                {Object.keys(this.state.compare).map (item => {
                  if(this.state.compare.indexOf(this.state.compare[item]) == 0)
                    return(<p> ${cost_seed}</p>);
                  else if(this.state.compare.indexOf(this.state.compare[item]) == 1)
                    return(<p> ${cost_seed2}</p>);
                  else if(this.state.compare.indexOf(this.state.compare[item]) == 2)           
                    return(<p> ${cost_seed3}</p>);
                })}

              </div>


              <hr></hr>
              <div className="flex-row" style={{justifyContent: 'space-between', flexWrap: 'nowrap'}}>
                <p style={{width: '15vw'}}>
                  Cleaning and household tasks
                </p>
                {Object.keys(this.state.compare).map (item => {
                  if(this.state.compare.indexOf(this.state.compare[item]) == 0)
                    return(<p> ${cost_seed}</p>);
                  else if(this.state.compare.indexOf(this.state.compare[item]) == 1)
                    return(<p> ${cost_seed2}</p>);
                  else if(this.state.compare.indexOf(this.state.compare[item]) == 2)           
                    return(<p> ${cost_seed3}</p>);
                })}

              </div>


              <hr></hr>
              <div className="flex-row" style={{justifyContent: 'space-between', flexWrap: 'nowrap'}}>
                <p style={{width: '15vw'}}>
                  Transport by car
                </p>
                {Object.keys(this.state.compare).map (item => {
                  if(this.state.compare.indexOf(this.state.compare[item]) == 0)
                    return(<p> ${cost_seed}</p>);
                  else if(this.state.compare.indexOf(this.state.compare[item]) == 1)
                    return(<p> ${cost_seed2}</p>);
                  else if(this.state.compare.indexOf(this.state.compare[item]) == 2)           
                    return(<p> ${cost_seed3}</p>);
                })}

              </div>


              <hr></hr>
              <div className="flex-row" style={{justifyContent: 'space-between', flexWrap: 'nowrap'}}>
                <p style={{width: '15vw'}}>
                  Meal preparation
                </p>
                {Object.keys(this.state.compare).map (item => {
                  if(this.state.compare.indexOf(this.state.compare[item]) == 0)
                    return(<p> ${cost_seed}</p>);
                  else if(this.state.compare.indexOf(this.state.compare[item]) == 1)
                    return(<p> ${cost_seed2}</p>);
                  else if(this.state.compare.indexOf(this.state.compare[item]) == 2)           
                    return(<p> ${cost_seed3}</p>);
                })}

              </div>


              <hr></hr>
              <div className="flex-row" style={{justifyContent: 'space-between', flexWrap: 'nowrap'}}>
                <p style={{width: '15vw'}}>
                  Light gardening
                </p>
                {Object.keys(this.state.compare).map (item => {
                  if(this.state.compare.indexOf(this.state.compare[item]) == 0)
                    return(<p> ${cost_seed}</p>);
                  else if(this.state.compare.indexOf(this.state.compare[item]) == 1)
                    return(<p> ${cost_seed2}</p>);
                  else if(this.state.compare.indexOf(this.state.compare[item]) == 2)           
                    return(<p> ${cost_seed3}</p>);
                })}

              </div>


              <hr></hr>
              <div className="flex-row" style={{justifyContent: 'space-between', flexWrap: 'nowrap'}}>
                <p style={{width: '15vw'}}>
                  In-home respite
                </p>
                {Object.keys(this.state.compare).map (item => {
                  if(this.state.compare.indexOf(this.state.compare[item]) == 0)
                    return(<p> ${cost_seed}</p>);
                  else if(this.state.compare.indexOf(this.state.compare[item]) == 1)
                    return(<p> ${cost_seed2}</p>);
                  else if(this.state.compare.indexOf(this.state.compare[item]) == 2)           
                    return(<p> ${cost_seed3}</p>);
                })}

              </div>


              <hr></hr>
              <div className="flex-row" style={{justifyContent: 'space-between', flexWrap: 'nowrap'}}>
                <p style={{width: '15vw'}}>
                  Sleepover/overnight respite
                </p>
                {Object.keys(this.state.compare).map (item => {
                  if(this.state.compare.indexOf(this.state.compare[item]) == 0)
                    return(<p> ${cost_seed}</p>);
                  else if(this.state.compare.indexOf(this.state.compare[item]) == 1)
                    return(<p> ${cost_seed2}</p>);
                  else if(this.state.compare.indexOf(this.state.compare[item]) == 2)           
                    return(<p> ${cost_seed3}</p>);
                })}

              </div>
              <hr></hr>

              <br></br>
              <div className="flex-row" style={{justifyContent: 'space-between', flexWrap: 'nowrap'}}>
                <h5>Other Charges</h5>
                <div style={{display:'flex', alignItems: 'center'}}>
                  View: <Dropdown options={[]} onChange={this._onSelect} value={"Level one"} className="narrow-dropdown2" placeholder="Standard hours" /> 
                </div>
              </div>

              <hr></hr>
              <div className="flex-row" style={{justifyContent: 'space-between', flexWrap: 'nowrap'}}>
                <p style={{width: '15vw'}}>
                  Package Management
                </p>
                {Object.keys(this.state.compare).map (item => {
                  if(this.state.compare.indexOf(this.state.compare[item]) == 0)
                    return(<p> ${cost_seed}</p>);
                  else if(this.state.compare.indexOf(this.state.compare[item]) == 1)
                    return(<p> ${cost_seed2}</p>);
                  else if(this.state.compare.indexOf(this.state.compare[item]) == 2)           
                    return(<p> ${cost_seed3}</p>);
                })}

              </div>


              <hr></hr>
              <div className="flex-row" style={{justifyContent: 'space-between', flexWrap: 'nowrap'}}>
                <p style={{width: '15vw'}}>
                  Maximum exit amount
                </p>
                {Object.keys(this.state.compare).map (item => {
                  if(this.state.compare.indexOf(this.state.compare[item]) == 0)
                    return(<p> ${cost_seed}</p>);
                  else if(this.state.compare.indexOf(this.state.compare[item]) == 1)
                    return(<p> ${cost_seed2}</p>);
                  else if(this.state.compare.indexOf(this.state.compare[item]) == 2)           
                    return(<p> ${cost_seed3}</p>);
                })}

              </div>


              <hr></hr>
              <div className="flex-row" style={{justifyContent: 'space-between', flexWrap: 'nowrap'}}>
                <p style={{width: '15vw'}}>
                  Staff travel cost to visit client
                </p>
                {Object.keys(this.state.compare).map (item => {
                  if(this.state.compare.indexOf(this.state.compare[item]) == 0)
                    return(<p> ${cost_seed}</p>);
                  else if(this.state.compare.indexOf(this.state.compare[item]) == 1)
                    return(<p> ${cost_seed2}</p>);
                  else if(this.state.compare.indexOf(this.state.compare[item]) == 2)           
                    return(<p> ${cost_seed3}</p>);
                })}

              </div>


              <hr></hr>
              <div className="flex-row" style={{justifyContent: 'space-between', flexWrap: 'nowrap'}}>
                <p style={{width: '15vw'}}>
                  Seperate charge to recieve services from a different provider?
                </p>
                {Object.keys(this.state.compare).map (item => {
                  if(this.state.compare.indexOf(this.state.compare[item]) == 0)
                    return(<p> ${cost_seed}</p>);
                  else if(this.state.compare.indexOf(this.state.compare[item]) == 1)
                    return(<p> ${cost_seed2}</p>);
                  else if(this.state.compare.indexOf(this.state.compare[item]) == 2)           
                    return(<p> ${cost_seed3}</p>);
                })}

              </div>

              <br></br>
              <div style={{marginLeft: 'auto'}}>
                <button className="return-results-button" onClick={this.openCompareView}> Return to results </button>
              </div>


            </div>


          </div>
        }
        {/* -------------------- End Compare View----------------- */}
        <Footer/>
    </div>
    );
  }
}

export default Services;
