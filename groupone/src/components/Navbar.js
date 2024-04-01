import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                {/* logo on navbar redirect to home */}
                <a class="navbar-brand"><Link to="/home" class="nav-link"><img src='logo-food.png' style={{ width: '100px' }} /></Link></a>

                {/* hamburger menu */}
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                {/* navigation redirect to differenet components */}
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link to="/home" class="nav-link">Home</Link>
                        </li>
                        <li class="nav-item active">
                            <Link to="/contact" class="nav-link">Contact</Link>
                        </li>
                        <li class="nav-item active">
                            <Link to="/carousel" class="nav-link">Gallery</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar