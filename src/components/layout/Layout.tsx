import StatusBar from "@/components/statusbar/StatusBar";
import { Outlet } from "react-router-dom";
const Layout = () => {
    return(
        <div className="h-full bg-[#F5F5F5] flex justify-center">
            <div className="w-[375px] h-full bg-white shadow-2xl flex flex-col">
                <StatusBar />
                {/* 나머지 공간을 모두 차지하도록 main 영역 설정 + 세로 스크롤바 숨김 처리 */}
                <main className="flex-1 flex flex-col overflow-y-hidden">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout;