import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Nabvar = ({navData}) => {
  return (
    <nav>
      <ul>
        {navData.map(item => (
          <li key={item.id}>
            <Link to={item.link}>{item.name}</Link>
          </li> 
        ))}
      </ul> 
    </nav>
  )
}

export default Nabvar