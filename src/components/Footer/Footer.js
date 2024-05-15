import { Container, Row, Col } from "react-bootstrap";
import navsIcon1 from "../Footer/images/navs-icon1.svg";
import navsIcon2 from "../Footer/images/navs-icon2.svg";
import navsIcon3 from "../Footer/images/navs-icon3.svg";
import github from "../../assets/img/github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
         
          <Col size={12} sm={6}>
           
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/muhammad-awais-7566b4233/"><img src={navsIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=100029451095056"><img src={navsIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/mrmuhammadawais3/"><img src={navsIcon3} alt="Icon" /></a>
              <a href="https://github.com/mrmuhammadawais"><img src={github} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
       
          </Col>
        </Row>
      </Container>
    </footer>
  )
}