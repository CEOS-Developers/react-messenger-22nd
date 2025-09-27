import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import "dayjs/locale/ko";

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);
dayjs.locale("ko");

dayjs.updateLocale("ko", {
  relativeTime: {
    future: "%s 후",
    past: "%s 전",
    s: "몇 초",
    m: "1분",
    mm: "%d분",
    h: "1시간",
    hh: "%d시간",
    d: "하루",
    dd: "%d일",
    M: "한 달",
    MM: "%d달",
    y: "1년",
    yy: "%d년",
  },
});

export function toTimeLabel(ts: number): string {
  if (!ts) return "";
  const d = dayjs(ts);
  const now = dayjs();

  if (d.isSame(now, "day")) {
    return d.format("A h:mm"); //"오후 2:35"
  }
  if (d.isSame(now.subtract(1, "day"), "day")) {
    return "어제";
  }
  if (d.isSame(now, "year")) {
    return d.format("M/D"); // "9/27"
  }
  return d.format("YYYY.M.D"); //"2024.12.31"
}

export { dayjs };
