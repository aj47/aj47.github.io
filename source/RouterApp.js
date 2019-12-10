import React, { Component } from 'react'
import Home from './components/Home'
import Topics from './components/Topics/Topics'
import Services from './components/Services/Services'
import MobileNavMenu from './components/MobileNavMenu/MobileNavMenu'
import AboutAgedCare from './components/AboutAgedCare/AboutAgedCare'
import Assessment from './components/Assessment/Assessment'
import Tools from './components/Tools/Tools'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class RouterApp extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>
          <Route exact path={`${process.env.PUBLIC_URL}/Home`} component={Home}/>
          <Route exact path={`${process.env.PUBLIC_URL}/Services`} component={Services}/>
          <Route exact path={`${process.env.PUBLIC_URL}/Topics`} component={Topics}/>
          <Route exact path={`${process.env.PUBLIC_URL}/Mobile_Menu`} component={MobileNavMenu}/>
          <Route path={`${process.env.PUBLIC_URL}/About`} component={AboutAgedCare}/>
          <Route path={`${process.env.PUBLIC_URL}/Assessment`} component={Assessment}/>
          <Route path={`${process.env.PUBLIC_URL}/Tools`} component={Tools}/>
        </Switch>
      </Router>
    );
  }

}

export default RouterApp;
