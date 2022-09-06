import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './layanan.css';
import "@fontsource/dm-sans";
import "@fontsource/open-sans";
import "@fontsource/roboto";

export const Layanan = () => {
    
  return (
    <div className='layanan'>
      <div  className='title'>
        <h2>Layanan Kami</h2>
        <h4 >Kami menyediakan riset dengan metode dan tools yang sesuai untuk pengembangan bisnismu</h4>
      </div>
      <div className='card'>
      <Row xs={1} md={3} className="g-4">
        <Col>
          <Card  className='box1'>        
            <Card.Body className='inline'>
              <Card.Title>Flaying</Card.Title>
              <Card.Text>
                <div className='txt-1'>
                  <p>
                  Bisnismu sudah bertumbuh dan ingin menemukan potensi lainnya ?
                  </p>
                </div>
                <div className='txt-2'>
                  <p>
                    Riset kami akan membantu <b>membuka potensi baru</b> dalam bisnismu untuk bertumbuh lebih besar lagi
                  </p>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card  className='box2'>        
            <Card.Body className='inline'>
              <Card.Title>Fixing</Card.Title>
              <Card.Text>
                <div className='txt-1'>
                  <p>
                    Merasa ada sesuatu yang perlu diperbaiki dalam bisnismu? 
                  </p>
                </div>
                
                <div className='txt-2'>
                  <p>
                    Riset kami akan mencoba menemukan masalah dalam bisnismu dan <b>menyusun solusi terbaik.</b>
                  </p>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card  className='box3'>        
            <Card.Body className='inline'>
              <Card.Title>Funding</Card.Title>
              <Card.Text>
                <div className='txt-1'>
                  <p>
                    Bisnismu sedang membutuhkan pendanaan? 
                  </p>
                </div>
                <div className='txt-2'>
                  <p>
                    Riset Kami akan membantu <b>memetakan kekuatan bisnismu</b> dan menyiapkan <b>deck presentasi untuk calon investor</b>
                  </p>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>    
    </Row>
    </div>
    <button >
    KONTAK ADMIN
    </button>
    </div>
    
  );
}

export default Layanan;
