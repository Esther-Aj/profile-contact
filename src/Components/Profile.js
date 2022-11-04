import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row  from 'react-bootstrap/Row';
import { Link } from "react-router-dom";



export const Profile=()=> {
  return (
    <Container fluid className='link-section'>
      <Container className='wrapper'>
      <Row className='row1'>
<div className="share">
<button className='share-btn'>
  <img src='images/share.png'></img>
</button>
<button className='more-btn'>
  <img src='images/more.png'></img>
</button>
</div>
        <div className="profile-section">
     <div className="profile-img">
      <img id='profile__img' src="images/pic.jpg" alt="" srcset="" />
      
     </div>
     <h5>Esther Ajuzieogu</h5>
   
     </div>
  <Col>
     <a className='links' id='twitter' href="https://twitter.com/esteraj__"  target='_blank'>Twitter</a>
   </Col>
   <Col className="slack-name">
     <a  id='slack' href="http://slack.com/esteraj" target='_blank'>Slack</a>
   </Col>
   <Col>
     <a id='btn__zuri' href="https://training.zuri.team" target='_blank' alt='join zuri'>Zuri team</a>
     </Col>
     <Col>
     <a id='books' href="https://books.zuri.team" title='Find books related to design and coding' target='_blank'>Zuri books</a>
     </Col>
     <Col>
     <a id='book__python' href="https://books.zuri.team/python-for-beginners
   " target='_blank'>Python books</a>
     </Col>
     <Col>
     <a id='pitch' href="https://background.zuri.team" target='_blank'>Background check for coders</a>
     </Col>
     <Col>
     <a id='book__design' href="https://books.zuri.team/design-rules" target='_blank'>Design books</a>
     </Col>

     <Col>
     <Link to='/contact'>Contact me</Link>
     </Col>
     </Row>
     <Row className='row-icons'>
     <Col>
     <div className='icons'>
      <a href="https://slack.com/esteraj">
      <img src="images/img5.png" alt="" srcset="" />
      </a>
      <a href="https://github.com/Esther-Aj"><img src="images/img6.png" alt="" srcset="" />
      </a>
      
      </div>
      </Col>
     </Row>
     </Container>
    
    </Container>
  
  );
   
}

export default Profile;