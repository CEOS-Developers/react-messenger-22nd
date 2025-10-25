import { useEffect, useState } from 'react';

const useCurrentTime = () => {
  const [time, setTime] = useState({
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime({
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        day: now.getDate(),
        hour: now.getHours(),
        minute: now.getMinutes(),
        second: now.getSeconds(),
      });
    };

    updateTime(); // 초깃값
    const interval = setInterval(updateTime, 1000); // 1초마다 업데이트

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
  }, []);

  return time;
};

export default useCurrentTime;
