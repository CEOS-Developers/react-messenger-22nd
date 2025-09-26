import {useEffect, useRef, useState} from 'react';

import AddBtn from '@/assets/chatroom/add.svg';
import EmojiBtn from '@/assets/chatroom/emoji.svg';
import BluePlaneBtn from '@/assets/chatroom/bluePlane.svg';
import PlaneBtn from '@/assets/chatroom/plane.svg';
import * as React from "react";


type ChatInputProps = {
    value: string;
    onChange: (v: string) => void;
    onSend: (v: string) => void;
    onImageSend: (file: File) => void;
    onAdd: () => void;
    onEmoji: () => void;
    placeholder?: string;
};

const ChatInput = ({value, onChange, onSend, onEmoji, onAdd,  placeholder = "메시지 보내기",}:
                   ChatInputProps) => {

    const [composing, setComposing] = useState(false);
    const taRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        const el = taRef.current;
        if (!el) return;
        el.style.height = 'auto';
        el.style.height = Math.min(48, el.scrollHeight) + 'px';
    }, [value]);
    const trySend = () => {
        const msg = value.trim();
        if (!msg) return;
        onSend(msg);
    };

    //입력창에 입력할 시
    const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey && !composing) {
            e.preventDefault();
            trySend();
        }
    };


    return (
        <div className="flex flex-col w-[375px] h-[96px]">

            <div className="flex items-center w-[343px] mx-auto bg-white rounded-[27px] px-2 py-2 overflow-hidden">
                <button type="button" onClick={onAdd} >
                    <img src={AddBtn} className={"w-[24px] h-[24px] p-0.5"} alt="add" />
                </button>

                <textarea
                    ref={taRef}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onKeyDown={onKeyDown}
                    placeholder={placeholder}
                    //한글 입력시 오류방지
                    onCompositionStart={() => setComposing(true)}
                    onCompositionEnd={() => setComposing(false)}
                    rows={1}
                    //입력창 기본 테두리, 스크롤바 등 모두 제거
                    className="flex w-[240px] ml-[10px] outline-none resize-none appearance-none overflow-auto no-scrollbar"
                />

                <button type="button" onClick={onEmoji} className="ml-auto">
                    <img src={EmojiBtn} className="w-[24px] h-[24px] cursor-pointer" alt="emoji button" />
                </button>
                {/*전송 버튼*/}
                <button type="button" onClick={trySend} className="ml-[4px] mr-[10px]">
                    {value.trim()
                        ? <img src={BluePlaneBtn} alt="send" className="w-6 h-6 cursor-pointer" />
                        : <img src={    PlaneBtn} alt="send" className="w-6 h-6 cursor-pointer" />
                    }
                </button>
            </div>
        </div>
    );
}; export default ChatInput

