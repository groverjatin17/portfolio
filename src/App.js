import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Route } from "react-router-dom";
import {IntlProvider} from 'react-intl';

import Layout from "./components/homepage/Layout";
import History from "./components/History";

import Miscellaneous from "./components/miscellaneous/Misc.mainView";
import ProjectDescription from "./components/project-description-module/ProjectDescription";
import ContactMe from './components/contact-me/ContactMe.mainView';
import PotterPage from './components/potter-module/Potter.mainView';
import Unsplash from './components/unsplash-images/Unsplash.mainView';

import English from './assets/locale/en-US.json';
import Hindi from './assets/locale/hi-IN.json';

import './styles/scss/react-transitions.scss';

class App extends Component {

  render() {
    const {locale} =this.props.reducerInfo
    let language;
    switch (locale) {
      case 'en-US':
        language = English;
        break;
      case 'hi-IN':
        language = Hindi;
        break;
      default:
        language = English;
        break
    }

    return (
      <IntlProvider locale = {locale} messages={language} >
        <Router history={History}>
          <div className="transition-container">
          <Route exact path="/" component={Layout}/>
          <Route path="/misc" component={Miscellaneous} />
          <Route path="/projects" component={ProjectDescription} />
          <Route path='/contactMe' component={ContactMe} />
          <Route path='/potterPage' component={PotterPage} />
          <Route path='/images' component={Unsplash} />
          </div>
        </Router>
      </IntlProvider>

    );
  }
}

const mapStateToProps = state => ({
  reducerInfo: state.reducerInfo
});

export default connect(mapStateToProps)(App);
