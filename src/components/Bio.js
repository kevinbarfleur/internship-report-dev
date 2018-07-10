import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './avatar_round.jpg'
import { rhythm } from '../utils/typography'

import './bio.styl'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Kyle Mathews`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Écrit par <strong>Kévin Barfleur</strong> pour son stage chez{' '}
          <a target="_blank" href="https://www.agwanet.com/">
            Agwanet
          </a>{' '}
          - Guadeloupe. <br />
          <a target="_blank" href="https://github.com/kevinbarfleur">
            Vous pouvez le suivre sur Github.
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
