import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return <nav>
        <Link to='/'><button>User Page</button></Link>
        <Link to='/streaming'><button>Streaming Services</button></Link>
        <Link to='/legal'><button>Contact Us</button></Link>
    </nav>
}