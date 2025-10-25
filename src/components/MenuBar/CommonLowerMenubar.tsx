import { menuItems, type MenuItem } from '@/constants/BottomMenubarItems';

interface Props {
  active: number;
  setActive: (id: number) => void;
}

const CommonLowerMenubar = ({ active, setActive }: Props) => {
  return (
    <div className="mt-2.5 mb-5 flex justify-between px-7.5">
      {menuItems.map((item: MenuItem) => {
        let iconSrc = item.icon || item.inactiveIcon;
        if (item.activeIcon && item.inactiveIcon) {
          iconSrc = active === item.id ? item.activeIcon : item.inactiveIcon;
        }

        return (
          <div key={item.id} onClick={() => setActive(item.id)} className="cursor-pointer text-center">
            <img src={iconSrc} alt={item.label} className="mx-auto h-6 w-6" />
            <span
              className={`caption2-reg ${
                item.activeIcon && item.inactiveIcon && active === item.id ? 'text-[#7F4C2F]' : 'text-[#BABCBE]'
              }`}
            >
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default CommonLowerMenubar;
