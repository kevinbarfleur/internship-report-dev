import React from 'react'

// Styles
import './navbar.styl'
// import { pageQuery } from '../pages/index'
import '../icons/css/all.css'

class Navbar extends React.Component {
  constructor(props) {
    super()

    this.state = {
      titles: { ...props.titles },
    }
  }

  render() {
    const titles = this.state.titles
    const items = Object.keys(titles).map(index => (
      <li className="navbar_element" key={index}>
        {titles[index]}
      </li>
    ))

    return (
      <div className="navbar_container">
        <div className="navbar_title">
          <p>
            <i className="fas fa-bookmark" /> Sommaire
          </p>
        </div>
        <ol className="navbar_elements">{items}</ol>
      </div>
    )
  }
}

export default Navbar
