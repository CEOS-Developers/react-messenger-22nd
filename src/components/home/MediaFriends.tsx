
import onPf from '@/assets/chatroom/onPf.svg';
import defPf from '@/assets/chatroom/defPf.svg';
import onPhone from '@/assets/chatroom/onPhone.svg';
import onLaptop from '@/assets/chatroom/onLaptop.svg';
import {useMediaFriendsOpen} from "@/hooks/toggler";

export default function MediaFriends() {
    const open = useMediaFriendsOpen(true);                           // ← add (start open)

    if (!open) return null;

    return (
        <div className="flex-col w-[375px] h-[220px] mx-auto items-center justify-center-safe bg-white">
            <div className="flex h-[55px] m-0 items-center text-sm font-medium leading-[1.4] font-['Pretendard'] bg-white">
                <img src={onPf} className={"ml-[16px] w-[38px] h-[38px]"} alt="onPf"/>
                <span className={"ml-[10px]"}>김민지</span>
                <img src={onPhone} className={"ml-auto mr-[16px] w-[24px] h-[24px]"} alt="onPhone"/>
            </div>
            <div className="flex h-[55px] m-0 items-center text-sm font-medium leading-[1.4] font-['Pretendard'] bg-white">
                <img src={defPf} className={"ml-[16px] w-[38px] h-[38px]"} alt="defPf"/>
                <span className={"ml-[10px]"}>이서아</span>
            </div>
            <div className="flex h-[55px] m-0 items-center text-sm font-medium leading-[1.4] font-['Pretendard'] bg-white">
                <img src={defPf} className={"ml-[16px] w-[38px] h-[38px]"} alt="defPf"/>
                <span className={"ml-[10px]"}>정세희</span>
            </div>
            <div className="flex h-[55px] m-0 items-center text-sm font-medium leading-[1.4] font-['Pretendard'] bg-white">
                <img src={onPf} className={"ml-[16px] w-[38px] h-[38px]"} alt="onPf"/>
                <span className={"ml-[10px]"}>조아람</span>
                <img src={onLaptop} className={"ml-auto mr-[16px] w-[24px] h-[24px]"} alt="onLaptop"/>
            </div>
        </div>
    );
}
