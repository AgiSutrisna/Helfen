import React from 'react'

export default function keunggulan() {
  return (
    <section id="keunggulan">
          <div className="container">
          <div className="d-flex">
          <div className="descKeunggulan">
                <h1 className="txt-1-3">
                    Keunggulan Kami
                </h1>
            </div>
            <div className="keunggulan">
            <img src="assets/img/image_6.png" alt="harga" className='img-3-1'/>
            <h3 className='txt-2-1'>HARGA TERMURAH</h3>
            <p className='txt-3-1'>Jaminan harga termurah dari perusahaan riset lainnya</p>
            <img src="assets/img/image_8.png" alt="riset" className='img-3-1'/>
            <h3 className='txt-2-1'>RISET AKURAT</h3>
            <p className='txt-3-1'>Riset yang simple dan mudah dipahami namun tetap akurat</p>
            </div>
            <div className="keunggulanTiga">
            <img src="assets/img/image_7.png" alt="desision" className='img-3-1'/>
                <h3 className='txt-2-1'>Decision Consultant</h3>
                <p className='txt-3-1'>Pendampingan dalam pengambilan keputusan</p>
            </div>
        </div>
        </div>
      </section>
  )
}
