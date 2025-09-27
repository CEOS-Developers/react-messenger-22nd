import { useState, useEffect, useRef } from "react";
import ShowAllIcon from "../../assets/icons/ShowAllIcon";

interface SentChatProps {
  text: string;
  time?: string;
}

const SentChat = ({ text, time }: SentChatProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const el = textRef.current;
      setIsOverflowing(el.scrollHeight > el.clientHeight);
    }
  }, [text]);

  return (
    <div className="flex justify-end w-full mt-[8px]">
      <div>
        {time && (
          <span className="bottom-0 ml-[8px] right-[-40px] body-3 text-gray-300">
            {time}
          </span>
        )}
      </div>

      <div className="body-1 rounded-[16px] bg-main-green text-white w-auto max-w-[251px] min-h-[34px] pr-[12px] pl-[12px] pb-[6px] pt-[6px] ml-[12px] relative">
        <div
          ref={textRef}
          className={`whitespace-pre-line ${isExpanded ? "" : "line-clamp-17"}`}
        >
          {text}
        </div>

        {/* 전체보기 버튼 */}
        {!isExpanded && isOverflowing && (
          <button
            onClick={() => setIsExpanded(true)}
            className="w-full flex flex-row items-center justify-between body-3 text-white mt-1 no-underline"
          >
            <span>전체보기</span>
            <ShowAllIcon fill="text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SentChat;
