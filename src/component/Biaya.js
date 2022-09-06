import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './layanan.css';
import "@fontsource/dm-sans";
import "@fontsource/open-sans";
import "@fontsource/roboto";

export const Biaya = () => {
    
  return (
    <div className='layanan'>
      <div  className='title'>
        <h2>Estimasi Biaya Layanan</h2>
      </div>
      <div className='frame'>
      <Row xs={2} md={2} className="g-4">
        <Col>
          <Card  className='ktk'>        
            <Card.Body className='inline'>
              <Card.Title>
              <h5>
              Flaying
                </h5>
                <p>Mulai dari</p>
                <h3>
                Rp.3.000.000
                </h3>
                <p>/Riset</p>
              </Card.Title>
              <Card.Text>
                
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card  className='ktk'>        
            <Card.Body className='inline'>
              <Card.Title>
              <h5>
              Fixing
                </h5>
                <p>Mulai dari</p>
                <h3>
                Rp.4.000.000
                </h3>
                <p>/Riset</p>
              </Card.Title>
              <Card.Text>
                
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card  className='ktk'>        
            <Card.Body className='inline'>
              <Card.Title>
                <h5>
                Funding
                </h5>
                <p>Mulai dari</p>
                <h3>
                Rp.2.000.000
                </h3>
                <p>/Riset</p>
              </Card.Title>
              <Card.Text>
                
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>   

        <Col>
          <Card  className='ktk'>        
            <Card.Body className='inline'>
              <Card.Title>
                <h5>
                Riset dengan Case khusus
                </h5>
                <h3>
                Kontak admin kami
                </h3>
                
               
                
                </Card.Title>
              <Card.Text>
                
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
         
    </Row>
    </div>
    
    </div>
    
  );
}

export default Biaya;
