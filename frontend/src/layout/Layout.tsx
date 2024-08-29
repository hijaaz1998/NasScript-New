import Navbar from "../components/user_components/navbar/Navbar"
import Footer from "../components/user_components/footer/Footer"
import { Outlet } from "react-router-dom"

const Layout = () =>{
    return(
        <>
        <Navbar />
        <Outlet/>
        <Footer />
        </>
    )
}

export default Layout