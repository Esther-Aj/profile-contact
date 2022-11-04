import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <Container fluid className='footer-holder'>
    <Container fluid className='footer'>
       
      <Col lg={2} className="footer-content"><img src="/images/img4.png" alt="" srcset="" /></Col>
      <Col lg={8} className="footer-content"><p className='hng'>HNG Internship 9 Frontend Task</p></Col>
      <Col lg={2} className="footer-content"><img src=    "/images/img3.png" alt="" srcset="" /></Col>
      </Container>
     </Container>
  )
}

export default Footer;