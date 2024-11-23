import { BrowserRouter, Route, Routes } from "react-router-dom"
import Courses from "../components/courses/Courses"
import HomeLayaut from "../pages/HomeLayaut"
import Home from "../pages/Home"
import Info from "../pages/info"
import CousId from "../components/courses/CousId"

const App = () => {
  return (
<BrowserRouter>
  <Routes>
    <Route  path="/" element={<HomeLayaut/>}>
      <Route path='/' element={<Home />} />
      <Route path='/info' element={<Info />} />
      <Route path='/cours' element={<Courses />} />
      <Route path='/cours/:id' element={<CousId />} />
    </Route>
  </Routes>
</BrowserRouter>
  )
}

export default App
