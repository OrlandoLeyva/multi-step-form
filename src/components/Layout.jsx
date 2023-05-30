import Sidebar from "./Sidebar"
import { Outlet } from "react-router"

export default function Layout() {
    return (
        <div className="site-wrapper">
            <Sidebar />
            <Outlet />
        </div>
    )
}