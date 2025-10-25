import DropDown from '@/assets/svgs/drop-down/dropdown.svg';

interface DropDownToggleProps {
  isOpen?: boolean;
  onClick?: () => void;
}

const Dropdown = ({ isOpen = false, onClick }: DropDownToggleProps) => {
  return (
    <img
      src={DropDown}
      alt="드롭다운"
      onClick={onClick}
      className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'} cursor-pointer`}
    />
  );
};

export default Dropdown;
