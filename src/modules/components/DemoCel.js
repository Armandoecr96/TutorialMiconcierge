import React, { Component } from 'react'
import '../assets/DemoCelColors.css'
import nexus from '../assets/nexus6.png'
import MainScreen from '../assets/Views/MainScreen.png'
import VenuesSelectScreen from '../assets/Views/VenuesSelectScreen.png'
import VenueScreen from '../assets/Views/VenueScreen.png'
import ReservationScreen from '../assets/Views/ReservationFormScreen.jpg'

class DemoCel extends Component {
  render () {
    const screens = [
      MainScreen,
      VenuesSelectScreen,
      VenueScreen,
      ReservationScreen
    ]
    return (
      <div className='cel' style={{background: `url(${nexus}) no-repeat center top`, backgroundSize: '100%'}}>
        <div className='contentCel' style={{background: `url(${screens[this.props.position]}) no-repeat center top / 100%`}} >
          {
            this.props.position === 3
              ? <div className='reserPage' style={{background: `url(${screens[this.props.position]}) no-repeat center top / 100%`}}>
                <input type='text' className='name' />
                <input type='text' />
                <input type='text' />
                <input type='text' className='optional' />
                <input type='text' className='hotel' />
                <div style={{height: '20px'}} />
              </div>
              : <div />
          }
        </div>
      </div>
    )
  }
}

export default DemoCel