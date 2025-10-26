
import bluePf from '@/assets/chatroom/bluePf.svg';
import dropdown from '@/assets/chatroom/dropdown.svg';
import {toggleMediaFriends, toggleSalesFriends, useMyProfileOpen} from "@/hooks/toggler";
import MediaFriends from "@/components/home/MediaFriends";
import SalesFriends from "@/components/home/SalesFriends";
import MyProfile from "@/components/home/MyProfile";
import NavBar from "@/components/NavBar";
import React from "react";

export default function HomeBody() {
    return (
        <div className="flex-col w-[375px] h-[609px] mx-auto items-center justify-center-safe bg-gray-100">
            <MyProfile />
            <div className="flex h-[32px] ml-[16px] m-0 pt-2 text-[12px] leading-[1.3] font-medium bg-gray-100">
               새로운 친구
            </div>
            <div className="flex h-[55px] items-center  bg-white">
                <img src={bluePf} className={"w-[38px] h-[38px] ml-[16px]"} alt="bluePf"/>
                <div className=" ml-[10px] m-0 p-0.5 text-sm font-medium leading-[1.4] font-['Pretendard']">
                    새로운 친구를 찾아보세요
                </div>
            </div>
            <div className="flex h-[32px] ml-[16px] mx-auto items-center bg-gray-100">
                <span className={"text-[12px] leading-[1.3] font-medium text-gray-600"}>
                    글로벌 미디어 부서
                </span>
                <span className={"ml-[10px] text-[12px] leading-[1.3] font-medium text-gray-600"}>
                    2/4
                </span>
                <button onClick={toggleMediaFriends} className={"w-[24px] h-[24px] ml-auto mr-[16px] cursor-pointer"}>
                    <img src={dropdown} alt="dropdown"/>
                </button>
            </div>
            <MediaFriends />
            <div className=" flex h-[32px] ml-[16px] mx-auto items-center bg-gray-100">
                <span className={" pt-0 text-[12px] leading-[1.3] font-medium text-gray-600"}>
                    영업 2팀
                </span>
                <span className={"ml-[10px] text-[12px] leading-[1.3] font-medium text-gray-600"}>
                    1/4
                </span>
                <button onClick={toggleSalesFriends} className={"w-[24px] h-[24px] ml-auto mr-[16px] cursor-pointer"}>
                    <img src={dropdown} alt="dropdown"/>
                </button>
            </div>
            <SalesFriends />
            <div className = "flex flex-col mt-auto z-20">
                <NavBar />
            </div>
        </div>
    );
}
