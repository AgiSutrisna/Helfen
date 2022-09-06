import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Layanan() {
  return (
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
  )
}
