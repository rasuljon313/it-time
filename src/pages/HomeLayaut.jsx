import { Outlet } from "react-router-dom"
import Nav from "../components/nav/Nav"

const HomeLayaut = () => {
  return (
    <>
    <Nav/>
    <Outlet/>
</>
  )
}

export default HomeLayaut