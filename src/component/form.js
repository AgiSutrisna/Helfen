import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function () {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_8dk12fg', 
        'template_oz2wp4h', form.current, 'HlNSXvxNAg3kjh0sn')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
            });
        };
  return (
    <section id='#!'>
            <div className='container'>
            <div>
                    <h1 className='h1'>Dapatkan Contoh Hasil Riset</h1>
                    <h3 className='h3'>Isi data berikut dan dapatkan contoh hasil riset Helfen terdahulu</h3>
                </div>
                        <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3" >
                    <Form.Label><p><b>Nama Kamu</b></p></Form.Label>
                    <Form.Control type="text" placeholder="Tulis Disini" name='nama' />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label><p><b>Akun Instagram Bisnismu</b></p></Form.Label>
                    <Form.Control type="text" placeholder="Tulis Disini" name='ig' />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label><p><b>Nomor WhatsApp Aktif</b></p></Form.Label>
                    <Form.Control type="text" placeholder="Tulis Disini" name='hp' />
                </Form.Group>
                <p>*File hasil riset akan kami kirimkan via Whatsapp. Pastikan nomor whatsapp yang kamu isi benar.</p>
                <p>**Semua data yang kamu masukan tidak akan diberikan kepada pihak lain</p>
                <Button className='tmbl' type="submit" value='send'>
                    Kirim
                </Button>
                </Form>
            </div>
        </section>
  )
}
