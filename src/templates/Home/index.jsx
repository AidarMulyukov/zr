import React from 'react';
import TransparentNavbar from '../../molecules/TransparentNavbar';
import BgSlider from "../../molecules/BgSlider";
import WelcomeScreen from "../../molecules/WelcomeScreen";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div id="home">
                <TransparentNavbar/>
                {/*<WelcomeScreen/>*/}
                <BgSlider/>
            </div>
        );
    }
}

export default Home;
