import React from 'react';
import './styles.css';
import img from './logo.svg';


class WelcomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animation_done: false
        }
    }

    render() {
        return (
            <section className="welcome">
                <img className={this.state.animation_done ? "logoAnimatedBig" : "logoAnimated"} src={img} alt=""/>
            </section>
        );
    }

    componentDidMount() {
        setTimeout(()=>this.setState({animation_done: true}), 2000);
    }

}

export default WelcomeScreen;
