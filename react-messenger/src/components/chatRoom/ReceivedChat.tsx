import ProfileIcon from "../../assets/icons/ContactAction/ProfileIcon";

interface RecievedChatProps {
  text: string;
  time?: string;
}

const RecievedChat = ({ text, time }: RecievedChatProps) => {
  return (
    <div className="flex flex-row items-end w-full mt-[8px]">
      <ProfileIcon className="w-[24px] h-[24px]" />
      <div className="body-1 rounded-[16px] bg-[#EFEFF3] text-gray-800 w-auto max-w-[251px] h-auto min-h-[34px] max-h-[346px] pr-[12px] pl-[12px] pb-[6px] pt-[6px] ml-[12px]">
        {text}
      </div>
      <div>
        {time && (
          <span className="bottom-0 ml-[8px] right-[-40px] body-3 text-gray-300">
            {time}
          </span>
        )}
      </div>
    </div>
  );
};

export default RecievedChat;
