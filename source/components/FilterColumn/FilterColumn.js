import React, { Component } from "react";
import Style from '../style.css';
import Collapsible from '../Collapsible/Collapsible';
import CheckActive from '../Services/check-active.png'
import CheckDefault from '../Services/check-default.png'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const centerText = {
  position: 'relative',
  left: '50%'
}

const language_options = [
  'French', 'Spanish', 'Arabic'
]

const religion_options = [
  'Jewish', 'Chritsian', 'Islamic'
]

const cultural_options = [
  'Greek', 'Chinese', 'Lebanese'
]

const distance_options = [
  '5km', '10km', '20km', '50km', '50km +'
]

const defaultOption = distance_options[0]

class FilterColumn extends Component {

  constructor(props) {
    super(props);
  }

  clicked(key) {
    this.props.filters[key] = !this.props.filters[key];
    this.props.filterMethod(key, this.props.filters[key]);
    this.setState();
  }

  render() {
    return (
    <div>
          <div className="">
            {this.props.filters["Help in the home"] && 
              <Collapsible openHeaders={this.props.openHeaders} title="Services"> 

               <Collapsible filterMethod={this.props.filterMethod} filters={this.props.filters} title="Cleaning, laundry and shopping" style="white"> 
                  <div className="indented">
                    <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('House Cleaning')}> 
                        { this.props.filters["House Cleaning"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["House Cleaning"] && <img className="big-radio" src={CheckDefault} /> }
                        House Cleaning
                      </div>

                    </div>
                    <hr></hr>

                     <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Shopping')}> 
                        { this.props.filters["Shopping"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Shopping"] && <img className="big-radio" src={CheckDefault} /> }
                        Shopping
                      </div>

                    </div>
                    <hr></hr>               

                    <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Laundry')}> 
                        { this.props.filters["Laundry"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Laundry"] && <img className="big-radio" src={CheckDefault} /> }
                        Laundry 
                      </div>

                    </div>
                    <br></br>               

                  </div>
                </Collapsible>              

                <Collapsible filterMethod={this.props.filterMethod} filters={this.props.filters} title="Cooking and meals" style="white"> 
                  <div className="indented">
                    <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Meals at home')}> 
                        { this.props.filters["Meals at home"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Meals at home"] && <img className="big-radio" src={CheckDefault} /> }
                      Meals at home
                      </div>

                    </div>
                    <hr></hr>

                     <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Meals at a centre')}> 
                        { this.props.filters["Meals at a centre"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Meals at a centre"] && <img className="big-radio" src={CheckDefault} /> }
                      Meals at a centre
                      </div>

                    </div>
                    <hr></hr>               

                    <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Food advice')}> 
                        { this.props.filters["Food advice"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Food advice"] && <img className="big-radio" src={CheckDefault} /> }
                      Food advice
                      </div>

                    </div>
                    <hr></hr>

                    <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Food preparation')}> 
                        { this.props.filters["Food preparation"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Food preparation"] && <img className="big-radio" src={CheckDefault} /> }
                      Food preparation
                      </div>

                    </div>
                    <br></br>               
                  </div>
                </Collapsible> 

                <Collapsible isntGroup="true" filterMethod={this.props.filterMethod} filters={this.props.filters} title="Nursing" style="white"/> 

                <Collapsible filterMethod={this.props.filterMethod} filters={this.props.filters} title="Showering and self-care" style="white"> 
                  <div className="indented">
                    <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Personal care')}> 
                        { this.props.filters["Personal care"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Personal care"] && <img className="big-radio" src={CheckDefault} /> }
                        Personal Care
                      </div>

                    </div>
                    <hr></hr>

                     <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Medicine help')}> 
                        { this.props.filters["Medicine help"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Medicine help"] && <img className="big-radio" src={CheckDefault} /> }
                      Medicine help
                      </div>

                    </div>
                    <br></br>               
                  </div>
                </Collapsible> 

                <Collapsible filterMethod={this.props.filterMethod} filters={this.props.filters} title="Transport" style="white"> 
                  <div className="indented">
                    <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Drivers')}> 
                        { this.props.filters["Drivers"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Drivers"] && <img className="big-radio" src={CheckDefault} /> }
                      Drivers
                      </div>

                    </div>
                    <hr></hr>

                     <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Vouchers')}> 
                        { this.props.filters["Vouchers"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Vouchers"] && <img className="big-radio" src={CheckDefault} /> }
                      Vouchers
                      </div>

                    </div>
                    <br></br>               
                  </div>
                </Collapsible> 



                <Collapsible filterMethod={this.props.filterMethod} filters={this.props.filters} title="Respite and carer support" style="white"> 
                  <div className="indented">

                    <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Day respite at a centre')}> 
                        { this.props.filters["Day respite at a centre"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Day respite at a centre"] && <img className="big-radio" src={CheckDefault} /> }
                        Day respite at a centre
                      </div>
                    </div>

                    <hr></hr>

                    <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Day respite at an aged care home')}> 
                        { this.props.filters["Day respite at an aged care home"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Day respite at an aged care home"] && <img className="big-radio" src={CheckDefault} /> }
                        Day respite at an aged care home
                      </div>
                    </div>

                    <hr></hr>               

                    <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Day respite in your home')}> 
                        { this.props.filters["Day respite in your home"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Day respite in your home"] && <img className="big-radio" src={CheckDefault} /> }
                        Day respite in your home
                      </div>
                    </div>
                    <hr></hr>

                    <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Day respite with a host family')}> 
                        { this.props.filters["Day respite with a host family"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Day respite with a host family"] && <img className="big-radio" src={CheckDefault} /> }
                        Day respite with a host family
                      </div>
                    </div>

                    <hr></hr>

                    <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Overnight respite in the community')}> 
                        { this.props.filters["Overnight respite in the community"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Overnight respite in the community"] && <img className="big-radio" src={CheckDefault} /> }
                        Overnight respite in the community
                      </div>
                    </div>

                    <hr></hr>               

                    <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Overnight respite with a host family')}> 
                        { this.props.filters["Overnight respite with a host family"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Overnight respite with a host family"] && <img className="big-radio" src={CheckDefault} /> }
                        Overnight respite with a host family
                      </div>
                    </div>
                    <hr></hr>

                    <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Overnight respite in your home')}> 
                        { this.props.filters["Overnight respite in your home"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Overnight respite in your home"] && <img className="big-radio" src={CheckDefault} /> }
                        Overnight respite in your home
                      </div>
                    </div>

                    <hr></hr>               

                    <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Community access respite with a group')}> 
                        { this.props.filters["Community access respite with a group"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Community access respite with a group"] && <img className="big-radio" src={CheckDefault} /> }
                        Community access respite with a group
                      </div>
                    </div>
                    <hr></hr>

                    <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Community access respite one-on-one')}> 
                        { this.props.filters["Community access respite one-on-one"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Community access respite one-on-one"] && <img className="big-radio" src={CheckDefault} /> }
                        Community access respite one-on-one
                      </div>
                    </div>

                    <hr></hr>

                    <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Other respite')}> 
                        { this.props.filters["Other respite"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Other respite"] && <img className="big-radio" src={CheckDefault} /> }
                        Other respite
                      </div>
                    </div>

                    <br></br>               
                  </div>
      
                </Collapsible>

                <Collapsible filterMethod={this.props.filterMethod} filters={this.props.filters} title="Allied Health" style="white"> 
                  <div className="indented">
                    <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Dietitian or Nutritionist')}> 
                        { this.props.filters["Dietitian or Nutritionist"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Dietitian or Nutritionist"] && <img className="big-radio" src={CheckDefault} /> }
                      Dietitian or Nutritionist
                      </div>

                    </div>
                    <hr></hr>

                     <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Podiatry')}> 
                        { this.props.filters["Podiatry"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Podiatry"] && <img className="big-radio" src={CheckDefault} /> }
                      Podiatry
                      </div>

                    </div>
                    <hr></hr>               

                     <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Physiotherapy')}> 
                        { this.props.filters["Physiotherapy"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Physiotherapy"] && <img className="big-radio" src={CheckDefault} /> }
                      Physiotherapy
                      </div>

                    </div>
                    <hr></hr>


                     <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Occupational Therapy')}> 
                        { this.props.filters["Occupational Therapy"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Occupational Therapy"] && <img className="big-radio" src={CheckDefault} /> }
                      Occupational Therapy
                      </div>

                    </div>
                    <hr></hr>


                     <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Social Work')}> 
                        { this.props.filters["Social Work"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Social Work"] && <img className="big-radio" src={CheckDefault} /> }
                      Social Work
                      </div>

                    </div>
                    <hr></hr>


                     <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Speech Pathology')}> 
                        { this.props.filters["Speech Pathology"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Speech Pathology"] && <img className="big-radio" src={CheckDefault} /> }
                      Speech Pathology
                      </div>

                    </div>
                    <hr></hr>


                     <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('ATSI Health Worker')}> 
                        { this.props.filters["ATSI Health Worker"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["ATSI Health Worker"] && <img className="big-radio" src={CheckDefault} /> }
                      Aboriginal and Torres Strait Islander Health Worker
                      </div>

                    </div>
                    <hr></hr>


                     <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Psychologist')}> 
                        { this.props.filters["Psychologist"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Psychologist"] && <img className="big-radio" src={CheckDefault} /> }
                      Psychologist
                      </div>

                    </div>
                    <hr></hr>


                     <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Diversional Therapy')}> 
                        { this.props.filters["Diversional Therapy"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Diversional Therapy"] && <img className="big-radio" src={CheckDefault} /> }
                      Diversional Therapy
                      </div>

                    </div>
                    <hr></hr>


                     <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Exercise Physiologist')}> 
                        { this.props.filters["Exercise Physiologist"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Exercise Physiologist"] && <img className="big-radio" src={CheckDefault} /> }
                      Exercise Physiologist
                      </div>

                    </div>
                    <hr></hr>


                     <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Ongoing Allied Health and Therapy Services')}> 
                        { this.props.filters["Ongoing Allied Health and Therapy Services"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Ongoing Allied Health and Therapy Services"] && <img className="big-radio" src={CheckDefault} /> }
                      Ongoing Allied Health and Therapy Services
                      </div>
                     </div>
                    <hr></hr>

                     <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Other Allied Health and Therapy Services')}> 
                        { this.props.filters["Other Allied Health and Therapy Services"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Other Allied Health and Therapy Services"] && <img className="big-radio" src={CheckDefault} /> }
                      Other Allied Health and Therapy Services
                      </div>
                     </div>
                    <hr></hr>

                     <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Restorative Care Services')}> 
                        { this.props.filters["Restorative Care Services"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Restorative Care Services"] && <img className="big-radio" src={CheckDefault} /> }
                      Restorative Care Services
                      </div>

                    </div>
                    <hr></hr>


                     <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Hydrotherapy')}> 
                        { this.props.filters["Hydrotherapy"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Hydrotherapy"] && <img className="big-radio" src={CheckDefault} /> }
                      Hydrotherapy
                      </div>

                    </div>
                    <br></br>               
                  </div>
                </Collapsible> 




              <Collapsible filterMethod={this.props.filterMethod} filters={this.props.filters} title="Social support" style="white"> 
                  <div className="indented">
                    <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Social support groups')}> 
                        { this.props.filters["Social support groups"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Social support groups"] && <img className="big-radio" src={CheckDefault} /> }
                      Social support groups
                      </div>

                    </div>
                    <hr></hr>

                     <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Social support one-on-one')}> 
                        { this.props.filters["Social support one-on-one"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Social support one-on-one"] && <img className="big-radio" src={CheckDefault} /> }
                      Social support one-on-one
                      </div>

                    </div>
                    <br></br>               
                  </div>
              </Collapsible>                 

              <Collapsible filterMethod={this.props.filterMethod} filters={this.props.filters} title="Aids for mobility and communication" style="white"> 
                <div className="indented">
                  <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Communication aids')}> 
                        { this.props.filters["Communication aids"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Communication aids"] && <img className="big-radio" src={CheckDefault} /> }
                      Communication aids
                      </div>

                  </div>
                  <hr></hr>

                   <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Support and mobility aids')}> 
                        { this.props.filters["Support and mobility aids"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Support and mobility aids"] && <img className="big-radio" src={CheckDefault} /> }
                      Support and mobility aids
                      </div>

                  </div>
                  <hr></hr>               

                   <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Self-care aids')}> 
                        { this.props.filters["Self-care aids"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Self-care aids"] && <img className="big-radio" src={CheckDefault} /> }
                      Self-care aids
                      </div>

                  </div>
                  <hr></hr>               


                   <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Medical aids')}> 
                        { this.props.filters["Medical aids"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Medical aids"] && <img className="big-radio" src={CheckDefault} /> }
                      Medical aids
                      </div>

                  </div>
                  <hr></hr>               


                   <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Reading aids')}> 
                        { this.props.filters["Reading aids"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Reading aids"] && <img className="big-radio" src={CheckDefault} /> }
                      Reading aids
                      </div>

                  </div>
                  <hr></hr>               


                   <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Car aids')}> 
                        { this.props.filters["Car aids"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Car aids"] && <img className="big-radio" src={CheckDefault} /> }
                      Car aids
                      </div>

                  </div>
                  <hr></hr>               


                   <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Other aids and equipment')}> 
                        { this.props.filters["Other aids and equipment"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Other aids and equipment"] && <img className="big-radio" src={CheckDefault} /> }
                      Other aids and equipment
                      </div>

                  </div>
                  <br></br>               

                </div>
            </Collapsible>

            <Collapsible filterMethod={this.props.filterMethod} filters={this.props.filters} title="Homelessness support" style="white"> 
                <div className="indented">
                  <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Advocacy')}> 
                        { this.props.filters["Advocacy"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Advocacy"] && <img className="big-radio" src={CheckDefault} /> }
                      Advocacy
                      </div>

                  </div>
                  <hr></hr>

                   <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Assessment')}> 
                        { this.props.filters["Assement"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Assement"] && <img className="big-radio" src={CheckDefault} /> }
                      Assessment
                      </div>

                  </div>
                  <hr></hr>               

                   <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Hoarding and squalor')}> 
                        { this.props.filters["Hoarding and squalor"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Hoarding and squalor"] && <img className="big-radio" src={CheckDefault} /> }
                      Hoarding and squalor
                      </div>

                  </div>

                 <br></br>               

                </div>
            </Collapsible>

            <Collapsible filterMethod={this.props.filterMethod} filters={this.props.filters} title="After-hospital care" style="white"> 
                <div className="indented">
                  <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('After-hospital care')}> 
                        { this.props.filters["After-hostipal care"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["After-hostipal care"] && <img className="big-radio" src={CheckDefault} /> }
                      After-hospital care
                      </div>

                  </div>
                  <hr></hr>

                   <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Rehabilitation')}> 
                        { this.props.filters["Rehabilitation"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Rehabilitation"] && <img className="big-radio" src={CheckDefault} /> }
                      Rehabilitation
                      </div>

                  </div>
                  <hr></hr>               

                   <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Other after-hospital care')}> 
                        { this.props.filters["Other after-hospital care"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Other after-hospital care"] && <img className="big-radio" src={CheckDefault} /> }
                      Other after-hospital care
                      </div>

                  </div>

                 <br></br>               

                </div>
            </Collapsible>

            <Collapsible filterMethod={this.props.filterMethod} filters={this.props.filters} title="Complex needs" style="white"> 
                <div className="indented">
                  <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Assessment')}> 
                        { this.props.filters["Assessment"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Assessment"] && <img className="big-radio" src={CheckDefault} /> }
                      Assessment
                      </div>

                  </div>
                  <hr></hr>

                   <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Case Management')}> 
                        { this.props.filters["Case Management"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Case Management"] && <img className="big-radio" src={CheckDefault} /> }
                      Case Management
                      </div>

                  </div>
                  <hr></hr>               

                  <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Client Care Coordination')}> 
                        { this.props.filters["Client Care Coordination"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Client Care Coordination"] && <img className="big-radio" src={CheckDefault} /> }
                      Client Care Coordination
                      </div>
                  </div>
                  <hr></hr>               

                   <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('National ATSI Aged Care Program')}> 
                        { this.props.filters["National ATSI Aged Care Program"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["National ATSI Aged Care Program"] && <img className="big-radio" src={CheckDefault} /> }
                        National Aboriginal and Torres Strait Islander Aged Care Program
                      </div>

                  </div>


                 <br></br>               

                </div>
            </Collapsible>

            <Collapsible filterMethod={this.props.filterMethod} filters={this.props.filters} title="Home care package 1-4" style="white"> 
              <div className="indented">
                  <div className="category"> 
                    <br></br>
                    <br></br>
                    <div className="category" onClick={(e) => this.clicked('Level 1')}> 
                      { this.props.filters["Level 1"] && <img className="big-radio" src={CheckActive} /> }
                      { !this.props.filters["Level 1"] && <img className="big-radio" src={CheckDefault} /> }
                      Level 1
                    </div>

                  </div>
                  <hr></hr>

                   <div className="category"> 
                    <div className="category" onClick={(e) => this.clicked('Level 2')}> 
                      { this.props.filters["Level 2"] && <img className="big-radio" src={CheckActive} /> }
                      { !this.props.filters["Level 2"] && <img className="big-radio" src={CheckDefault} /> }
                      Level 2
                    </div>
                  </div>
                  <hr></hr>               

                  <div className="category"> 
                    <div className="category" onClick={(e) => this.clicked('Level 3')}> 
                      { this.props.filters["Level 3"] && <img className="big-radio" src={CheckActive} /> }
                      { !this.props.filters["Level 3"] && <img className="big-radio" src={CheckDefault} /> }
                      Level 3
                    </div>

                  </div>
                  <hr></hr>

                  <div className="category"> 
                    <div className="category" onClick={(e) => this.clicked('Level 4')}> 
                      { this.props.filters["Level 4"] && <img className="big-radio" src={CheckActive} /> }
                      { !this.props.filters["Level 4"] && <img className="big-radio" src={CheckDefault} /> }
                      Level 4
                    </div>
                  </div>
                  <br></br>

              </div>
            </Collapsible>



          </Collapsible> 
          }

          {this.props.filters["Respite and short term care"] && 

            <Collapsible openHeaders={this.props.openHeaders} title="Respite length"> 
              <Collapsible isntGroup="true" filterMethod={this.props.filterMethod} filters={this.props.filters} title="Day respite" style="white"/> 

              <Collapsible isntGroup="true" filterMethod={this.props.filterMethod} filters={this.props.filters} title="Overnight respite" style="white"/> 

              <Collapsible isntGroup="true" filterMethod={this.props.filterMethod} filters={this.props.filters} title="Other" style="white"/> 

            </Collapsible> 
          }

          {this.props.filters["Respite and short term care"] && 
            <Collapsible openHeaders={this.props.openHeaders} title="Respite location"> 
              <Collapsible isntGroup="true" filterMethod={this.props.filterMethod} filters={this.props.filters} title="Aged care home" style="white"/> 

              <Collapsible isntGroup="true" filterMethod={this.props.filterMethod} filters={this.props.filters} title="Centre" style="white"/> 

              <Collapsible isntGroup="true" filterMethod={this.props.filterMethod} filters={this.props.filters} title="In-home" style="white"/> 

              <Collapsible isntGroup="true" filterMethod={this.props.filterMethod} filters={this.props.filters} title="Host family" style="white"/> 

              <Collapsible isntGroup="true" filterMethod={this.props.filterMethod} filters={this.props.filters} title="Community" style="white"/> 

            </Collapsible> 

          }

 
          {this.props.filters["Aged care homes"] && 

            <Collapsible title="Room type"> 
              <Collapsible isntGroup="true" filterMethod={this.props.filterMethod} filters={this.props.filters} title="Single" style="white"/> 

              <Collapsible isntGroup="true" filterMethod={this.props.filterMethod} filters={this.props.filters} title="Shared" style="white"/> 

            </Collapsible> 
          }

          {this.props.filters["Aged care homes"] && 
            <Collapsible title="Home Type"> 
              <Collapsible isntGroup="true" filterMethod={this.props.filterMethod} filters={this.props.filters} title="Permanent" style="white"/> 

              <Collapsible filterMethod={this.props.filterMethod} filters={this.props.filters} title="Respite" style="white"> 
                <div className="indented">
                    <div className="category"> 
                      <br></br>
                      <br></br>
                      <div className="category" onClick={(e) => this.clicked('Low care')}> 
                        { this.props.filters["Low care"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Low care"] && <img className="big-radio" src={CheckDefault} /> }
                        Low care
                      </div>

                    </div>
                    <hr></hr>

                     <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('High care')}> 
                        { this.props.filters["High care"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["High care"] && <img className="big-radio" src={CheckDefault} /> }
                        High Care
                      </div>
                    </div>
                    <br></br>               
                </div>
              </Collapsible>


              <Collapsible isntGroup="true" filterMethod={this.props.filterMethod} filters={this.props.filters} title="Multi-purpose service" style="white"/> 

            </Collapsible> 

          }

               
          <Collapsible title="Funding type"> 

                  <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Gorvernment funded aged care')}> 
                        { this.props.filters["Gorvernment funded aged care"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Gorvernment funded aged care"] && <img className="big-radio" src={CheckDefault} /> }
                      Government funded aged care
                      </div>
                  </div>
                  <hr></hr>               

                  <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Private')}> 
                        { this.props.filters["Private"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Private"] && <img className="big-radio" src={CheckDefault} /> }
                      Private
                      </div>
                  </div>
                  <br></br>

          </Collapsible> 

              
          <Collapsible title="Availabilty"> 

                  <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Available')}> 
                        { this.props.filters["Available"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Available"] && <img className="big-radio" src={CheckDefault} /> }
                      Available
                      </div>
                  </div>
                  <hr></hr>               

                  <div className="category"> 
                      <div className="category" onClick={(e) => this.clicked('Not available')}> 
                        { this.props.filters["Not available"] && <img className="big-radio" src={CheckActive} /> }
                        { !this.props.filters["Not available"] && <img className="big-radio" src={CheckDefault} /> }
                      Not available
                      </div>
                  </div>
                  <br></br>

          </Collapsible> 
              
          <Collapsible title="Distance from me"> 
           <Dropdown options={distance_options} onChange={this._onSelect} value={defaultOption} className="padding-15" placeholder="Select an option" /> 
          </Collapsible> 
              
          <Collapsible openHeaders={this.props.openHeaders} title="Specialisations"> 

            <Collapsible filterMethod={this.props.filterMethod} filters={this.props.filters} title="Language" style="white"> 
              <Dropdown options={language_options} onChange={this._onSelect} className="padding-15" placeholder="Choose Lanuage" /> 
            </Collapsible>

            <Collapsible filterMethod={this.props.filterMethod} filters={this.props.filters} title="Cultural Environment" style="white"> 
              <Dropdown options={cultural_options} onChange={this._onSelect} className="padding-15" placeholder="Choose Culture" /> 
            </Collapsible>


            <Collapsible filterMethod={this.props.filterMethod} filters={this.props.filters} title="Religion" style="white"> 
              <Dropdown options={religion_options} onChange={this._onSelect} className="padding-15" placeholder="Choose Religion" /> 
            </Collapsible>

            <Collapsible isntGroup="true" filterMethod={this.props.filterMethod} filters={this.props.filters} title="Aboriginal and/or Torres Strait Islander" style="white"/> 

            <Collapsible isntGroup="true" filterMethod={this.props.filterMethod} filters={this.props.filters} title="Veterans" style="white"/> 

            <Collapsible isntGroup="true" filterMethod={this.props.filterMethod} filters={this.props.filters} title="Lesbian, gay, transgender, intersex" style="white"/> 

            <Collapsible isntGroup="true" filterMethod={this.props.filterMethod} filters={this.props.filters} title="Parents seperated from their children by forced adoption or removal" style="white"/> 

            <Collapsible isntGroup="true" filterMethod={this.props.filterMethod} filters={this.props.filters} title="Care-leavers" style="white"/> 

            <Collapsible isntGroup="true" filterMethod={this.props.filterMethod} filters={this.props.filters} title="Homelessness" style="white"/> 

          </Collapsible> 



          </div>
          <div className="filter-save-button-row">
            <button onClick={this.props.hideFilters}  className="filter-save-button"> Submit </button>
          </div>
    </div>
    );
  }
}

export default FilterColumn;
