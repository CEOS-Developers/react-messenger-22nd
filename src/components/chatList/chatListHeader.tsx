
import magnifier from '@/assets/chatroom/magnifier.svg';
import bell from '@/assets/chatList/bell.svg';
import chatPlusIcon from '@/assets/chatList/chatPlusIcon.svg';

export default function ChatHeader() {
    return (
        <div className="flex-col w-[375px] h-[160px] mx-auto items-center justify-center-safe">
            <div className="flex h-[56.3px] items-center justify-center-safe">

            </div>
            <div className="flex w-[343px] h-[25px]  mx-auto items-center justify-center-safe">
                <span className=" text-[16px] leading-[1.4] font-bold">
                    메세지
                </span>
                <img src={magnifier} className={"w-[24px] h-[24px] ml-auto"} alt="mag"/>
                <img src={chatPlusIcon} className={"w-[24px] h-[24px] ml-[12px]"} alt="chat"/>
                <img src={bell} className={"w-[24px] h-[24px] ml-[12px]"} alt="bell"/>
            </div>
            <div className="flex h-[48px] mt-[9px] ml-[16px] items-center ">
                <div className="w-[47px] h-[28px] mr-[8px] bg-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-[12px] leading-[1.4] font-medium">전체</span>
                </div>
                <div className="w-[47px] h-[28px] mr-[8px] border-2 border-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-[12px] leading-[1.4] font-medium">읽음</span>
                </div>
                <div className="w-[71px] h-[28px] border-2 border-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-[12px] leading-[1.4] font-medium">읽지 않음</span>
                </div>
            </div>
        </div>
    );
}
