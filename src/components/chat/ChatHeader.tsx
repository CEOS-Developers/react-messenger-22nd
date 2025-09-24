import {StrictMode, useRef, useState} from 'react';

import Profile from '@/assets/chatroom/profile.svg';
import Prev from '@/assets/chatroom/prev.svg';
import MagnifierBtn from '@/assets/chatroom/magnifier.svg';
import HamburgerBtn from '@/assets/chatroom/hamburger.svg';

type Props = {
    name: string;
    numPeople: number;
    onSearch?: () => void;
    onMenu?: () => void;
}


const ChatHeader = ({ name, numPeople, onSearch, onMenu }: Props) => {
    return (
        <div className="flex-column w-[375px] h-[96px] mx-auto items-center justify-center-safe bg-white">
            <div className="h-[53px] flex items-center justify-center-safe">
                IPhone Banner Placeholder
            </div>
            <div className="flex w-[343px] h-[26px] mx-auto items-center bg-white ">
                <img src={Prev} className={"w-[24px] h-[24px] cursor-pointer"} alt="prev" />
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
                    <img src={HamburgerBtn} className={"w-[24px] h-[24px]"} alt="search" />
                </button>
            </div>

        </div>
    );
};
export default ChatHeader;