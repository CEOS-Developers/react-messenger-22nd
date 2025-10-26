import { Link, useLocation } from "react-router-dom";
import React from "react";
import bar from "@/assets/chatList/bar.svg"
import chatListTab from "@/assets/chatList/chatListTab.svg"
import chatListTabOn from "@/assets/chatList/chatListTabOn.svg"
import friendsTab from "@/assets/chatList/friendsTab.svg"
import friendsTabOn from "@/assets/chatList/friendsTabOn.svg"
import navbarN from "@/assets/chatList/navbarN.svg"
import navbarT from "@/assets/chatList/navbarT.svg"
import dots from "@/assets/chatList/dots.svg"

export default function NavBar() {
    const location = useLocation();
    const current = location.pathname; // "/" or "/chat"

    return (
        <div className={"flex flex-col w-[375px] h-[74px]"}>
            <nav className="flex justify-between  mt-[10px] text-[11px] font-pretendard leading-[1.4] z-10 bg-white">
                <Link to="/">
                    <div className={"ml-[32px]"}>
                        <img src={(current === "/" ? friendsTabOn : friendsTab)} alt={friendsTab} />
                    </div>
                </Link>
                <Link to="/chatList">
                    <div>
                        <img src={(current === "/chatList" ? chatListTabOn : chatListTab)} alt={chatListTab} />
                    </div>
                </Link>
                <div>
                    <img src={navbarT} alt="navBarT" />
                </div>
                <div>
                    <img src={navbarN} alt="navBarN" />
                </div>
                <div className={"mr-[32px]"}>
                    <img src={dots} alt="navBarDots" />
                </div>
            </nav>
            <div className={"w-[110.84px] h-[3.69px] mx-auto mt-[29px]"}>
                <img src={bar} alt={"bar"} />
            </div>
        </div>
    );
}
