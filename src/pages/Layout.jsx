import { Outlet, Link } from "react-router-dom";
import pfp from '../assets/pfp.png'

const Layout = () => {
  return (
    <>
      <Link to='/'><img src={pfp} /></Link>
      <span className='subtitle'>
        <a href='https://dreamcatalogue.bandcamp.com/album/rain-temple'>
          From Rain Temple by 2814, <br></br> a favorite of mine
        </a>
      </span>

      <ol className='nav'>
        <li className='title'>
          <Link to="/">JULLACE</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/projects">projects</Link>
        </li>
        <li>
          <Link to="/blog">blog</Link>
        </li>
      </ol>
      <Outlet />
    </>
  )
};

export default Layout;
