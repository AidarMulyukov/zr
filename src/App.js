import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from "./molecules/Jumbotron";
import BriefInfo from "./molecules/BriefInfo";
import InfoSection from "./molecules/InfoSection";
import Connect from './molecules/Connect';
import Footer from './molecules/Footer';
import Home from './templates/Home';
import Modal from './molecules/Modal'
import PriceList from './molecules/PriceList';
import Flavors from './molecules/Flavors';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      olderThan18: localStorage.getItem('olderThan18'),
    }
  }


  handleModal = (callbackFromChild) => {
    this.setState({ olderThan18: callbackFromChild });
  }



  render() {
    return (
      <div className="App">
        {/* {!this.state.olderThan18 && <Modal callBackFromParent={this.handleModal} /> }  */}

        {
          this.state.olderThan18 &&
          <div>
            <Home />
            <Jumbotron />
            <Flavors/>
            {/* <BriefInfo /> */}
            {/* <InfoSection /> */}
            {/* <PriceList/> */}
            <Connect />
            <Footer />
          </div>
        }
      </div>
    );
  }
}

export default App;
