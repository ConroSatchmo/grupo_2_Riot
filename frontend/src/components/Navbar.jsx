import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#2f3542'}}>
            <div className="container-fluid">
                <Link to='/' className='nav-link ms-5 text-light'>Inicio</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end me-5" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/products' className='nav-link text-light'>Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/users' className='nav-link text-light'>Usuarios</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/brands' className='nav-link text-light'>Marcas</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar