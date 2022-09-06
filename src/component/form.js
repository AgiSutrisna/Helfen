import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function () {
  return (
    <section id='#!'>
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
  )
}
