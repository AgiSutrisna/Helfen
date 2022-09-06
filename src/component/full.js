import React from 'react'
import "@fontsource/poppins";
import "@fontsource/dm-sans";
import "@fontsource/open-sans";
import "@fontsource/roboto";
import './layanan.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function NavBar() {
  return (
    < >
    {/* Navbar */}
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
        <section id="home">
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6 order-lg-2 frm-1">
                        <div class="frm-1-2"><img  src="assets/img/image_1.png" alt="img_1" /></div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="p-5 frm-1-1">
                            <h2>Buka makin banyak pintu dalam bisnismu melalui <b>Data & Riset</b></h2>
                            <a href ="https://wa.me/6281355538777" className='btn-1 txt-btn text-white'>Kontak Kami</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

         <section class="page-section" id="#">
            <div class="container">
                <div class="text-center frm-2">
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <img src="assets/img/image_2.png"></img>
                        </span>
                        <p className='desc-1'><b>Banyak Pengusaha tidak Meriset</b></p>
                        <p className='desc-2'>Dari hasil riset kami <b>8 dari 10</b> bisnis owner belum menggunakan data dan riset sebagai proses pengambilan keputuan dalam bisnis merka</p>
                        
                        
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <img src="assets/img/image_3.png"></img>
                        </span>
                        <p className='desc-1'><b>Ketidak pastian tanpa Riset</b></p>
                        <p className='desc-2'>Bisnis akan dihadapkan dengan <b>ketidakpastian</b> dalam menentukan pilihan dan keputusan. Seperti halnya memilih jawaban ketika sedang ujian dengan menghitung kancing baju. Bisa benar, bisa juga salah</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <img src="assets/img/image_4.png"></img>
                        </span>
                        <p className='desc-1'><b>Pencerahan dengan Riset</b></p>
                        <p className='desc-2'>Kita akan mendapatkan pencerahan dari data dan informasi yang didapatkan melalui riset. Hal ini akan <b>memudahkan kita dalam mengambil keputusan</b> tas pilihan. Serta mengurangi resiko dan peluang kesalahan</p>
                    </div>
                </div>
            </div>
        </section> 
        
        <section id='layanan'>
            <div className='container'>
            <div className='frm-3'>
                <div  className='title'>
                    <h1>Layanan Kami</h1>
                </div>
                <div>
                    <h3>Kami menyediakan riset dengan metode dan tools yang sesuai untuk pengembangan bisnismu</h3>
                </div>
                <div className='frm-3-1'>
                <Row xs={1} md={3} className="g-4">
                    <Col>
                    <div  className='frm-3-2'>        
                      <div className='frm-3-3'>
                        <div className='bo'>Flaying</div>
                            <div className='b2'>
                              <b>Bisnismu sudah bertumbuh dan ingin menemukan potensi lainnya ?</b>
                            </div>
                            <div className='frm-3-4'>
                              <div className='b3'>
                              Riset kami akan membantu <b>membuka potensi baru</b> dalam bisnismu untuk bertumbuh lebih besar lagi
                              </div>
                            </div>
                      </div>
                    </div>
                    </Col>

                    <Col>
                    <div  className='frm-3-2 clr-1'>        
                      <div className='frm-3-3'>
                        <div className='bo'>Fixing</div>
                            <div className='b2'>
                              <b>Merasa ada sesuatu yang perlu diperbaiki dalam bisnismu? </b>
                            </div>
                            <div className='frm-3-4'>
                              <div className='b3'>
                              Riset kami akan mencoba menemukan masalah dalam bisnismu dan <b>menyusun solusi terbaik.</b>
                              </div>
                            </div>
                      </div>
                    </div>
                    </Col>

                    <Col>
                    <div  className='frm-3-2 clr-2'>        
                      <div className='frm-3-3'>
                        <div className='bo'>Funding</div>
                            <div className='b2'>
                              <b>Bisnismu sedang membutuhkan pendanaan? </b>
                            </div>
                            <div className='frm-3-4'>
                              <div className='b3'>
                              Riset Kami akan membantu <b>memetakan kekuatan bisnismu</b> dan menyiapkan <b>deck presentasi untuk calon investor</b>
                              </div>
                            </div>
                      </div>
                    </div>
                    </Col>    
                </Row>
                </div>
                <a href ="https://wa.me/6281355538777" className='btn-2 txt-btn text-white'>Kontak Admin</a>
                </div>
              </div>
        </section>

        <section id="keunggulan">
          <div className="container">
            <div className='elipse'>
              <div className='descElipse'>
              <h1><b>Keunggulan<br></br>Kami</b></h1>
              </div>
            <div className="resource">
            <h3>
            <img src="assets/img/image_6.png" className='img-3'/>
              <b>HARGA TERMURAH</b>
              <p className='txt-3'>Jaminan harga termurah dari<br/> perusahaan riset lainnya</p>
              
            </h3>
            
            <h3 className='descDesision'>
              <img src="assets/img/image_8.png" className='img-3'/>
                <b>HARGA TERMURAH</b>
                <p className='txt-3'>Riset yang simple dan mudah<br/> dipahami namun tetap akurat</p>
              </h3>
            </div>
            <div className='desision'>
              <h3 className='descDesision'>
              <img src="assets/img/image_7.png" className='img-3'/>
                Decision Consultant
                <p className='txt-3'>Pendampingan dalam<br/> pengambilan keputusan</p>
              </h3>
            </div>
          </div>
        </div>
      </section>

  

      <section id="#">
            <div className='container'>
            
      <div  className='title text-center'>
        <h1>Estimasi Biaya Layanan</h1>
      </div>
      <div className='frame'>
      <Row xs={2} md={2} className="g-4">
        <Col>
          <div className='ktk'>        
            <div className='inline'>
              <div>
              <p className='tlt'>
              Flaying
                </p>
                <p>Mulai dari</p>
                <h3><b>Rp.3.000.000</b></h3>
                <p>/Riset</p>
              </div>
            </div>
          </div>
        </Col>

        <Col>
          <div  className='ktk'>        
            <div className='inline'>
              <div>
              <p className='tlt'>
              Fixing
                </p>
                <p>Mulai dari</p>
                <h3><b>Rp.4.000.000</b></h3>
                <p>/Riset</p>
              </div>
            </div>
          </div>
        </Col>

        <Col>
          <div  className='ktk'>        
            <div className='inline'>
              <div>
                <p className='tlt'>
                Funding
                </p>
                <p>Mulai dari</p>
                <h3><b>Rp.2.000.000</b></h3>
                <p>/Riset</p>
              </div>
            </div>
          </div>
        </Col>   

        <Col>
          <div  className='ktk-2'>        
            <div className='inline-2'>
              <div>
                <p className='tlt'>
                Riset dengan Case khusus
                </p>
                <h3><b>Kontak admin kami</b></h3>
                </div>
            </div>
          </div>
        </Col>
    </Row>
    </div>
    
    </div>

           
        </section>

        <section id="karir">
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6 order-lg-2">
                        <div class="p-5">
                            <h1><b>Cek Bisnismu dengan Survei Helfen!</b></h1>
                            <h3>Isi survei dari Helfen dan dapatkan analisa terkait riset yang tepat untuk bisnismu</h3>
                            <a href ="https://wa.me/6281355538777" className='tmbl txt-btn'>Cek Sekarang</a>
                        </div>
                        
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="p-5"><img  src="assets/img/image_5.png" alt="img_1" /></div>
                    </div>
                </div>
            </div>
        </section>

        <section id='#'>
            <div className='container'>
            <div>
                    <h2>Dapatkan Contoh Hasil Riset</h2>
                    <h4>Isi data berikut dan dapatkan contoh hasil riset Helfen terdahulu</h4>
                </div>
                        <Form>
                <Form.Group className="mb-3" >
                    <Form.Label><p><b>Nama Kamu</b></p></Form.Label>
                    <Form.Control type="text" placeholder="Tulis Disini" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label><p><b>Akun Instagram Bisnismu</b></p></Form.Label>
                    <Form.Control type="text" placeholder="Tulis Disini" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label><p><b>Nomor WhatsApp Aktif</b></p></Form.Label>
                    <Form.Control type="text" placeholder="Tulis Disini" />
                </Form.Group>
                <p>*File hasil riset akan kami kirimkan via Whatsapp. Pastikan nomor whatsapp yang kamu isi benar.</p>
                <p>**Semua data yang kamu masukan tidak akan diberikan kepada pihak lain</p>
                <Button className='tmbl' type="submit">
                    Kirim
                </Button>
                </Form>
            </div>
        </section>

        <section id="kontak">
            <div className='container'>
                <div className='blue-page'>
                    <div>
                        <h2 className='text-white'><b>Ayo Riset bisnismu</b></h2>
                        <h5 className='text-white'>Hubungi Helfen team dan temukan potensi tersembunyi melalui riset</h5>
                        <div className='midline'>
                        <a href ="https://wa.me/6281355538777" className='tmbl-btn txt-btn2 '>Hubungi Kami</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>

<section id="#">
    <div className='container'>
<footer class="text-center text-lg-start">
  <div class="container p-4">
    <div class="row">
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
            <img src="assets/img/logos/logo.png" alt="..." />

        <p>
        Memiliki visi untuk membantu sebanyak mungkin pemilik usaha khususnya UMKM dengan menempatkan riset sebagai bahan penting dalam pengambilan keputusan bisnis.
        </p>
        <p>Helfen 2022</p>
      </div>

      <div class="col-lg-2 col-md-6 mb-4 mb-md-0 " >
        <h5 class="text-uppercase text-black">COMPANY</h5>

        <ul class="list-unstyled mb-0 ">
          <li>
            <a className='text-black' href="#!">OUR TEAM</a>
          </li>
          <li>
            <a className='text-black' href="#!">PROFILE</a>
          </li>
          <li>
            <a className='text-black' href="#!">CAREER</a>
          </li>
        </ul>
      </div>

      <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase text-black mb-0">lAYANAN</h5>

        <ul class="list-unstyled">
          <li>
            <a className='text-black' href="#!">RISET DAN ANALIS</a>
          </li>
          <li>
            <a className='text-black' href="#!">PENDAMPINGAN</a>
          </li>
        </ul>
      </div>

      <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase text-black mb-0">RESOURCE</h5>

        <ul class="list-unstyled">
          <li>
            <a  className='text-black' href="#!">DATA DAN REFERENSI </a>
          </li>
          <li>
            <a  className='text-black' href="#!">BLOG</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  
</footer>
</div>
</section>
    </>
  )
}

export default NavBar;