import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';




export default function () {
    const [validated, setValidated] = useState(false);
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
            'service_stgspje', 
            'template_4n7zfnh',
            form.current, 
            '1WU2noYiBWYFITM61'
            )
            .then(
                () => {
                  alert("Your message has been sent.");
                  setValidated(false);
                  e.target.reset();
                },
                (error) => {
                  alert("There was a problem sending your message.", error);
                }
              );
          };
        
          const handleSubmit = (event) => {
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            } else {
              // alert("Message was sent!");
              sendEmail(event);
            }
            setValidated(true);
          };

  return (
    <section id='#!'>
            <div className='container'>
            <div>
                    <h1 className='h1'>Dapatkan Contoh Hasil Riset</h1>
                    <h3 className='h3'>Isi data berikut dan dapatkan contoh hasil riset Helfen terdahulu</h3>
                </div>
                <Form noValidate
                    ref={form}
                    onSubmit={handleSubmit}
                    validated={validated}>
                <Form.Group className="mb-3" >
                <Form.Label><p><b>Nama Kamu</b></p></Form.Label>
                    <Form.Control type="text" placeholder="Tulis Disini" name='nama' required/>
                    <Form.Control.Feedback type="invalid">
                  Please enter your name.
                    </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label><p><b>Akun Instagram Bisnismu</b></p></Form.Label>
                    <Form.Control type="text" placeholder="Tulis Disini" name='ig' required/>
                    <Form.Control.Feedback type="invalid">
                  Please enter your instagram.
                    </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label><p><b>Nomor WhatsApp Aktif</b></p></Form.Label>
                    <Form.Control type="number" placeholder="Tulis Disini" name='wa' required/>
                    <Form.Control.Feedback type="invalid">
                  Please enter your whatsapp.
                    </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
