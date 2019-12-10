import React, { Component } from "react";
import TagBubbles from '../TagBubbles/TagBubbles';
import FlatButtonBlue from '../FlatButtonBlue/FlatButtonBlue'
import FilterActive from '../Services/Filter_Active.png'
import FilterDefault from '../Services/Filter_Default.png'
import OptionBox from '../OptionBox/OptionBox'
import NavBar from '../NavBar/NavBar';
import TopBar from '../TopBar/TopBar';
import PhoneBlue from '../phoneBlue.svg';
import FilterHeaders from '../Services/filter_headers3.json';
import CheckActive from './check_active.svg';
import CheckDefault from './check.svg';
import Footer from '../Footer/Footer';

class Topics extends Component {
  search() {
    this.setState({hasSearched: true});
  }

  gotoArticle(name) {
    this.setState({currentArticle: name});
  }

  constructor(props) {
    super(props);

    this.state = {
      hasSearched: false,
      currentArticle: '',
      keywordTag: "Respite",
      locationTag: "Aged Care",
      filters: FilterHeaders
    }
  }

  render() {
    return (
      <div className="topics">

      <TopBar> </TopBar>
      <div className="nav-bar"> <NavBar> </NavBar> </div>

      <div className="service-header">
        <div className="container">
          <div className="white-text"> Popular Topics </div>

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
      {this.state.currentArticle != '' && 
        <div className="container">

          <div className="article">
            <div className="page-legend">
              Popular topics > <a> Lorem ipsum dolor sit amer, eum</a>
            </div> 

            <h2> Lorem ipsum dolor sit amet, neua </h2>

            <p> Lorem ipsum dolor ama ahas tasy ashasd aneaiuf ahfolo asuf asdhae aosdhas aue daia adha fhahssd duf asdaheasdnae </p>
            <p> Lorem ipsum dolor ama ahas tasy ashasd aneaiuf ahfolo asuf asdhae aosdhas aue daia adha fhahssd duf asdaheasdnae </p>
            <div className="topic-quote blue-text">
              Lorem upsim asdn ashtn iayo pli lrea forea fas heas sahna loa por a lorea shea msa dahte teahl s danemas taaaasn sdasen 
            </div>
            <p> Lorem ipsum dolor ama ahas tasy ashasd aneaiuf ahfolo asuf asdhae aosdhas aue daia adha fhahssd duf asdaheasdnae </p>
            <p> Lorem ipsum dolor ama ahas tasy ashasd aneaiuf ahfolo asuf asdhae aosdhas aue daia adha fhahssd duf asdaheasdnae </p>

          </div>
          <div className="flex-row" style={{justifyContent: 'space-between', marginBottom: '85px'}}>
            <div className="flex-row" style={{justifyContent: 'space-between'}}>
              <div className="blue-text"> Tags: </div>
              <div className="grey-radius"> Aged care </div>
              <div className="grey-radius"> Respite </div>
            </div>
            <div className="flex-row" style={{justifyContent: 'space-between'}}>
              <div className="blue-text"> Share </div>
              <div className="grey-radius">  </div>
              <div className="grey-radius"> </div>
            </div>

          </div>

        <h3> Related Topics</h3>
        <hr style={{borderColor: 'rgba(93, 180, 211, 0.5)'}}></hr>
        <div className="flex-row">

          <div className="popular-topic">
            <div className="flex-row" style={{alignItems: 'flex-start', marginTop: '50px', flexWrap: 'nowrap'}}>
              <div>
                <div className="filler-image"><img src={require('../../img/timeframes.jpg')}  className="filler-image" /></div>
              </div>
              <div>
                <div>
                  <div className="size-22 blue-text"> Timeframes</div>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                  <FlatButtonBlue > Read more </FlatButtonBlue>
                  </div>
              </div>
            </div>
            <hr></hr>
          </div>


          <div className="popular-topic">
            <div className="flex-row" style={{alignItems: 'flex-start', marginTop: '50px', flexWrap: 'nowrap'}}>
              <div>
                <div className="filler-image"><img src={require('../../img/costs.jpg')}  className="filler-image" /></div>
              </div>
              <div>
                <div>
                  <div className="size-22 blue-text"> Costs </div>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                  <FlatButtonBlue> Read more </FlatButtonBlue>
                  </div>
              </div>
            </div>
            <hr></hr>
          </div>


          <div className="popular-topic">
            <div className="flex-row" style={{alignItems: 'flex-start', marginTop: '50px', flexWrap: 'nowrap'}}>
              <div>
                <div className="filler-image"><img src={require('../../img/advocacy.jpg')}  className="filler-image" /></div>
              </div>
              <div>
                <div>
                  <div className="size-22 blue-text"> Advocacy </div>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                  <FlatButtonBlue> Read more </FlatButtonBlue>
                  </div>
              </div>
            </div>
            <hr></hr>
          </div>

          <div className="popular-topic">
            <div className="flex-row" style={{alignItems: 'flex-start', marginTop: '50px', flexWrap: 'nowrap'}}>
              <div>
                <div className="filler-image"><img src={require('../../img/services.jpg')}  className="filler-image" /></div>
              </div>
              <div>
                <div>
                  <div className="size-22 blue-text"> Setting up services </div>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                  <FlatButtonBlue> Read more </FlatButtonBlue>
                  </div>
              </div>
            </div>
            <hr></hr>
          </div>
        </div>



        </div>
      }

      {this.state.currentArticle == '' &&  
      <div className="container">
        <div className="page-legend">
          <a>Home</a> >  Popular Topics 
        </div>
        <div className="location-search-row" style={{marginTop: "25px", marginBottom: '40px'}}>
          <input type="text" placeholder="Search topics" className="location-search-bar"/>
          <button className="service-search-button" onClick={(e) => {this.search()}} > Search </button>
        </div>
      </div>
      }

      {(!this.state.hasSearched && this.state.currentArticle == '') &&  
        <div className="container flex-row" style={{alignItems: 'flex-start', justifyContent: 'space-between'}}>

          <div className="flex-column">

            <div className="popular-topic">
              <div className="flex-row" style={{alignItems: 'flex-start', marginTop: '50px', flexWrap: 'nowrap'}}>
                <div>
                  <div className="filler-image"><img src={require('../../img/advocacy.jpg')}  className="filler-image" /></div>
                </div>
                <div>
                  <div>
                    <div className="size-22 blue-text"> Help at home 1</div>
                    <p> Appointing a power of attorney can make difficult choices easier for you and the person you care for.</p>
                    <div className="flex-row" style={{justifyContent: 'space-between'}}>
                      <FlatButtonBlue> Read more </FlatButtonBlue>
                      <div className="flex-row">
                        <div className="grey-round"> Aged care </div>
                        <div className="grey-round"> Respite </div>
                      </div>
                    </div>
                    </div>
                </div>
              </div>
              <hr></hr>
            </div>


            <div className="popular-topic">
              <div className="flex-row" style={{alignItems: 'flex-start', marginTop: '50px', flexWrap: 'nowrap'}}>
                <div>
                  <div className="filler-image"><img src={require('../../img/services.jpg')}  className="filler-image" /></div>
                </div>
                <div>
                  <div>
                    <div className="size-22 blue-text"> Help at home 2</div>

                    <p>Appointing a power of attorney can make difficult choices easier for you and the person you care for.</p>
                    <div className="flex-row" style={{justifyContent: 'space-between'}}>
                      <FlatButtonBlue> Read more </FlatButtonBlue>
                      <div className="flex-row">
                        <div className="grey-round"> Aged care </div>
                        <div className="grey-round"> Respite </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr></hr>
            </div>


            <div className="popular-topic">
              <div className="flex-row" style={{alignItems: 'flex-start', marginTop: '50px', flexWrap: 'nowrap'}}>
                <div>
                  <div className="filler-image"><img src={require('../../img/costs.jpg')}  className="filler-image" /></div>
                </div>
                <div>
                  <div>
                    <div className="size-22 blue-text"> Help at home 3</div>
                    <p> Appointing a power of attorney can make difficult choices easier for you and the person you care for.</p>
                    <div className="flex-row" style={{justifyContent: 'space-between'}}>
                      <FlatButtonBlue> Read more </FlatButtonBlue>
                      <div className="flex-row">
                        <div className="grey-round"> Aged care </div>
                        <div className="grey-round"> Respite </div>
                      </div>
                    </div>
                    </div>
                </div>
              </div>
              <hr></hr>
            </div>

         </div>

         <div className="topics-side-bar">
          <h5> Topics </h5>
          <hr></hr>

          <div className="topic">
            <div style={{textDecoration: 'underline'}}> Help to stay at home </div>
            <div className="count">
              24
            </div>
          </div>


          <hr></hr>
          <div className="topic">
            <div style={{textDecoration: 'underline'}}> Costs</div>
            <div className="count">
              12
            </div>
          </div>

          <hr></hr>

          <div className="topic">
            <div style={{textDecoration: 'underline'}}> Respite & short term care</div>
            <div className="count">
              3
            </div>
          </div>


          <hr></hr>
          <div className="topic">
            <div style={{textDecoration: 'underline'}}> Eligibility </div>
            <div className="count">
              12
            </div>
          </div>


          <hr></hr>
          <div className="topic">
            <div style={{textDecoration: 'underline'}}> Planning Ahead</div>
            <div className="count">
              24
            </div>
          </div>

          <hr></hr>
         </div>
      </div>
      }
      {(this.state.hasSearched && this.state.currentArticle == '') &&
        <div className="container">

          <div className="results-counts-row" id={'results-section'}>
            <div className="result-counts" >
              25 Results Found:
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
          <div style={{display: 'flex'}}>
            <div className="filter-column">
              <h4 style={{padding: '15px'}}> Refine </h4>

              <div className="filter-row">
                { this.state.filters["Cleaning and laundry"] && <img className="big-radio2" src={CheckActive} /> }
                { !this.state.filters["Cleaning and laundry"] && <img className="big-radio2" src={CheckDefault} /> }
                Aged care homes
              </div>

              <div className="filter-row">
                { this.state.filters["Cleaning and laundry"] && <img className="big-radio2" src={CheckActive} /> }
                { !this.state.filters["Cleaning and laundry"] && <img className="big-radio2" src={CheckDefault} /> }
                Help in the Home
              </div>


              <div className="filter-row">
                { this.state.filters["Cleaning and laundry"] && <img className="big-radio2" src={CheckActive} /> }
                { !this.state.filters["Cleaning and laundry"] && <img className="big-radio2" src={CheckDefault} /> }
                Respite
              </div>


              <div className="filter-row">
                { this.state.filters["Cleaning and laundry"] && <img className="big-radio2" src={CheckActive} /> }
                { !this.state.filters["Cleaning and laundry"] && <img className="big-radio2" src={CheckDefault} /> }
                Costs
              </div>


              <div className="filter-row">
                { this.state.filters["Cleaning and laundry"] && <img className="big-radio2" src={CheckActive} /> }
                { !this.state.filters["Cleaning and laundry"] && <img className="big-radio2" src={CheckDefault} /> }
                Assessment
              </div>


              <div className="filter-row">
                { this.state.filters["Cleaning and laundry"] && <img className="big-radio2" src={CheckActive} /> }
                { !this.state.filters["Cleaning and laundry"] && <img className="big-radio2" src={CheckDefault} /> }
                Legal
              </div>


              <div className="filter-row">
                { this.state.filters["Cleaning and laundry"] && <img className="big-radio2" src={CheckActive} /> }
                { !this.state.filters["Cleaning and laundry"] && <img className="big-radio2" src={CheckDefault} /> }
                Tips
              </div>


              <div className="filter-row">
                { this.state.filters["Cleaning and laundry"] && <img className="big-radio2" src={CheckActive} /> }
                { !this.state.filters["Cleaning and laundry"] && <img className="big-radio2" src={CheckDefault} /> }
                Dimentia
              </div>

            </div>

            <div>
              <h4 style={{marginLeft: '10px'}}> Results </h4>

              <div className="result-item">
                <div className="blue-text" style={{fontSize: '18px'}}> Do carers need a power of attorney? </div>
                <div className="grey-text" style={{margin: '10px 0 10px 0'}}> Appointing a power of attorney can make difficult choices easier for you and he person you care for.
                </div>
                <button className="card-button3" > Read more</button>
              </div>


              <div className="result-item">
                <div className="blue-text" style={{fontSize: '18px'}}> Do carers need a power of attorney? </div>
                <div className="grey-text" style={{margin: '10px 0 10px 0'}}> Appointing a power of attorney can make difficult choices easier for you and he person you care for.
                </div>
                <button className="card-button3" > Read more</button>
              </div>


              <div className="result-item">
                <div className="blue-text" style={{fontSize: '18px'}}> Do carers need a power of attorney? </div>
                <div className="grey-text" style={{margin: '10px 0 10px 0'}}> Appointing a power of attorney can make difficult choices easier for you and he person you care for.
                </div>
                <button className="card-button3" > Read more</button>
              </div>


              <div className="result-item">
                <div className="blue-text" style={{fontSize: '18px'}}> Do carers need a power of attorney? </div>
                <div className="grey-text" style={{margin: '10px 0 10px 0'}}> Appointing a power of attorney can make difficult choices easier for you and he person you care for.
                </div>
                <button className="card-button3" > Read more</button>
              </div>

            </div>

          </div>

        </div>
      }



    <Footer/>
    </div>
  
    );
  }
}

export default Topics;
