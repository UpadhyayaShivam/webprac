import {Outlet} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Leftbar from "./components/Leftbar/Leftbar";

const Layout=()=>{
    return(
        <div className="layout">
            <Leftbar/>
            <Navbar/>
            <div className="background">

            <Outlet/>
            </div>
        </div>
    )
}

export default Layout;