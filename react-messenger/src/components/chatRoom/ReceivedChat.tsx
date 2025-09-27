import ProfileIcon from "../../assets/icons/ContactAction/ProfileIcon";

interface RecievedChatProps {
  text: string;
}

const RecievedChat = ({ text }: RecievedChatProps) => {
  return (
    <div className="flex flex-row items-end w-full mt-[8px]">
      <ProfileIcon className="w-[24px] h-[24px]" />
      <div className="body-1 rounded-[16px] bg-[#EFEFF3] w-auto max-w-[251px] h-auto min-h-[34px] max-h-[346px] pr-[12px] pl-[12px] pb-[6px] pt-[6px] ml-[12px]">
        {text}
      </div>
    </div>
  );
};

export default RecievedChat;
