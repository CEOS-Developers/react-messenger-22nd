import Battery from '@/assets/svgs/statusbar/battery.svg';
import Internet from '@/assets/svgs/statusbar/internet.svg';
import Wifi from '@/assets/svgs/statusbar/wifi.svg';

const StatusBar = () => {
  return (
    <>
      <div className="box-border flex flex-row justify-between p-[20px]">
        <div className="items-center pl-[16px]">
          <p>9:12</p>
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
