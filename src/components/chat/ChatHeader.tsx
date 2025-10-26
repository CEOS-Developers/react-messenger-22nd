
import Profile from '@/assets/chatroom/profile.svg';
import Prev from '@/assets/chatroom/prev.svg';
import MagnifierBtn from '@/assets/chatroom/magnifier.svg';
import HamburgerBtn from '@/assets/chatroom/hamburger.svg';
import friendsTabOn from "@/assets/chatList/friendsTabOn.svg";
import friendsTab from "@/assets/chatList/friendsTab.svg";
import {Link} from "react-router-dom";
import React from "react";

type Props = {
    name: string;
    numPeople: number;
    onSearch?: () => void;
    onMenu?: () => void;
}


const ChatHeader = ({ name, numPeople, onSearch, onMenu }: Props) => {
    return (
        <div className="flex-col w-[375px] h-[96px] mx-auto items-center justify-center-safe bg-white">
            <div className="h-[53px] flex items-center justify-center-safe">
            </div>
            <div className="flex w-[343px] h-[26px] mx-auto items-center bg-white ">
                <div>
                    <Link to="/chatList">
                        <img src={Prev} className={"w-[24px] h-[24px] cursor-pointer"} alt="prev" />
                    </Link>
                </div>
                <img src={Profile} className={"w-[26px] h-[26px] ml-[5px] cursor-pointer"} alt="profile" />
                <span className={"ml-[12px] cursor-pointer text-[16px] leading-[1.4] font-semibold"}>
                    {name}
                </span>
                <span className={"ml-[5px] text-[16px] leading-[1.4] text-gray-400"}>
                    {numPeople}
                </span>
                <button type='button' onClick={onSearch} className={"ml-auto cursor-pointer"} >
                    <img src={MagnifierBtn} className={"w-[24px] h-[24px] mr-[12px]"} alt="search" />
                </button>
                <button type='button' onClick={onMenu} className={"cursor-pointer"}>
                    <img src={HamburgerBtn} className={"w-[24px] h-[24px]"} alt="menu" />
                </button>
            </div>

        </div>
    );
};
export default ChatHeader;