/* eslint-disable */
import { useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';

import 'animate.css';
import './banner.css';
import TrackVisibility from 'react-on-screen';


  export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
    const period = 2000;
  
  
    useEffect(() => {
     
    
      let ticker = setInterval(() => {
        tick();
      }, [delta]);
  
      return () => { clearInterval(ticker) };
      
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }
  
    return (
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi I am Muhammad Awais`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>For those who dream in code and design, welcome to my digital oasis. Here, lines of HTML, CSS, and JavaScript converge to create immersive online experiences that captivate and inspire. As a web developer, I am not merely a builder of websites; I am an architect of digital journeys. With a meticulous eye for detail and a passion for innovation, I specialize in crafting responsive, user-centric designs that blur the line between form and function. From sleek portfolios to dynamic e-commerce platforms, I bring ideas to life with elegance and efficiency. Join me as we embark on a voyage through the ever-evolving landscape of the web, where every project is an opportunity to push boundaries and redefine what's possible."</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )

}