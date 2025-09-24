// src/App.tsx
export default function App() {
  return (
    <div className="grid min-h-screen place-items-center bg-white">
      {/* 고정 폭(반응형 제외), 중앙 정렬 컨테이너 */}
      <div className="flex h-screen w-full max-w-[420px] flex-col border bg-white">
        {/* 상단 헤더 */}
        <header className="flex h-12 items-center border-b px-4 font-semibold">react-messenger</header>

        {/* 본문(메시지 영역) */}
        <main className="min-h-0 flex-1 overflow-y-auto p-4">{/* TODO: <MessageList /> 붙일 자리 */}</main>

        {/* 하단 입력 영역 */}
        <footer className="border-t">{/* TODO: <MessageInput /> 붙일 자리 */}</footer>
      </div>
    </div>
  );
}
