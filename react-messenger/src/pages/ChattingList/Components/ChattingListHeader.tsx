export default function ChattingListHeader() {
  return (
    <header className="!mx-2 !my-3 flex justify-between items-center pt-[env(safe-area-inset-top)]">
      <h1 className="text-headline-1 !font-semibold text-gray-800 !text-2xl">
        채팅
      </h1>
      <div className="flex gap-x-3 ">
        {[
          { src: "/images/magnifying.svg", alt: "검색" },
          { src: "/images/chatPlus.svg", alt: "채팅추가" },
          { src: "/images/setting.svg", alt: "설정" },
        ].map((i) => (
          <button
            key={i.src}
            type="button"
            className="w-6 h-[24px] active:scale-95 transition"
          >
            <img src={i.src} alt={i.alt} className="pointer-events-none" />
          </button>
        ))}
      </div>
    </header>
  );
}
