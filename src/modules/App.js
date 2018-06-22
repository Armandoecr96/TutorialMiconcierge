import React, { Component } from 'react'
import '../assets/App.css'
import Text from './components/Text'
import DemoCelColors from './components/DemoCelColors'
import DemoCelPhone from './components/DemoCelPhone'

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

  render () {
    return (
      <div className='App'>
        <div className='text'>
          <Text
            position={this.state.position}
          />
        </div>
        <div className='democel' onClick={this.increasePosition}>
          <DemoCelColors 
            
          />
        </div>
      </div>
    )
  }
}

export default App
