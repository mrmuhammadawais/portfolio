import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import eCommerce from "../../assets/img/eCommerce.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Projects.css';

export const Projects = () => {

   const projects = [
    {
      title: "Open-Task",
      description: "Final Year Project Front-Page",
      imgUrl: projImg1,
    },
    {
      title: "Corporate Front Page Sample",
      description: "Use Bootstrap and React",
      imgUrl: projImg2,
    },
    {
      title: "Chaudhary Goods Transport Company",
      description: "React and Bootstrap",
      imgUrl: projImg3,
    },
    {
      title: "E-Commerce Website",
      description: "Use React||React Mui||Redux||Tailwand CSS",
      imgUrl: eCommerce,
    },
   
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Served as the lead web developer, responsible for the end-to-end development of the website. Played a key role in development, design implementation, frontend optimization.Collaborated closely with the seniors to ensure alignment with project goals and objectives.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                     
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Technologies Used:

                         Frontend: HTML5, CSS3, JavaScript (jQuery), Bootstrap for responsive design</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Technologies Used:

                          Frontend: HTML5, CSS3, JavaScript (jQuery), Bootstrap for responsive design.</p>

                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="gh"></img>
    </section>
  )
}
