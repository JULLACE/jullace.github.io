import { Outlet, Link, NavLink } from "react-router-dom";
import pfp from '../assets/pfp.png'
import '../css/content.css'

const Layout = () => {
  return (
    <>
      <Link to='/about'><img src={pfp} /></Link>
      <span className='subtitle'>
        <a href='https://dreamcatalogue.bandcamp.com/album/rain-temple'>
          From Rain Temple by 2814, <br></br> a favorite of mine
        </a>
      </span>

      <h1 className="title">JULLACE</h1>
      <ol className='nav'>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'selected' : ''}>about</NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'selected' : ''}>projects</NavLink>
        </li>
        <li>
          <NavLink to="/blog" className={({ isActive }) => isActive ? 'selected' : ''}>blog</NavLink>
        </li>
      </ol>
      <Outlet />
    </>
  )
};

export default Layout;
