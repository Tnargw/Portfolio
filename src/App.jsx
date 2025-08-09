import Hero from './Hero.jsx';
import Nav from './Nav.jsx';
import Projects from './Projects.jsx';
import Resume from './Resume.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import './App.css';


const App = () => {
    return (
        <div>
            <Nav/>
            <Hero/>
            <Projects/>
            <Resume/>
            <About/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default App;