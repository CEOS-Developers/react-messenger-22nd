interface SentChatProps {
  text: string;
}

const SentChat = ({ text }: SentChatProps) => {
  return (
    <div className="flex justify-end w-full mt-[8px]">
      <div className="body-1 rounded-[16px] bg-main-green text-white w-auto max-w-[251px] h-auto min-h-[34px] max-h-[346px] pr-[12px] pl-[12px] pb-[6px] pt-[6px] ml-[12px]">
        {text}
      </div>
    </div>
  );
};

export default SentChat;
