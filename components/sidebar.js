import Link from "next/link"

const Sidebar = () => {
  return (
    <div className="navigation_bar">
    <div className="nav-post-it navbar">
      <nav>
        <ul>
          <li><Link href="" className="active">About</Link></li>
          <li><Link href="">Skills</Link></li>
          <li><Link href="">Work Experience</Link></li>
          <li><Link href="">Projects</Link></li>
          <li><Link href="">Education</Link></li>
          <li><Link href="">Contact</Link></li>
        </ul>
      </nav>
    </div>
    <div className="nav-post-it others">
      Others
      <ul>
        <li>LinkedIn</li>
        <li>Instagram</li>
        <li>Download Resume</li>
      </ul>
    </div>
    </div>
  )
}

export default Sidebar