import React, { Component } from "react";
import NavBar from '../NavBar/NavBar';
import TopBar from '../TopBar/TopBar';
import Style from '../style.css';
import PhoneBlue from '../phoneBlue.svg';
import FlatButtonBlue from '../FlatButtonBlue/FlatButtonBlue'
import OptionBox from '../OptionBox/OptionBox'
import CheckBox from './checkbox.png';
import Footer from '../Footer/Footer';
import RightArrow from './arrow-right.svg';

const white = {
  width: '55px',
  height: '55px',
  backgroundColor: 'white',
  color: '#1F6193'
}

const white2 = {
  backgroundColor: 'white',
  color: '#1F6193'
}
class Assessment extends Component {

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
      {(this.state.section == "Register" || this.state.section == null) && <div className="assessment-register">

        <div className="service-header">
          <div className="container">
            <div className="white-text"> Get assessed </div>

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
             <a href="/">Home</a> > Get registered
            </div>


           <div className="flex-row" style={{flexWrap: 'nowrap', alignItems: 'flex-start'}}>

             <div className="topics-side-bar">
              <h5 style={{marginTop: '0', backgroundColor: '#F2F2F2', paddingBottom: '15px', marginBottom: 0, paddingLeft: '10px'}}> 1. Get registered </h5>
              <hr style={{paddingTop: '0', marginTop: 0, borderColor: '#D4D4D4'}}></hr>

              <div className="topic" style={{paddingLeft: '30px'}}>
                <div> Preparing for registration</div>
              </div>
              <hr style={{paddingTop: '0', marginTop: 0, borderColor: '#D4D4D4'}}></hr>

              <a href="/Assessment/GetAssessment">
                <h5 style={{paddingTop: '10px', paddingBottom: '15px', marginBottom: 0, paddingLeft: '10px', marginTop: '0', paddingtop: '7px', border: 'none'}}> 2. Get assessed </h5>
              </a>
              <hr style={{paddingTop: '0', marginTop: 0, borderColor: '#D4D4D4'}}></hr>

              <div className="topic" style={{paddingLeft: '30px'}}>
                <div> Preparing for assessment</div>
              </div>
              <hr style={{paddingTop: '0', marginTop: 0, borderColor: '#D4D4D4'}}></hr>
   
              <div className="topic" style={{paddingLeft: '30px'}}>
                <div> What happens during an assessment?</div>
              </div>
              <hr style={{paddingTop: '0', marginTop: 0, borderColor: '#D4D4D4'}}></hr>
   
             </div>

             <div style={{marginLeft: '40px', width: '75%'}}>
              <div className="flex-row">
                <div className="circle-icon" style={{margin: '0'}}>
                  <h2>1</h2>
                </div>
                <h3 style={{marginLeft: '35px'}}> Get registered </h3>
              </div>
              <p><b>
                Before you can access government funded aged care services, you
                must register with My Aged Care, this can be completed within 10 to
                15 minutes over the phone.
              </b></p>
              <p>
                You will be asked questions over the phone to help work out your care
                needs. You may be referred for assessment with a My Aged Care assessor
                to better understand and support your needs.
              </p>
              <h3> Preparing for registration </h3>

              <p><b>
                It's useful to have the following ready for when the assessment takes
                place:
              </b></p>

              <div className="flex-column">

                <div className="flex-row">
                  <div className="circle-icon" style={white}>
                    <img src={CheckBox} className="icon3" alt="Phone"/> 
                  </div>
                  <p> your Medicare number </p>
                </div>

                <div className="flex-row">
                  <div className="circle-icon" style={white}>
                    <img src={CheckBox} className="icon3" alt="Phone"/> 
                  </div>
                  <p> how you are managing with activities around the home</p>
                </div>


                <div className="flex-row">
                  <div className="circle-icon" style={white}>
                    <img src={CheckBox} className="icon3" alt="Phone"/> 
                  </div>
                  <p> consent if someone is calling for you</p>
                </div>


                <div className="flex-row">
                  <div className="circle-icon" style={white}>
                    <img src={CheckBox} className="icon3" alt="Phone"/> 
                  </div>
                  <p> your safety at home</p>
                </div>


                <div className="flex-row">
                  <div className="circle-icon" style={white}>
                    <img src={CheckBox} className="icon3" alt="Phone"/> 
                  </div>
                  <p> any health concerns you may have </p>
                </div>


                <div className="flex-row">
                  <div className="circle-icon" style={white}>
                    <img src={CheckBox} className="icon3" alt="Phone"/> 
                  </div>
                  <p> any support you are currently receiving</p>
                </div>


              </div>

              <div >
                <div className="rounded-box" style={{width: '70%', marginTop: '30px'}} >
                  <div className="circle-icon" style={white2}>
                   <img src={PhoneBlue} className="icon" alt="Phone"/> 
                  </div>
                  <div className="text3">To register call</div> 
                  <div className="text2">1800 200 422</div>
                  <div className="text3">Hours</div> 
                  <div className="text4">Monday - Friday. 8am - 8pm</div>
                  <div className="text4"> Saturday. 10am - 2pm</div>
                </div>
              </div>


             </div>

           </div>

          <a href="/Assessment/GetAssessment">
            <div className="white-box">
              <div className="circle-icon">
                <div className="white-text"> 2 </div>
              </div>
              <div className="grey-text"> Get assessed </div>
              <img src={RightArrow} className="arrow"/>
            </div>
          </a>

          <a href="/Services">
            <div className="white-box">
              <div className="circle-icon">
                <div className="white-text"> 3 </div>
              </div>
              <div className="grey-text"> Find a service provider </div>
              <img src={RightArrow} className="arrow"/>
            </div>
          </a>

        </div>
      </div>}
      
      {this.state.section == "GetAssessment" && <div> 
 
        <div className="service-header">
          <div className="container">
            <div className="white-text"> Get assessed </div>

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
        
        <div className="container assess" >

            <div className="page-legend">
             <a href="/">Home</a> > Get assessed
            </div>

           <div className="flex-row" style={{flexWrap: 'nowrap', alignItems: 'flex-start'}}>

             <div className="topics-side-bar">
              <a href="/Assessment">
                <h5 style={{marginTop: '0', paddingBottom: '15px', marginBottom: 0, paddingLeft: '10px'}}> 1. Get registered </h5>
              </a>
              <hr style={{paddingTop: '0', marginTop: 0, borderColor: '#D4D4D4'}}></hr>

              <div className="topic" style={{paddingLeft: '30px'}}>
                <div> Preparing for registration</div>
              </div>
              <hr style={{paddingTop: '0', margin: 0, borderColor: '#D4D4D4'}}></hr>

              <h5 style={{paddingTop: '10px', backgroundColor: '#F2F2F2', paddingBottom: '15px', marginBottom: 0, paddingLeft: '10px', marginTop: '0', paddingtop: '7px', border: 'none'}}> 2. Get assessed </h5>
              <hr style={{paddingTop: '0', marginTop: 0, borderColor: '#D4D4D4'}}></hr>

              <div className="topic" style={{paddingLeft: '30px'}}>
                <div> Preparing for assessment</div>
              </div>
              <hr style={{paddingTop: '0', marginTop: 0, borderColor: '#D4D4D4'}}></hr>
   
              <div className="topic" style={{paddingLeft: '30px'}}>
                <div> What happens during an assessment?</div>
              </div>
              <hr style={{paddingTop: '0', marginTop: 0, borderColor: '#D4D4D4'}}></hr>
   
             </div>

             <div style={{marginLeft: '40px', width: '75%'}}>
              <div className="flex-row">
                <div className="circle-icon" style={{margin: '0'}}>
                  <h2>2</h2>
                </div>
                <h3 style={{marginLeft: '35px'}}> Get assessed </h3>
              </div>
              <p><b>
              Before you can access any government funded services, you must have
              a My Aged Care assessment. An assessment helps to ensure you
              receive the care and support you need.
              </b></p>
              <p>
                An assessment will work out your care needs and what types of care and
services you may be are eligible for. If your circumstances change, get re-assessed to ensure your getting the right level of care.
              </p>
              <h3> Preparing for registration </h3>

              <p><b>
                It's useful to have the following ready for when the assessment takes
                place:
              </b></p>

              <div className="flex-column">

                <div className="flex-row">
                  <div className="circle-icon" style={white}>
                    <img src={CheckBox} className="icon3" alt="Phone"/> 
                  </div>
                  <p> your Medicare number </p>
                </div>

                <div className="flex-row">
                  <div className="circle-icon" style={white}>
                    <img src={CheckBox} className="icon3" alt="Phone"/> 
                  </div>
                  <p> your GP or other health professional contact details</p>
                </div>


                <div className="flex-row">
                  <div className="circle-icon" style={white}>
                    <img src={CheckBox} className="icon3" alt="Phone"/> 
                  </div>
                  <p> a copy of any referrals from your doctor</p>
                </div>


                <div className="flex-row">
                  <div className="circle-icon" style={white}>
                    <img src={CheckBox} className="icon3" alt="Phone"/> 
                  </div>
                  <p> information on any current support you receive</p>
                </div>


                <div className="flex-row">
                  <div className="circle-icon" style={white}>
                    <img src={CheckBox} className="icon3" alt="Phone"/> 
                  </div>
                  <p> any information provided to you that you may want to discuss with the
assessor</p>
                </div>


                <div className="flex-row">
                  <div className="circle-icon" style={white}>
                    <img src={CheckBox} className="icon3" alt="Phone"/> 
                  </div>
                  <p> You can ask a family member, carer or friend to be with you during the
assessment</p>
                </div>


              </div>
              <h2> What happens during an assessment? </h2>
              <p> 
                When the assessor arrives at your home, they will ask if you agree to have
                the assessment. The assessor will have a copy of your client record. This
                includes the information you gave to the My Aged Care contact centre.
              </p>
              <p>
                They may also ask you for your permission to talk to people who support
                you, such as family member or carer. For assessment for some services,
                the assessor will ask you to complete an Application for Care form.
              </p>
              <p><b>
                The assessor will ask questions about:
              </b></p>
              <ul>
                <li> what support you already have and if that will continute </li>
                <li> your health and lifestyle and any health concerns</li>
                <li> how you are going with completing daily tasks and activities around the
home</li>
                <li> if you have problems with your memory</li>
                <li> any issues relating to home and personal safety</li>
                <li> family and community engagement</li>
                <li> speaking to your GP or other health professionals.</li>
              </ul>
              <p><b>
                The assessor can also:
              </b></p>
              <ul>
                <li> consider you for other types of services </li>
                <li> give you information about services providers that may offer the care
you need in your area </li>
                <li> discuss if you might need more support so you can live in your own
home, or other options such as an aged care home. </li>
              </ul>
             </div>

           </div>
          <a href="/Services">
            <div className="white-box" style={{marginTop: '40px'}}>
              <div className="circle-icon">
                <div className="white-text"> 3 </div>
              </div>
              <div className="grey-text"> Find a service provider </div>
              <img src={RightArrow} className="arrow"/>
            </div>
          </a>

        </div>
       
      </div>
      }
      {/*
      {this.state.section == "GetAssessment" && <div>
         <div className="service-header">
          <div className="container">
            <div className="circle-icon">
              <h2>2</h2>
            </div>
            <div className="white-text"> Get an Assessment </div>

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
            <b>
             Before you can access any government funded services, you must have a My Aged Care assessment. An assessment helps to ensure you receive the care and support you need. 
            </b>
            <br></br> 
            <br></br> 
           An assessment will work out your care needs and what types of care and services you may be are eligible for. If your circumstances change, get re-assessed to ensure your getting the right level of care. 
          </p>

        </div>
        <div className="grey-section assessment-register">
          <div className="container"> 
            <h3> Preparing for an assessment </h3>
            <p><b> It's useful to have the following ready for when the assessment takes place:</b> </p>
            <br></br>
                 <div className="flex-row">
                   <div className="">
                       <div className="grid-cell">
                        <div className="circle-icon" style={white}>
                          <img src={CheckBox} className="icon2" alt="Phone"/> 
                        </div>
                        <div className="cell-label"> your Medicare number </div>
                      </div>
                     <div className="grid-cell">
                      <div className="circle-icon" style={white}>
                        <img src={CheckBox} className="icon2" alt="Phone"/> 
                      </div>
                      <div className="cell-label"> your GP or other health professional contact details </div>
                    </div>
                  </div>


                   <div className="">
                     <div className="grid-cell">
                      <div className="circle-icon" style={white}>
                        <img src={CheckBox} className="icon2" alt="Phone"/> 
                      </div>
                      <div className="cell-label">a copy of any referrals from your doctor</div>
                    </div>
                     <div className="grid-cell">
                      <div className="circle-icon" style={white}>
                        <img src={CheckBox} className="icon2" alt="Phone"/> 
                      </div>
                      <div className="cell-label"> information on any current support you recieve</div>
                    </div>
                  </div>

                   <div className="">
                     <div className="grid-cell">
                      <div className="circle-icon" style={white}>
                        <img src={CheckBox} className="icon2" alt="Phone"/> 
                      </div>
                      <div className="cell-label"> any information provided to you that you may want to discuss with the assessor</div>
                    </div>
                    <div className="grid-cell">
                      <div className="circle-icon" style={white}>
                        <img src={CheckBox} className="icon2" alt="Phone"/> 
                      </div>
                      <div className="cell-label"> You can ask a family member, carer or friend to be with you during the assessment</div>
                    </div>
                  </div>

                </div>
          </div>
        </div> 

        <div className="container">
          <h3> What happens during a comprehensive assessment? </h3>

          <p> When the assessor arrives at your home, they will ask if you agree to have the assessment. The assessor wil have a copy of your client record. This includes the information you gave to the My Aged Care contact centre.
          </p>

          <p> They may also ask you for your permission to talk to people who support you,s such as family member or carer. For assessment for so,e servoses such as residential care , home care and flexible care the assessor will ask you to complete an Application for Care form.
          </p>

          <p><b> The assessor will ask questions about: </b> </p>
          <p>            
            • what support you already have and if that will continue 
            <br></br>
            • your health and lifestyle and any health conserns 
            <br></br>
            • how you are going with completing daily tasks and activities around the home
            <br></br>
            • if you have problems with your memory
            <br></br>
            • any issues relating to home and personal safety
            <br></br>
            • family and community engagement
            <br></br>
            • speaking to your GP or other health professionals.
            <br></br>
          </p> 

           <p><b> The assessor can also: </b> </p>
            <p>            
            • consider you for other types of services
            <br></br>
            • give you information about services providers that may offer the care you need in your area
            <br></br>
            • discuss if you might need more support so you can live in your own home, or other options such as an aged care home.
          </p>
        <br></br>
        <br></br>
        <a href="/Services">
          <div className="white-box">
            <div className="circle-icon">
              <div className="white-text"> 3 </div>
            </div>
            <div className="grey-text"> Find a service provider </div>
          </div>
        </a>

        </div>
         
      </div>}
      */}

    <Footer/> 

    </div>);
  }
}

export default Assessment;
