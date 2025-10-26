
import edit from '@/assets/profileTab/edit.svg';
import phone from '@/assets/profileTab/phone.svg';
import myChat from '@/assets/profileTab/myChat.svg';
import folder from '@/assets/profileTab/folder.svg';
import closeBtn from '@/assets/profileTab/close.svg';
import myPf from '@/assets/chatroom/myPf.svg';
import insta from '@/assets/profileTab/insta.svg';
import cake from '@/assets/profileTab/cake.svg';

import {toggleMyProfile, useMyProfileOpen} from "@/hooks/toggler";

export default function myProfile() {
    const open = useMyProfileOpen(false);                           // ← add (start closed)

    if (!open) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black/50 z-40"></div>
            <div className="flex-col w-[375px] h-[424px] mt-[228px] mx-auto items-center rounded-t-lg absolute z-50 bg-white">
                <div className="h-[21px]">
                </div>
                <div className="flex-col h-[349px] text-sm font-medium leading-[1.4] justify-items-center font-['Pretendard'] bg-white">
                    <button onClick={toggleMyProfile} className={"w-[24px] h-[24px] ml-[16px] mb-[8px] cursor-pointer"}>
                        <img src={closeBtn} alt="close"/>
                    </button>
                    <div className="flex-col w-[343px] h-[317px] text-sm font-medium leading-[1.4] justify-items-center font-['Pretendard'] bg-white">
                        <div className="flex-col w-[217px] h-[177px] text-base font-medium leading-[1.4] justify-items-center font-['Pretendard'] bg-white">
                            <img src={myPf} className={"w-[76px] h-[76px]"} alt="myPf"/>
                            <div className={"mt-[12px] h-[19px]"}>성정수</div>
                            <div className="flex w-[217px] h-[49px] mt-[21px] text-base font-medium leading-[1.4] justify-items-center font-['Pretendard'] bg-white">
                                <div className="flex-col w-[33px] font-pretendard leading-[1.4] text-[11px] font-normal p-0 bg-white">
                                    <img src={folder} className={"w-[24px] h-[24px] ml-[4.5px] mb-[8px]"} alt="folder"/>
                                    <span>
                                    파일함
                                </span>
                                </div>
                                <div className="flex-col w-[42px] font-pretendard leading-[1.4] ml-[50px] text-[11px] font-normal p-0 bg-white">
                                    <img src={myChat} className={"w-[24px] h-[24px] ml-[9px] mb-[8px]"} alt="myChat"/>
                                    <span>
                                    내게쓰기
                                </span>
                                </div>
                                <div className="flex-col w-[42px] font-pretendard leading-[1.4] ml-[50px] text-[11px] font-normal p-0 bg-white">
                                    <img src={edit} className={"w-[24px] h-[24px] ml-[9px] mb-[8px]"} alt="edit"/>
                                    <span>
                                    수정하기
                                </span>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-col w-[343px] h-[88px] justify-between font-pretendard leading-[1.4] mt-[52px] text-[11px] font-normal p-0 bg-white">
                            <div className="flex h-[24px] items-center bg-white">
                                <img src={insta} className={"w-[24px] h-[24px] ml-[9px] mr-[8px]"} alt="insta"/>
                                <span> jxxs_2 </span>
                                <span className={"text-blue-500 ml-auto"}> 링크로 이동 </span>
                            </div>
                            <div className="flex h-[24px] items-center bg-white">
                                <img src={phone} className={"w-[24px] h-[24px] ml-[9px] mr-[8px]"} alt="phone"/>
                                <span> 010-2327-9468 </span>
                            </div>
                            <div className="flex h-[24px] items-center bg-white">
                                <img src={cake} className={"w-[24px] h-[24px] ml-[9px] mr-[8px]"} alt="cake"/>
                                <span> 2002.04.03 </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
