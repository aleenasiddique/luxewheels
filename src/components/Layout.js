import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Booking from "./Booking"

export default function Layout(){
    return (
        <div>
        <Header />
        <main>
            <Outlet />
        </main>
        <Booking />
        <Footer />
        </div>

    )
}