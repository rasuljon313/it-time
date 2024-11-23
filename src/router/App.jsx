import { BrowserRouter, Route, Routes } from "react-router-dom"
import Courses from "../components/courses/Courses"
import HomeLayaut from "../pages/HomeLayaut"
import Home from "../pages/Home"
import Info from "../pages/Info"
import CousId from "../components/courses/CousId"
import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
import News from "../pages/News"

const App = () => {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
      offset: 50,
      easing: 'ease-in-out'
    })
  },[])
  return (
<BrowserRouter>
  <Routes>
    <Route  path="/" element={<HomeLayaut/>}>
      <Route path='/' element={<Home />} />
      <Route path='/info' element={<Info />} />
      <Route path='/cours' element={<Courses />} />
      <Route path='/cours/:id' element={<CousId />} />
      <Route path='/new' element={<News/>} />
    </Route>
  </Routes>
</BrowserRouter>
  )
}

export default App
