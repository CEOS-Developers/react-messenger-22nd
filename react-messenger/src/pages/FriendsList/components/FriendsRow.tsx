import type { User } from "@/types";
//import Avatar from "../../components/Avatar";

export default function FriendsRow({ f }: { f: User }) {
  return (
    <button
      className="flex w-full items-center !gap-3 !px-1 !py-1 hover:bg-gray-50"
      onClick={() => {}}
    >
      <div className="relative">
        {/* <Avatar src={f.avatar} alt={f.name} /> */}
        <img src="/images/avatar.svg" alt={f.name} />
        {/* 케이크 badge */}
        {/* {f.isBirthday && (
          <span className="absolute -right-1 -top-1 rounded-full bg-pink-500 px-1.5 py-0.5 text-[10px] font-semibold text-white shadow-sm">
            🎂
          </span>
        )} */}
      </div>
      <div className="min-w-0 flex-1 text-left">
        <p className="truncate text-[15px] font-medium leading-tight">
          {f.name}
        </p>
        <p className="truncate text-[12px] text-gray-500">{f.status || ""}</p>
      </div>
    </button>
  );
}
