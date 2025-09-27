// src/pages/ChatRoom.tsx
import { useParams, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

type Msg = {
  id: number;
  user: "me" | "other";
  text: string;
  date?: string;
  time?: string;
  name?: string;
  url?: string;
};

export default function ChatRoom() {
  const nav = useNavigate();
  const { roomId = "default" } = useParams();

  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [messages, setMessages] = useState<Msg[]>([
    { id: 1, user: "me", text: "오늘 강의 휴강 맞나요?", date: "2025.09.17", time: "오후 2:05" },
    { id: 2, user: "other", text: "넵 보강은 28일이에요!", time: "오후 2:05", name: "학생 34", url: "/icons/defaultProfile.svg",},
    { id: 3, user: "me", text: "감사합니다~", time: "오후 2:05" },
  ]);
  const listRef = useRef<HTMLDivElement>(null);

  // 첫 렌더링
  useEffect(() => {
    try {
      const saved = localStorage.getItem(`messages:${roomId}`);
      if (saved) setMessages(JSON.parse(saved));
    } catch (e) {
      console.warn("Failed to parse messages from localStorage:", e);
    }
  }, [roomId]);

  // 변경될 때마다
  useEffect(() => {
    try {
      localStorage.setItem(`messages:${roomId}`, JSON.stringify(messages));
    } catch (e) {
      console.warn("Failed to save messages to localStorage:", e);
    }
  }, [messages, roomId]);

  const send = () => {
    const v = input.trim();
    if (!v) return;
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const ampm = hour < 12 ? "오전" : "오후";
    const ampmHour = String(((hour + 11) % 12) + 1);
    const minPadding = String(min).padStart(2,"0");
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), user: "me", text: v, time: `${ampm} ${ampmHour}:${minPadding}` },
    ]);
    setInput("");
    if (inputRef.current) {
      inputRef.current.style.height = "44px";
    }
  };
  // 텍스트 크기 제한
  const onChangeInput = (v: string) => {
    setInput(v);
    if (!inputRef.current) return;
    inputRef.current.style.height = "auto";
    const maxH = 120;
    inputRef.current.style.height = Math.min(inputRef.current.scrollHeight, maxH) + "px";
  };

  // 새 메시지 들어오면 스크롤 하단
  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages.length]);

  return (
    <div className="h-full flex flex-col bg-white">
      {/* 상단 바 */}
      <header className="px-3 py-2 flex items-center gap-2 border-b border-gray-200">
        <button
          onClick={() => nav(-1)}
          className="p-2 -ml-2 rounded-full hover:bg-gray-100 active:bg-gray-200"
          aria-label="back"
        >
          <img src="/icons/leftDir.svg" alt="" className="w-5 h-5" />
        </button>
        <div className="text-[15px] font-semibold">3D 디자인 (1)</div>

        <div className="ml-auto">
          <button className="p-2 rounded-full hover:bg-gray-100 active:bg-gray-200">
            <img
              src="/icons/hamburger.svg"
              alt=""
              className="w-4 h-4 opacity-60"
              aria-label="menu"
              onClick={() => {
                /*menu open*/
              }}
            />
          </button>
        </div>
      </header>

      {/* 안내문 */}
      <div className="px-4 py-2 text-[11.5px] text-center text-gray-300 leading-snug">
        누구나 기분 좋게 참여할 수 있는 커뮤니티를 만들기 위해 커뮤니티 이용규칙을 준수해주세요.
        커뮤니티 이용규칙을 위반할 경우 서비스 이용이 제한될 수 있습니다.{" "}
        <button className="underline text-gray-300" onClick={() => {}}>
          커뮤니티 이용규칙 전체 보기
        </button>
      </div>

      {/* 메시지 리스트 */}
      <div ref={listRef} className="flex-1 overflow-y-auto px-3 py-1 space-y-4">
        {messages.map((m) => {
          const mine = m.user === "me";
          return (
            <div key={m.id}>
              {m.date && (
                <div className="my-2 grid place-items-center">
                  <span className="px-3 py-1 rounded-full bg-black text-white text-[11px]">
                    {m.date}
                  </span>
                </div>
              )}

              {/* 각 메시지 블럭 */}
              <div className={`flex ${mine ? "justify-end" : "justify-start"}`}>
                {/* 상대 메시지는 아바타+이름 렌더 */}
                {!mine && (
                  <div className="mr-2 shrink-0 flex items-start gap-2 translate-y-1 ">
                    <img
                      src={m.url || "/icons/defaultProfile.svg"}
                      alt={m.name || "상대"}
                      className="w-5.5 h-7 rounded-full "
                    />
                    <span className="mt-1 text-[10px] text-gray-500 max-w-[70px] truncate">
                      {m.name || "상대"}
                    </span>
                  </div>
                )}
              </div>
              {/* 말풍선 + 시간 */}
              <div className={`flex flex-col items-end gap-1 ${mine ? "flex-row-reverse" : "flex-row"}`}>
                {" "}
                <span
                  className={[
                    "inline-block",
                    "rounded-2xl px-3 py-2 text-[13px] leading-5",
                    "max-w-[230px]",
                    mine
                      ? "bg-white border border-gray-200 text-gray-800"
                      : "bg-gray-100 text-gray-700",
                  ].join(" ")}
                >
                  {m.text}
                </span>
                {m.time && <time className="text-[10px] text-gray-400 select-none">{m.time}</time>}
              </div>
            </div>
          );
        })}
      </div>

      {/* 입력창 + 전송 */}
      <div className="px-3 pb-3 pt-2">
        <div className="rounded-full border border-gray-300 bg-white flex items-center gap-2 px-2">
          {/* 플러스 버튼 */}
          <button
            className="p-2 rounded-full hover:bg-gray-100 active:bg-gray-200"
            aria-label="추가"
            onClick={() => {
              /* 파일/이모지 등 */
            }}
          >
            <img src="/icons/plus.svg" alt="" className="w-6 h-6 opacity-80" />
          </button>
          <textarea
            ref={inputRef}
            className="flex-1 min-w-0 resize-none outline-none text-[13px] leading-5 max-h-[120px]
                       py-3"
            placeholder="다른 수강생과 대화해보세요"
            value={input}
            rows={1}
            onChange={(e) => onChangeInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send();
              }
            }}
            style={{ height: "44px" }}
          />

          <button onClick={send} aria-label="보내기" className="active:bg-gray-200">
            <img src="/icons/send.svg" alt="send" className="w-8 h-8 " />
          </button>
        </div>
      </div>
    </div>
  );
}
