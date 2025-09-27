interface SentChatProps {
  text: string;
  time?: string;
}

const SentChat = ({ text, time }: SentChatProps) => {
  return (
    <div className="flex justify-end w-full mt-[8px]">
      <div>
        {time && (
          <span className="bottom-0 ml-[8px] right-[-40px] body-3 text-gray-300">
            {time}
          </span>
        )}
      </div>
      <div className="body-1 rounded-[16px] bg-main-green text-white w-auto max-w-[251px] h-auto min-h-[34px] max-h-[346px] pr-[12px] pl-[12px] pb-[6px] pt-[6px] ml-[12px]">
        {text}
      </div>
    </div>
  );
};

export default SentChat;
