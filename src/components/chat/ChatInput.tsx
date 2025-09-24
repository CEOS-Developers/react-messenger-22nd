import {useEffect, useRef, useState} from 'react';

import AddBtn from '@/assets/chatroom/add.svg';
import EmojiBtn from '@/assets/chatroom/emoji.svg';
import * as React from "react";


type ChatInputProps = {
    value: string;
    onChange: (v: string) => void;
    onSend: (v: string) => void;
    onImageSend: (file: File) => void;
    onAdd: () => void;
    onKeyboard: () => void;
    placeholder?: string;
};

const ChatInput = ({value, onChange, onSend, onKeyboard, onAdd,  placeholder = "메시지 보내기",}:
                   ChatInputProps) => {

    const [composing, setComposing] = useState(false);
    const taRef = useRef<HTMLTextAreaElement>(null);

    //자동으로 높이조절
    useEffect(() => {
        const el = taRef.current;
        if (!el) return;
        el.style.height = "0px";
        el.style.height = Math.min(120, el.scrollHeight) + "px";
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

            <div className="flex items-center gap-2 w-[343px] mx-auto bg-white rounded-[27px] px-2 py-2 overflow-hidden">
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
                    className="flex ml-[10px] "
                />

                <button type="button" onClick={onKeyboard} className="ml-auto">
                    <img src={EmojiBtn} className="w-6 h-6 block" alt="emoji" />
                </button>
            </div>
        </div>
    );
}; export default ChatInput