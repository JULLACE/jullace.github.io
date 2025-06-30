import { BrowserRouter, Routes, Route } from "react-router-dom"
import pfp from './assets/pfp.png'

import Layout from "./pages/Layout"
import About from "./pages/About"

const App = () => {
  return (
    <div className='main'>
      <div className='items'>
        <a href='https://dreamcatalogue.bandcamp.com/album/rain-temple'><img src={pfp} /></a>
        <span className='subtitle'>From Rain Temple by 2814, <br></br> a favorite of mine</span>
        <p className='title'> JULLACE </p>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="about" element={<About />} />
              <Route path="projects" element={'projects'}>projects</Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App