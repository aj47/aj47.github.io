import React, { Component } from "react";
import NavBar from '../NavBar/NavBar';
import TopBar from '../TopBar/TopBar';
import Style from '../style.css';
import PhoneBlue from '../phoneBlue.svg';
import FlatButtonBlue from '../FlatButtonBlue/FlatButtonBlue'
import CheckBox from '../checkbox.svg';

const white = {
  backgroundColor: 'white',
  color: '#1F6193'
}


class AboutAgedCare extends Component {
  
  constructor(props) {
    super();
    console.log(props.location);
    this.state = {
      section: props.location.pathname.split("/")[2]
    }
  }

  render() {
    return (<div>
        <TopBar> </TopBar>
        <div className="nav-bar"> <NavBar> </NavBar> </div>

        {(this.state.section == "HelpStayHome" || this.state.section == null) && <div>

          <div className="service-header">
            <div className="container">
              <div className="white-text"> Help to stay at home </div>

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
            <div className="page-legend">
              About aged care > <a> Help to stay at home </a>
            </div>
            
            <br></br>
            <br></br>
            <p>
            Get help to stay independent at home, such as: 
            <br></br>
            <br></br>
            • personal care like help getting dressed or showering 
            <br></br>
            •	transport 
            <br></br>
            •	modifications to your home, such as hand rails or ramps 
            <br></br>
            •	nursing, physiotherapy and other care 
            <br></br>
            •	meals and help with cooking 
            <br></br>
            •	household jobs like cleaning or gardening 
            <br></br>
            •	equipment like walking frames 
            <br></br>
            •	social activities. 
            <br></br>
            <br></br>

            <h4> Entry-level support at home </h4>
            <br></br>
            If you need some basic support to stay at home, access the Commonwealth 
            <br></br>
            
            <h4> More complex support at home</h4>
            <br></br>
            If you need a more coordinated package of care in the home, access a Home Care Package. There are four levels of home care packages, ranging from level 1 for basic care needs through to level 4 for high level care needs.
            </p>
          </div>
        
        </div>} 
        { /*--------------- End HelpStayHome --------------------------- */}

        {this.state.section == "Respite" && <div>

          <div className="service-header">
            <div className="container">
              <div className="white-text"> Respite and short term care</div>

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
            <div className="page-legend">
              About aged care > <a> Respite and short term care</a>
            </div>
            
            <br></br>
            <br></br>
            <p>
              Respite and short term care is there for:
              <br></br>
              <br></br>
              •	when you have had a setback and want to get your independence back 
              <br></br>
              •	recovery from an accident or illness, including after a hospital stay 
              <br></br>
              •	when you or your carer needs a break
              <br></br>
              <br></br>
              To find out if you need an assessment and if you are eligible for short-term help services, call Myagedcare on 1800 200 422.
              <br></br>
              <br></br>
            </p>

            <hr></hr>
            <br></br>
            <h3> Related Topics </h3>
            <br></br>

            <div className="results-flex">
              <div>
                <h4> Timeframes </h4>
                <div className="p-container">
                  <p>
                    or too late to talk about aged care. Talking about getting some extra help doesn't
                  </p>
                </div>
                <FlatButtonBlue> Read More </FlatButtonBlue>
              </div>
              <div>
                <h4> Planning ahead </h4>
                <div className="p-container">
                  <p>
                    or too late to talk about aged care. Talking about getting some extra help doesn't
                  </p>
                </div>
                <FlatButtonBlue> Read More </FlatButtonBlue>
              </div>
            </div>
            <br></br>
            <br></br>

          </div>

        </div>} 
        { /*--------------- End Respite --------------------------- */}
        {this.state.section == "AgedCareHomes" && <div>

          <div className="service-header">
            <div className="container">
              <div className="white-text"> Aged care homes </div>

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
            <div className="page-legend">
              About aged care > <a> Aged care homes</a>
            </div>
            
            <br></br>
            <br></br>
            <b> An aged care home is a supported environment where help is available 24 hours a day. </b>
            <br></br>
            <p>
              Care and services include:
              <br></br>

              <h5> Hotel services: </h5>
              •	Administration 
              <br></br>
              • Maintenance of grounds and buildings 
              <br></br>
              •	Utilities 
              <br></br>
              • furnishings (bedside locker, chairs with arms, containers for personal laundry, dining, lounge and recreational furnishing) 
              <br></br>
              •	bedding (beds, mattresses, bed linen, blankets and absorbent or waterproof sheeting) 
              <br></br>
              •	cleaning services, goods and facilities 
              <br></br>
              •	waste disposal 
              <br></br>
              •	laundry 
              <br></br>
              •	basic toiletries 
              <br></br>
              •	meals and refreshments (including special dietary requirements) 
              <br></br>
              •	social activities at the home 
              <br></br>
              •	help in emergencies.

              <h5>Personal care assistance: </h5>
              <br></br>
              •	bathing, showering, personal hygiene and grooming 
              <br></br>
              •	going to the toilet/maintaining continence 
              <br></br>
              •	eating 
              <br></br>
              •	dressing 
              <br></br>
              •	moving 
              <br></br>
              • emotional support 
              <br></br>
              •	assistance with taking medications 
              <br></br>
              •	ordering and reordering medications 
              <br></br>
              •	carrying out treatments and procedures as per the instructions of a health professional (includes bandages, dressings, swabs and saline) 
              <br></br>
              •	recreational therapy 
              <br></br>
              •	rehabilitation support 
              <br></br>
              •	arranging access to health professionals 
              <br></br>
              •	support for care recipients with cognitive impairment. 
              <br></br>

              <h5>Complex care and services (depending on your assessed care needs, you may be asked to pay additional fees for these services): </h5>
              <br></br>
              •	special bedding materials 
              <br></br>
              •	mobility goods (excludes motorised wheelchairs and custom made aids)
              <br></br>
              • and incontinence aids 
              <br></br>
              •	nursing services including an initial assessment and care planning 
              <br></br>
              •	therapy services such as recreational activities, speech therapy, podiatry (foot care), occupational, and physiotherapy services (excluding intensive, long-term rehabilitation after serious illness or injury, surgery or trauma).

            </p>

            <br></br>
            <br></br>

          </div>

        </div>} 
        { /*--------------- End agedcarehomes --------------------------- */}
        {this.state.section == "Eligibility" && <div>

          <div className="service-header">
            <div className="container">
              <div className="white-text"> Eligibility</div>

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
            <div className="page-legend">
              About aged care > <a> Eligibility</a>
            </div>
            
            <br></br>
            <br></br>
            <p>
              you may be eligible for australian government funded aged care if:
              <br></br>
              <br></br>
              • you are an older person, usually over 65 or over 50 for aboriginal and torres strait islander people; and 
              <br></br>
              • you are finding it harder to do the things you used to do.
              <br></br>
              <br></br>
              you will need to have a face-to-face assessment of your care needs to find out if you are eligible. if you are eligible, you can access services that: 
              <br></br>
              <br></br>
              • may be partly or fully funded by the australian government; and 
              <br></br>
              • are regulated by the australian government. 
              <br></br>
              <br></br>
              if you’re not eligible, or are waiting for services, you can access at any time.
            </p>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
          </div>

        </div>}
        { /*--------------- End Eligibility --------------------------- */}

        {this.state.section == "Costs" && <div>

          <div className="service-header">
            <div className="container">
              <div className="white-text"> Costs</div>

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
            <div className="page-legend">
              About aged care > <a> Costs</a>
            </div>
            
            <br></br>
            <br></br>
            <p>
              <b>
                The Australian Government contributes to the cost of aged care services. You’re expected to contribute if you can afford to. Costs vary for different types of care and different service providers. There are no standard costs for aged care services.
              </b> 
              <br></br>
              <br></br>
              How much you pay depends on: 
              <br></br>
              <br></br>
              • your financial situation 
              <br></br>
              •	the number and types of services you receive 
              <br></br>
              •	the service provider’s fees.
              <br></br>
              <br></br>
              If you’re ready to access services, call My Aged Care to find out which type of aged care you are eligible for. Read about costs for that type of care or program under Find and set up services.
              <br></br>
              <br></br>
              If you want a Home Care Package, or care in an aged care home, it’s important to get a financial assessment from the Department of Human Services as soon as possible. This will help you to work out costs with service providers when you’re ready to find and set up your services.
            </p>
            <FlatButtonBlue> Estimate your fees </FlatButtonBlue>


          </div>

        </div>}
        { /*--------------- End Costs --------------------------- */}

        {this.state.section == "PlanningAhead" && <div>

          <div className="service-header">
            <div className="container">
              <div className="white-text"> Planning ahead</div>

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
            <div className="page-legend">
              About aged care > <a> Planning ahead</a>
            </div>
            
            <br></br>
            <br></br>

            <p>
              <b>
                If you're planning ahead, here are some topics to think about.
              </b> 
            </p>
          </div>

          <div className="grey-section">
            <div className="container"> 
              <br></br>
                <div className="flex-row">
                  <div className="grid-cell">
                    <div className="circle-icon" style={white}>
                      <img src={CheckBox} className="icon2" alt="Phone"/> 
                    </div>
                    <div className="cell-label"> 
                      <div className="blue-text">
                        Research how aged care works
                      </div>
                      <div className="grey-text"> 
                        If you don't need aged care yet, it's a good idea to research how aged care works to prepare if your needs change.
                      </div>
                    </div>
                  </div>
                  <div className="grid-cell">
                    <div className="circle-icon" style={white}>
                      <img src={CheckBox} className="icon2" alt="Phone"/> 
                    </div>
                    <div className="cell-label"> 
                      <div className="blue-text">
                        Register for a My Health Record
                      </div>
                      <div className="grey-text"> 
                        Register for a My Health Record so that you and your healthcare providers can view and share your health information.
                      </div>
                    </div>
                  </div>
                  <div className="grid-cell">
                    <div className="circle-icon" style={white}>
                      <img src={CheckBox} className="icon2" alt="Phone"/> 
                    </div>
                    <div className="cell-label"> 
                      <div className="blue-text">
                        Start the conversation about aged care
                      </div>
                      <div className="grey-text"> 
                        Talking about aged care can be hard. Starting the conversation will make the process easier for you and your family.
                      </div>
                    </div>
                  </div>
                  <div className="grid-cell">
                    <div className="circle-icon" style={white}>
                      <img src={CheckBox} className="icon2" alt="Phone"/> 
                    </div>
                    <div className="cell-label"> 
                      <div className="blue-text">
                        Know your rights
                      </div>
                      <div className="grey-text"> 
                        Read our legal information to learn more about your rights and get support in managing your affairs. Set up a power of attorney so someone you trust can make decisions for you.
                      </div>
                    </div>
                  </div>
                  <div className="grid-cell">
                    <div className="circle-icon" style={white}>
                      <img src={CheckBox} className="icon2" alt="Phone"/> 
                    </div>
                    <div className="cell-label"> 
                      <div className="blue-text">
                        Arrange privately funded services
                      </div>
                      <div className="grey-text"> 
                        Access private services if you're not yet eligible or are waiting for funded services.
                      </div>
                    </div>
                  </div>                  
                  <div className="grid-cell">
                    <div className="circle-icon" style={white}>
                      <img src={CheckBox} className="icon2" alt="Phone"/> 
                    </div>
                    <div className="cell-label"> 
                      <div className="blue-text">
                        Stay active and healthy 
                      </div>
                      <div className="grey-text"> 
                        Being healthy, physically active and socially engaged has many benefits, especially as you grow older.
                      </div>
                    </div>
                  </div>
                  <div className="grid-cell">
                    <div className="circle-icon" style={white}>
                      <img src={CheckBox} className="icon2" alt="Phone"/> 
                    </div>
                    <div className="cell-label"> 
                      <div className="blue-text">
                        Register with myGov
                      </div>
                      <div className="grey-text"> 
                        When you call My Aged Care, we create a client record so you don't have to retell our story. Onve you have a client record with My Aged Care you can access it using myGov.
                      </div>
                    </div>
                  </div>
                  <div className="grid-cell">
                    <div className="circle-icon" style={white}>
                      <img src={CheckBox} className="icon2" alt="Phone"/> 
                    </div>
                    <div className="cell-label"> 
                      <div className="blue-text">
                        Get extra help if you're caring for someone
                      </div>
                      <div className="grey-text"> 
                        Caring for someone can be challenging and rewarding, and from time to time, carers may need some extra help and support.
                      </div>
                    </div>
                  </div>


                </div>
            </div>
          </div>  

        </div>}
        { /*--------------- End PlanningAhead --------------------------- */}

        <div className="container">

          <div className="results-flex">

            <div className="futher-info">
              <div className="rounded-box">
                <div className="circle-icon" style={white}>
                 <img src={PhoneBlue} className="icon" alt="Phone"/> 
                </div>
                <div className="text1">Contact Us</div> 
                <div className="text2">1800 200 422</div>
                <div className="text3">Monday - Friday. 8am - 8pm</div>
                <div className="text3"> Saturday. 10am - 2pm</div>
              </div>
            </div>

            <div className="futher-info">
              <div className="column-text">
                <div className="h2-white"> Further information for: </div> 
                <br></br>
                <br></br>
                 • <a className="white-link">
                      Aboriginal and Torres Strait Islander people
                    </a>
                 <br></br>
                 • <a className="white-link">
                      Carers
                    </a>
                 <br></br>
                 • <a className="white-link">
                      LGBTI people
                    </a>
                 <br></br>
                 • <a className="white-link">
                      People who speak other languages
                    </a>
                 <br></br>
                 • <a className="white-link">
                      People in rural and remote areas
                    </a>
                <br></br>
                 • <a className="white-link">
                      Veterans
                    </a>
                <br></br>
                 • <a className="white-link">
                      People with other diverse needs
                  </a>

              </div>
            </div>

          </div>

        </div>


    </div>)
  }
}

export default AboutAgedCare;
