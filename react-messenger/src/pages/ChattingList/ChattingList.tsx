// import React, { useEffect, useMemo, useRef } from "react";
// import { useChat } from "../../store/chatListStore";
// import ChatRow from "./Components/ChatRow";

// export default function ChattingList() {
//   //   const init = useChat((s) => s.init);
//   //   const previews = useChat((s) => s.previews);

//   //   useEffect(() => {
//   //     init();
//   //   }, [init]);

//   const { init, data, loading, error } = useChat((s) => ({
//     init: s.init,
//     data: s.previews(),
//     loading: s.loading,
//     error: s.error,
//   }));

//   useEffect(() => {
//     init();
//   }, []);

//   //const data = useMemo(() => previews(), [previews]);

//   return (
//     <div className="mx-auto min-h-screen w-[375px] select-none border border-gray-200 bg-white">
//       <main className="divide-y divide-gray-200">
//         {data.map((p) => {
//           console.log(p);

//           return <ChatRow key={p.roomId} item={p} />;
//         })}
//       </main>
//     </div>
//   );
// }
import React, { useEffect, useMemo, useRef } from "react";
import { useChat } from "../../store/chatListStore";
import ChatRow from "./Components/ChatRow";
//import { shallow } from "zustand/shallow";

export default function ChattingList() {
  const init = useChat((s) => s.init);
  const loading = useChat((s) => s.loading);
  const error = useChat((s) => s.error);

  const rooms = useChat((s) => s.rooms);
  const messagesByRoom = useChat((s) => s.messagesByRoom);
  const previewsFn = useChat((s) => s.previews);

  // StrictMode 이중 호출 방지
  const called = useRef(false);
  useEffect(() => {
    if (called.current) return;
    called.current = true;
    init();
  }, [init]);

  const data = useMemo(() => {
    return previewsFn(); // 내부에서 rooms/messagesByRoom을 읽음
  }, [previewsFn, rooms, messagesByRoom]);

  if (loading) {
    return (
      <div className="mx-auto min-h-screen w-[375px] border border-gray-200 bg-white">
        <main className="divide-y divide-gray-200">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-3">
              <div className="h-12 w-12 rounded-xl bg-gray-200 animate-pulse" />
              <div className="flex-1 space-y-2">
                <div className="h-3 w-1/3 bg-gray-200 animate-pulse rounded" />
                <div className="h-3 w-2/3 bg-gray-200 animate-pulse rounded" />
              </div>
              <div className="h-3 w-8 bg-gray-200 animate-pulse rounded" />
            </div>
          ))}
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto min-h-screen w-[375px] border border-gray-200 bg-white">
        <p className="p-4 text-red-600 text-sm">로드 에러: {error}</p>
      </div>
    );
  }

  return (
    <div className="mx-auto min-h-screen select-none">
      <main className="divide-y divide-gray-200">
        {data.map((p) => (
          <ChatRow key={p.roomId} item={p} />
        ))}
      </main>
    </div>
  );
}
