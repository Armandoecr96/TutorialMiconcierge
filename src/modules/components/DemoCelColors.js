import React, { Component } from 'react'
import '../assets/DemoCelColors.css'
import nexus from '../assets/nexus6.png'
import MainView from './MainView'
import SplashScreen from '../assets/Views/SplashScreen.png'

class DemoCelColors extends Component {
  render () {
    return (
      <div className='cel' style={{background: `url(${nexus}) no-repeat center top`, backgroundSize: '100%'}}>
        <div className='contentCel' style={{background: `url(${SplashScreen}) center top`, backgroundSize: '100%'}} />
      </div>
    )
  }
}

export default DemoCelColors
