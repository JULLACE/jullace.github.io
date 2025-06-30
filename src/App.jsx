import { BrowserRouter, Routes, Route } from "react-router-dom"
import pfp from './assets/pfp.png'

const App = () => {
  return (
    <div className='main'>
      <div className='items'>
        <a href='https://dreamcatalogue.bandcamp.com/album/rain-temple'><img src={pfp} /></a>
        <span className='subtitle'>From Rain Temple by 2814, <br></br> a favorite of mine</span>
        <p className='title'> JULLACE </p>

        <BrowserRouter>
        <Routes>
          <Route path="/" element={''}>
            <ol className='nav'>
              <li>
                <Route path="about" element={'about'}>about</Route>
              </li>
              <li>
                <Route path="projects" element={'projects'}>projects</Route>
              </li>
            </ol>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App