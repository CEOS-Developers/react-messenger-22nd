export function formatTodayMD(compact = false, tz = 'Asia/Seoul') {
    const d = new Date();

    const md = new Intl.DateTimeFormat('ko-KR', {
        timeZone: tz,
        month: 'long',
        day: 'numeric',
    }).format(d);

    //요일 표기
    const wd = new Intl.DateTimeFormat('ko-KR', {
        timeZone: tz,
        weekday: 'long', 
    }).format(d);

    const mdText = compact ? md.replace(/\s+/g, '') : md;
    return compact ? `${mdText}(${wd})` : `${mdText} ${wd}`;
}
