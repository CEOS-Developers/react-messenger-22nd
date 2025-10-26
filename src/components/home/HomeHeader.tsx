
import headerIcon from '@/assets/chatroom/homeHeaderIcons.svg';
import myPf from '@/assets/chatroom/myPf.svg';
import {toggleMyProfile} from "@/hooks/toggler";

export default function ChatHeader() {
    return (
        <div className="flex-col w-[375px] h-[160px] mx-auto items-center justify-center-safe">
            <div className="flex h-[56.3px] items-center justify-center-safe">
            </div>
            <div className="flex h-[39.7px] items-center justify-center-safe">
                <div className="flex w-[343px] h-[25px] self-start  ml-[16px] mx-auto">
                    <div className="w-[32px] h-[25px] text-[16px] leading-[1.4] font-semibold">
                        친구
                    </div>
                    <img src={headerIcon} className={"w-[96px] h-[24px] ml-auto"} alt="icons"/>
                </div>
            </div>
            <div className="flex h-[64px] items-center text-[14px] leading-[1.4] font-body ">
                <button onClick={toggleMyProfile} className={"cursor-pointer"}>
                    <img src={myPf} className={"w-[44px] h-[45px] ml-[16px] mr-[12px]"} alt="myPf"/>
                </button>
                성정수
            </div>
        </div>
    );
}
