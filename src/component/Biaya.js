import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Biaya() {
  return (
    <section id="estimasiBiaya">
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
    <p className="b1">*harga akan menyesuaikan dengan pemilihan metode riset dan jenis data yang digunakan</p>
    <a href ="https://wa.me/6281355538777" className='btn-2 txt-btn text-white'>Kontak Admin</a>
    </div>
    </div>
    </section>
  )
}
