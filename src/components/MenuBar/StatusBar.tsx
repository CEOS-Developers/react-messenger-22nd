import useCurrentTime from '@/hooks/useCurrentTime';
import Battery from '@/assets/svgs/statusbar/battery.svg';
import Internet from '@/assets/svgs/statusbar/internet.svg';
import Wifi from '@/assets/svgs/statusbar/wifi.svg';

const StatusBar = () => {
  const time = useCurrentTime();
  const { hour, minute } = time;

  const formattedHour = hour.toString().padStart(2, '0');
  const formattedMinute = minute.toString().padStart(2, '0');

  return (
    <>
      <div className="box-border flex w-full flex-row justify-between p-[16px] pb-[14px]">
        <div className="items-center pl-[24px] font-black">
          <p>
            {formattedHour}:{formattedMinute}
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-[4px] pr-[16px]">
          <img src={Internet} alt="internet" className="h-[12.23px] w-[19.2px]" />
          <img src={Wifi} alt="wifi" className="h-[12.33px] w-[17.14px]" />
          <img src={Battery} alt="battery" className="h-[13px] w-[27.33px]" />
        </div>
      </div>
    </>
  );
};

export default StatusBar;
