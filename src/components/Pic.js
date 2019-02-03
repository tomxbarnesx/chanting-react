import React, { Component } from 'react';
import './Pic.css';

class Pic extends Component {
    construct() {

    }

    render(props) {
        return(
            <div className="pic-container">
                <div className="sticky-pic">
                    <img className="photo" src={this.props.info.imgPath}/>
                </div>
            </div>
        )
    }
}

export default Pic;