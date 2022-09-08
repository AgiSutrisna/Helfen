import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from "sweetalert2";



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
            var nama = ("#nama").valueOf();
            var ig = ("#ig").valueOf(); 
            var hp = ("#hp").valueOf();
            if(nama === '' || ig ===''|| hp ===''){
            Swal.fire({
                title: "Field Empty!!",
                text: "Please check the missing field!!",
                icon:"warning",
                button:"Aww yiss!!",
            });
            }else{
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
        

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
                    <Form.Control type="text" placeholder="Tulis Disini" name='nama' id='nama' />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label><p><b>Akun Instagram Bisnismu</b></p></Form.Label>
                    <Form.Control type="text" placeholder="Tulis Disini" name='ig'  id='ig'/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label><p><b>Nomor WhatsApp Aktif</b></p></Form.Label>
                    <Form.Control type="text" placeholder="Tulis Disini" name='hp' id='hp' />
                </Form.Group>
                <p>*File hasil riset akan kami kirimkan via Whatsapp. Pastikan nomor whatsapp yang kamu isi benar.</p>
                <p>**Semua data yang kamu masukan tidak akan diberikan kepada pihak lain</p>
                <Button className='tmbl' type="submit" value='send' onClick={sendEmail}>
                    Kirim
                </Button>
                </Form>
            </div>
        </section>
  )
}
