import React from 'react'

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg  fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="#"><img src="assets/img/logos/logo.png" alt="..." />Helfen</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ms-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav  ms-auto py-4 py-lg-0">
                        <li class="nav-item"><a class="nav-link" href="#home">HOME</a></li>
                        <li class="nav-item"><a class="nav-link" href="#layanan">LAYANAN</a></li>
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
