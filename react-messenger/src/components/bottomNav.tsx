// src/components/BottomNav.tsx
import { NavLink } from "react-router-dom";

const items = [
  { to: "/home", label: "홈", icon: "/icons/Home.svg", iconActive: "/icons/activeHome.svg" },
  {
    to: "/timetable",
    label: "시간표",
    icon: "/icons/TimeTable.svg",
    iconActive: "/icons/activeTimeTable.svg",
  },
  {
    to: "/chat",
    label: "채팅",
    icon: "/icons/Chatting.svg",
    iconActive: "/icons/activeChatting.svg",
  },
  { to: "/board", label: "게시판", icon: "/icons/Board.svg", iconActive: "/icons/activeBoard.svg" },
  {
    to: "/benefit",
    label: "혜택",
    icon: "/icons/Benefit.svg",
    iconActive: "/icons/activeBenefit.svg",
  },
];

export default function BottomNav() {
  return (
    <nav className="absolute bottom-0 left-0 right-0 bg-white/95 border-t border-gray-200">
      <ul className="flex justify-around items-center h-16">
        {items.map((it) => (
          <li key={it.to}>
            <NavLink
              to={it.to}
              className={({ isActive }) =>
                `flex flex-col items-center ${isActive ? "text-black" : "text-gray-400"}`
              }
            >
              {({ isActive }) => (
                <>
                  <img
                    src={isActive ? it.iconActive : it.icon}
                    alt={it.label}
                    className="w-6 h-6 mb-1"
                  />
                  <span className="text-[11px]">{it.label}</span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
