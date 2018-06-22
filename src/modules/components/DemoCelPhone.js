import React, {Component} from 'react'
import '../assets/DemoCelColors.css'

class DemoCelPhone extends Component {
  render () {
    return (
      <div>
        <iframe title={'celPrototype'} onLoad={console.log('ready')} style={{transform: 'scale(0.6)', zIndex: -1}} width={424} height={916} src='https://invis.io/3CLJKRPUDVP' frameBorder='0' />
      </div>
    )
  }
}

export default DemoCelPhone
