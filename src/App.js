import React, { Component } from 'react';
import './App.css';
import Jumbotron from "./molecules/Jumbotron";
import Connect from './molecules/Connect';
import Footer from './molecules/Footer';
import Home from './templates/Home';
import Modal from './molecules/Modal'
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
