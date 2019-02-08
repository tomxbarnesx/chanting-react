import React, {Component} from 'react';

import tori from '../icons/inari.png'
import './Pic.css';

class Inari extends Component {
    constructor(){
        super()
        this.state = {
            unlocked: false,
        }
        this.MouseWheelHandler = this.MouseWheelHandler.bind(this)
        this.disableScroll = this.disableScroll.bind(this)
        this.unlock = this.unlock.bind(this)
    }

    disableScroll() {
        console.log(this.state.unlocked)
        const home = document.getElementsByClassName('white')[0];
        home.addEventListener("mousewheel", this.MouseWheelHandler, true);
        home.addEventListener("DOMMouseScroll", this.MouseWheelHandler, true);
    }

    unlock() {
        const home = document.getElementsByClassName('white')[0];
        home.removeEventListener("mousewheel", this.MouseWheelHandler, true);
        home.removeEventListener("DOMMouseScroll", this.MouseWheelHandler, true);
        this.setState({unlocked: true})
        console.log(this.state.unlocked)
    }

    MouseWheelHandler = (e) => {
        e.preventDefault();
        return false;
    }


    render(props) {

        if (this.props.scroll > 55.6 && this.state.unlocked === false){
            this.disableScroll();
        }
        // if (this.props.scroll < 55.6 && this.state.unlocked === true){
        //     this.disableScroll();
        // }

        return (
            <div className="inariStick">
                <div className="sticky-pic white">
                    <div className="toriContainer">
                        <img src={tori} width="100%" onClick={this.unlock}/>
                    </div>
                    {/* <h1>Inari</h1> */}
                </div>
            </div>
        )
    }
}

export default Inari