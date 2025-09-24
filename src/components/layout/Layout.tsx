import StatusBar from "@/components/statusbar/StatusBar";
import { Outlet } from "react-router-dom";
const Layout = () => {
    return(
        <div className="min-h-screen bg-[#F5F5F5] flex justify-center">
            <div className="w-[375px] min-h-screen bg-white shadow-2xl">
                <StatusBar />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;