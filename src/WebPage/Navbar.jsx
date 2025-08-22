import React from 'react'
import {Link,NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <div style={{padding:"10px 30px",marginBottom:"10px", color:"whitesmoke",backgroundColor:"blue"}}>
        <h1>Navbar</h1>
        <ul>
            <li><Link to="/" style={{color:"white",textDecoration:"None"}}>Home</Link></li>
            <li><Link to="/about" style={{color:"white",textDecoration:"None"}}>About</Link></li>
            <li><Link to="/contact" style={{color:"white",textDecoration:"None"}}>Contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar