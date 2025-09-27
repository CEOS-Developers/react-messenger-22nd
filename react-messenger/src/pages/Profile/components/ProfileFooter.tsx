type ActiveKey = "selfchat" | "edit" | "pung";

export default function ProfileFooter({
  active,
  onTab,
}: {
  active?: ActiveKey;
  onTab?: (key: ActiveKey) => void;
}) {
  const tabs: { key: ActiveKey; src: string; alt: string }[] = [
    {
      key: "selfchat",
      src: "/images/profile/profileChatting.svg",
      alt: "나와의 채팅",
    },
    { key: "edit", src: "/images/profile/profileEdit.svg", alt: "프로필 편집" },
    { key: "pung", src: "/images/profile/profilePung.svg", alt: "펑 보관함" },
  ];

  return (
    <nav className="sticky bottom-0 w-[375px] bg-transparent">
      <div className="rounded-t-[16px] bg-yellow-800">
        <div className="h-[108px] !px-[50px] !pt-7 pb-[env(safe-area-inset-bottom)]">
          <div className="grid grid-cols-3 h-14 w-full place-items-center">
            {tabs.map((t) => {
              //const isActive = t.key === active;
              return (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => onTab?.(t.key)}
                  className={[
                    "w-[64px] h-[58px]",
                    "active:scale-95 transition",
                  ].join(" ")}
                >
                  <img
                    src={t.src}
                    alt={t.alt}
                    className="pointer-events-none opacity-100"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
