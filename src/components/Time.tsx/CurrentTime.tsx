import { useEffect, useState } from 'react';

const CurrentTime = () => {
  const [year, setYear] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [day, setDay] = useState<number>(0);
  const [hour, setHour] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      setYear(now.getFullYear());
      setMonth(now.getMonth() + 1);
      setDay(now.getDate());
      setHour(now.getHours());
      setMinute(now.getMinutes());
      setSecond(now.getSeconds());
    };

    updateTime(); // 초깃값
    const interval = setInterval(updateTime, 1000); // 1초마다 업데이트

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
  }, []);

  return <></>;
};

export default CurrentTime;
