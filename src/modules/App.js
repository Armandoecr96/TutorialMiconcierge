import React, { Component } from 'react'
import '../assets/App.css'
import Text from './components/Text'
import DemoCelColors from './components/DemoCel'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      position: 0
    }
  }

  increasePosition = () => {
    this.setState({position: this.state.position + 1})
  }

  decreasePosition = () =>{
    this.setState({position: this.state.position - 1})
  }

  returnVenue = () => {
    this.setState({position: 2 })
  }

  renderSwitch = (param) => {
    switch (param) {
      case 0:
        return(
          <div className='mainView views' onClick={this.increasePosition}>
            <a>Button</a>
          </div>
        )
      case 1:
        return(
          <div className='viewPage'>
             <div className='back views' onClick={this.decreasePosition}>
              <a>Button</a>
            </div>
            <div className='venuesView views' onClick={this.increasePosition}>
              <a>Button</a>
            </div>
            <div className='backAndroid views' onClick={this.decreasePosition}>
              <a>Button</a>
            </div>
          </div>
         
        )
      case 2:
        return(
          <div className='viewPage'>
            <div className='back views' onClick={this.decreasePosition}>
              <a>Button</a>
            </div>
            <div className='venuePage views' onClick={this.increasePosition}>
              <a>Button</a>
            </div>
            <div className='backAndroid views' onClick={this.decreasePosition}>
              <a>Button</a>
            </div>
          </div>
          
        )
      case 3:
        return(
          <div className='viewPage'>
            <div className='close views' onClick={this.decreasePosition}>
              <a>Button</a>
            </div>
            <div className='RegisterView views' onClick={this.increasePosition}>
              <a>Button</a>
            </div>
          </div>
        ) 
      case 4: 
        setTimeout(this.increasePosition, 3000);
        break;
      case 5:
        return(
          <div className='viewPage'>
            <div className='closeModal views' onClick={this.returnVenue}>
              <a>Button</a>
            </div>
            <div className='RegisterView views' onClick={this.increasePosition}>
              <a>Button</a>
            </div>
          </div>
        )
      default:
        return(
          <div></div>
        )
    }
  }

  render () {
    return (
      <div className='App'>
        <div className='text'>
          <Text
            position={this.state.position}
          />
        </div>
        <div className='democel' >
        {
          this.renderSwitch(this.state.position)
        }
          
          <DemoCelColors 
            position={this.state.position}
          />
        </div>
      </div>
    )
  }
}

export default App
