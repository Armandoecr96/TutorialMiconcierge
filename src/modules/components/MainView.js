import React, {Component} from 'react'
import SplashScreen from '../assets/Views/SplashScreen.png'

class MainView extends Component {
  render () {
    return (
      <div className='container' style={{background: `url(${SplashScreen}) center top`, backgroundSize: '100%'}} />
    )
  }
}

export default MainView
