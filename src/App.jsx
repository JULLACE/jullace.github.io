import { HashRouter, Routes, Route } from "react-router-dom"

import Layout from "./pages/Layout"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Projects from "./pages/Projects"

const App = () => {
  return (
    <div className='main'>
      <div className='items'>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="blog" element={<Blog />} />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    </div>
  )
}

export default App