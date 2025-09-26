export default function Header() {
  return (
    <header className="p-4 flex justify-between items-center pt-[env(safe-area-inset-top)]">
      <h1 className="text-headline-1 text-gray-800 !text-2xl">친구</h1>
      <div className="flex space-x-4 ">
        {[
          { src: "/images/magnifying.svg", alt: "검색" },
          { src: "/images/music.svg", alt: "뮤직" },
          { src: "/images/plusHuman.svg", alt: "친구추가" },
          { src: "/images/setting.svg", alt: "설정" },
        ].map((i) => (
          <button
            key={i.src}
            type="button"
            className="w-6 h-[24px] active:scale-95 transition"
          >
            <img
              src={i.src}
              alt={i.alt}
              className="w-5 h-5 pointer-events-none"
            />
          </button>
        ))}
      </div>
    </header>
  );
}
