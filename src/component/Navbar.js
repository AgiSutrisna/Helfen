import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

export default function navbar() {
  return (
    <nav class="navbar navbar-expand-lg  fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="#"><img src="assets/img/helfen.png" alt="..." />Helfen</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ms-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav  ms-auto py-4 py-lg-0">
                        <li class="nav-item"><a class="nav-link" href="#home">HOME</a></li>
                        <nav>
                        <NavDropdown
                            id="nav-dropdown-muted-example"
                            title="LAYANAN"
                            menuVariant="muted"
                        >
                            <NavDropdown.Item href="#layanan">Layanan Kami</NavDropdown.Item>
                            <NavDropdown.Item href="#estimasiBiaya">
                                Biaya Layanan
                            </NavDropdown.Item>
                        </NavDropdown>
                        </nav>
                        <li class="nav-item"><a class="nav-link" href="#carakerja">CARA KERJA</a></li>
                        <li class="nav-item"><a class="nav-link" href="#keunggulan">TENTANG KAMI</a></li>
                        <li class="nav-item"><a class="nav-link" href="#karir">KARIR</a></li>
                        <li class="nav-item"><a class="nav-link" href="#kontak">KONTAK</a></li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}
