import { Link } from "react-scroll"



const Sidebar = ({ isOpen }) => {
  return (
    <div className={`navigation_bar ${isOpen ? 'navigation_bar_opened' : ''}`}>
      <div className="nav-post-it navbar">
        <nav>
          <ul>
            <li><Link activeClass="active" to="about" spy={true} smooth={true} >About</Link></li>
            <li><Link activeClass="active" to="skills" spy={true} smooth={true} >Skills</Link></li>
            <li><Link activeClass="active" to="experience" spy={true} smooth={true} >Work Experience</Link></li>
            <li><Link activeClass="active" to="projects" spy={true} smooth={true} >Projects</Link></li>
            <li><Link activeClass="active" to="education" spy={true} smooth={true} >Education</Link></li>
            <li><Link activeClass="active" to="contact" spy={true} smooth={true} >Contact</Link></li>
          </ul>
        </nav>
      </div>
      <div className="nav-post-it others">
        <span className="socials-title">
          Connect with me
        </span>
        <ul>
          <li><a href="https://www.linkedin.com/in/venkatpavanmunaganti/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/VenkatPavanMunaganti" target="_blank" rel="noopener noreferrer">Github</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar