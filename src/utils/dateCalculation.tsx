

export function formatTodayMD(compact = false, tz = 'Asia/Seoul') {
    const s = new Intl.DateTimeFormat('ko-KR', { timeZone: tz, month: 'long', day: 'numeric' })
        .format(new Date());              // 예: "9월 24일"
    return compact ? s.replace(/\s+/g, '') : s;
}