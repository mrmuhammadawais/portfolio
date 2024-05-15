// import { container,Row,Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../../assets/img/meter1.svg';
import meter2 from '../../assets/img/meter2.svg';
import meter3 from '../../assets/img/meter3.svg';
import colorSharp from '../../assets/img/color-sharp.png';
import './Skills.css';
export const Skills=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <section className="skill" id="skills">
           <div className="container">
            <div className="row">
                <div className='col-12'>
        <div className="skill-bx wow zoomIn">
            <h2>
                Skills
            </h2>
            <p>As a seasoned website developer, I bring a diverse skill set to the table, honed through years of hands-on experience and a passion for crafting exceptional digital experiences. Proficient in both front-end and back-end development, I specialize in building dynamic and responsive websites that seamlessly blend creativity with functionality. My expertise encompasses a range of programming languages and frameworks including HTML5, CSS3, JavaScript, React.js, Node.js,Bootstrap and Redux JS </p>
            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
            <div className='item'>
                <img src={meter1} alt=" bn"></img>
                <h5>Web Development</h5>
            </div>
            <div className='item'>
                <img src={meter2} alt=" vb"></img>
                <h5>JavaScript Developer</h5>
            </div>
            <div className='item'>
                <img src={meter3} alt=" mrer"></img>
                <h5>React Js Developer</h5>
            </div>
            <div className='item'>
                <img src={meter1} alt=" hjyh"></img>
                <h5>Front-End Developer</h5>
            </div>
            <div className='item'>
                <img src={meter1} alt=" hjyh"></img>
                <h5>Bootstrap</h5>
                </div>
                <div className='item'>
                <img src={meter1} alt=" hjyh"></img>
                <h5>Redux</h5>
            </div>
            </Carousel>
        </div>
        </div>
        </div>
        </div>
               
           <img className="background-image-left" src={colorSharp} alt="img"/>
        </section>
      )
}