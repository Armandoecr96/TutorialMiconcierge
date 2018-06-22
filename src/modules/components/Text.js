import React, {Component} from 'react'
import '../assets/Text.css'

class Text extends Component {
  render () {
    const prhases = [
      'Choose category Restaurants',
      'Choose International Food subcategory',
      'Click on restaurant Pure Beach',
      'Click on book and fill in the data',
      'The venue will accept or reject the proposal',
      'Great! The venue has accepted',
      'Click on wallet to see the money',
      'Add card or choose one',
      'When it is Monday, it can charge',
      "And ready! It's that easy to use and make money with MiConcierge"
    ]

    return (
      <div className='text'>
        {
          this.props.position < prhases.length
            ? <h1 className='information'>{prhases[this.props.position]}</h1>
            : <h1>Download the app</h1>
        }
      </div>
    )
  }
}

export default Text
