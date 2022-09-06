import React from 'react'
import '../index.scss';

export default function home() {
  return (
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
  )
}
