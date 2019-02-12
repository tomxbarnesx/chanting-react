import React, { Component } from 'react';
import './App.css';
import Pic from './components/Pic';
import Cover from './components/Cover';
import picData from './data/picData';
import BlackParticles from './components/BlackParticles';
import ParticlesWrapper from './components/ParticlesWrapper';
import Inari from './components/Inari';

class App extends Component {
  constructor() {
    super();
    this.state = {
      picData: picData,
      start: false, 
      scroll: 0,
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.handleSunClick = this.handleSunClick.bind(this)
    this.MouseWheelHandler = this.MouseWheelHandler.bind(this)
    this.disableScroll = this.disableScroll.bind(this)
    this.unlock = this.unlock.bind(this)
  }

  disableScroll() {
    console.log(this.state.start)
    const App = document.getElementsByClassName('App')[0];
    App.addEventListener("mousewheel", this.MouseWheelHandler, true);
    App.addEventListener("DOMMouseScroll", this.MouseWheelHandler, true);
  }

  unlock() {
    const App = document.getElementsByClassName('App')[0];
    App.removeEventListener("mousewheel", this.MouseWheelHandler, true);
    App.removeEventListener("DOMMouseScroll", this.MouseWheelHandler, true);
    this.setState({start: true})
    console.log(this.state.start)
  }

  MouseWheelHandler = (e) => {
    e.preventDefault();
    return false;
  }

  componentDidMount(){
    window.addEventListener("scroll", this.handleScroll);
    if (this.state.start === false && this.state.scroll === 0){
      this.disableScroll()
    }
  }

  componentWillUnmount(){
    window.addEventListener("scroll", this.handleScroll);
  }

  throttle(fn, wait) {
    let time = Date.now()

    return function(){
      if((time + wait - Date.now()) < 0) {
        fn()
        time = Date.now()
      }
    }
  }

  handleSunClick(e){
    this.setState({
      start: true
    })
    this.unlock()
    e.target.classList.add("dip")
  }

  handleScroll() {
    const scrollHeight = document.body.scrollHeight // height of entire document
    const windowHeight = window.innerHeight 
    const pageTop = window.scrollY;

    const scrollTop = window.pageYOffset // get number of pixels document has scrolled vertically 
    const scrollAmount = (scrollTop / (scrollHeight - windowHeight)) * 100 // get amount scrolled (in %)
    // console.log("SCROLL TOP", scrollTop)
    console.log("SCROLL AMOUNT", scrollAmount)

    this.setState(prevState => {
      return {
        scroll: scrollAmount
      }
    })
  }

  render() {

    const pics = this.state.picData.slice(0, 8).map((pic) => {
      return <Pic key={pic.id} info={pic} scroll={this.state.scroll} />
    })
    const pics2 = this.state.picData.slice(9).map((pic) => {
      return <Pic key={pic.id} info={pic} scroll={this.state.scroll} />
    })

    let particles;
    if(this.state.start === true) {
      particles = <ParticlesWrapper scroll={this.state.scroll}/>
    } else {
      particles = <BlackParticles />
    }

    return (
      <div className="App">
        {particles}
        <Cover handleSunClick={this.handleSunClick} scroll={this.state.scroll}/>
        {pics}
        <Inari scroll={this.state.scroll}/>
        {pics2}
      </div>
        
    );
  }
}

export default App;
