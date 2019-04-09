import React from 'react';
import './styles.css';
class FlavorCard extends React.Component {
    
    render(props) {
        // const color = this.props.id % 2 === 0 ? 'green' : 'grey';
        const style = {
            "padding":0,
            "min-height":"100px",
            "background":
                `linear-gradient(
                    rgba(0, 0, 0, 0.7),
                    rgba(0, 0, 0, 0.7)
                ),
                url("${this.props.img}")`,
            "background-size":"cover",


        };
        return (
            <div className={`p-0 d-flex justify-content-center align-items-center ${this.props.column} flavorCard`} style={style}>
                <h4 className="flavorCardHeader px-2">
                    {this.props.rus}
                </h4>
            </div>
        )
    }


}


export default FlavorCard;