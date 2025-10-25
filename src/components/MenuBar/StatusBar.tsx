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
      <div className="box-border flex w-full flex-row justify-between p-4 pb-3.5">
        <div className={`items-center pl-6 text-[17px] font-medium`}>
          <p className={theme === 'brown' ? 'text-white' : 'text-black'}>
            {formattedHour}:{formattedMinute}
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-1 pr-2.5">
          <img src={icons.internet} alt="internet" className="h-3.075 w-4.8" />
          <img src={icons.wifi} alt="wifi" className="h-3.0825 w-4.285" />
          <img src={icons.battery} alt="battery" className="w-6.8325 h-3.25" />
        </div>
      </div>
    </>
  );
};

export default StatusBar;
