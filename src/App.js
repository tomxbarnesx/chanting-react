import React, { Component } from 'react';
import './App.css';
import Pic from './components/Pic';
import Cover from './components/Cover';
import picData from './data/picData'

class App extends Component {
  constructor() {
    super();
    this.state = {
      picData: picData,
      scroll: 0
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount(){
    window.addEventListener("scroll", this.handleScroll);
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
    const pics = this.state.picData.map((pic) => {
      return <Pic key={pic.id} info={pic} />
    })

    return (
      <div className="App">
        <Cover scroll={this.state.scroll}/>
        {pics}
      </div>
        
    );
  }
}

export default App;
