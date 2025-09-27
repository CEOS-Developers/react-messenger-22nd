import { useEffect, useState } from 'react';
import { formatTodayMD } from '@/utils/dateCalculation';


export function useTodayMD(compact = false, tz = 'Asia/Seoul') {
    const [text, setText] = useState(() => formatTodayMD(compact, tz));
    useEffect(() => {
        // 1시간마다 체크해서 날짜 바뀌면 갱신 (임의)
        const id = setInterval(() => setText(formatTodayMD(compact, tz)), 60_000);
        return () => clearInterval(id);
    }, [compact, tz]);
    return text;
}