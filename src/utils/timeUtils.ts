export const formatTimeAMPM = (dateStr: string) => {
  const date = new Date(dateStr);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? '오후' : '오전';
  const hour12 = hours % 12 === 0 ? 12 : hours % 12;
  const minStr = minutes.toString().padStart(2, '0');
  return `${ampm} ${hour12}:${minStr}`;
};
