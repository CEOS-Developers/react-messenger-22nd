import useCurrentTime from '@/hooks/useCurrentTime';
import BatteryBlack from '@/assets/svgs/statusbar/battery-black.svg';
import BatteryWhite from '@/assets/svgs/statusbar/battery-white.svg';
import InternetBlack from '@/assets/svgs/statusbar/internet-black.svg';
import InternetWhite from '@/assets/svgs/statusbar/internet-white.svg';
import WifiBlack from '@/assets/svgs/statusbar/wifi-black.svg';
import WifiWhite from '@/assets/svgs/statusbar/wifi-white.svg';
import type { StatusBarProps } from '@/type/StatusBarType.types';

const StatusBar = ({ theme = 'white' }: StatusBarProps) => {
  const time = useCurrentTime();
  const { hour, minute } = time;

  const formattedHour = hour.toString().padStart(2, '0');
  const formattedMinute = minute.toString().padStart(2, '0');

  const icons = {
    internet: theme === 'brown' ? InternetWhite : InternetBlack,
    wifi: theme === 'brown' ? WifiWhite : WifiBlack,
    battery: theme === 'brown' ? BatteryWhite : BatteryBlack,
  };

  return (
    <>
      <div className="box-border flex w-full flex-row justify-between p-[16px] pb-[14px]">
        <div className={`items-center pl-[24px] font-black`}>
          <p className={theme === 'brown' ? 'text-white' : 'text-black'}>
            {formattedHour}:{formattedMinute}
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-[4px] pr-[16px]">
          <img src={icons.internet} alt="internet" className="h-[12.23px] w-[19.2px]" />
          <img src={icons.wifi} alt="wifi" className="h-[12.33px] w-[17.14px]" />
          <img src={icons.battery} alt="battery" className="h-[13px] w-[27.33px]" />
        </div>
      </div>
    </>
  );
};

export default StatusBar;
