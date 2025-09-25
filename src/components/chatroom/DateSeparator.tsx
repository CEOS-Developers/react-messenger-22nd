interface DateSeparatorProps {
  date: string; // "2025년 9월 9일" 형식
  isFirstMessage?: boolean; // 첫 메시지인지 여부
}

const DateSeparator = ({ date, isFirstMessage = false }: DateSeparatorProps) => {
  return (
    <div className={`flex justify-center items-center ${isFirstMessage ? 'mb-4' : 'mt-8 mb-4'}`}>
      <div 
        className="flex justify-center items-center px-3 py-[6px] rounded-[30px]"
        style={{
          background: 'rgba(255, 255, 255, 0.20)',
          gap: '10px'
        }}
      >
        <span className="text-caption2 text-green-5">
          {date}
        </span>
      </div>
    </div>
  );
};

export default DateSeparator;