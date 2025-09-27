import { useChatting } from "../../../store/chatStore";

export default function ChatInput() {
  const input = useChatting((s) => s.input);
  const setInput = useChatting((s) => s.setInput);
  const send = useChatting((s) => s.send);

  const disabled = input.trim().length === 0;

  return (
    // <div className="sticky bottom-0 z-10 flex items-center min-h-[62px] bg-transparent bg-white">
    //  <div className="mx-auto max-w-[375px] px-2">
    <div className="sticky bottom-0 z-10 w-full bg-white">
      <div className="mx-auto max-w-[375px] !px-2">
        <div className="flex items-center min-h-[62px] gap-3 px-3 py-2 pb-[calc(env(safe-area-inset-bottom))]">
          <button
            type="button"
            className="grid h-8 w-8 place-items-center rounded-full bg-gray-300 active:scale-95"
          >
            <img src="/images/addText.svg" />
          </button>

          <div className="flex-1 rounded-full bg-gray-200 !px-4 py-2">
            <input
              type="text"
              placeholder="메시지를 입력하세요"
              className="w-full min-h-[38px] bg-transparent text-body-2 text-gray-800 placeholder:text-gray-500 outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey && !disabled) {
                  e.preventDefault();
                  send();
                }
              }}
            />
          </div>

          <button
            type="button"
            onClick={send}
            disabled={disabled}
            className="grid h-8 w-8 place-items-center rounded-full bg-gray-200 active:scale-95 disabled:opacity-40"
          >
            <img src="/images/sendText.svg" />
          </button>
        </div>
      </div>
    </div>
  );
}
