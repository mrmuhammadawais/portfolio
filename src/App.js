import {NavBar} from './components/Navbar/NavBar';
import {Banner} from './components/Header/Banner';
import {Skills} from './components/Skills/Skills';
import {Projects} from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner />
     <Skills/>
     <Projects/>
     <Contact/>  
     <Footer/>
    </div>
  );
}

export default App;
