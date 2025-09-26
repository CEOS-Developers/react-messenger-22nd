import { useState } from "react";
import { DefaultFooter } from "./components/Footer/DefaultFooter";
import Header from "./components/Header";
import FriendsList from "./pages/FriendsList/FriendsList";

export default function App() {
  const [tab, setTab] = useState<
    "friends" | "chat" | "openchat" | "shopping" | "more"
  >("friends");

  return (
    <div className="mx-auto w-full max-w-[375px] min-h-screen bg-white border border-gray-400 box-border">
      {/* 본문 여백은 여기서만 */}
      <div className="!px-4">
        <Header />
        <div className="my-2 border-[0.5px] border-t border-gray-400" />
        {/* Divider */}
        <div className="-mx-4 w-[calc(100%+2rem)] border-t border-t-[0.5px] border-gray-400 border-solid" />
        <hr className="!mx-4 !my-4 h-px bg-gray-400 origin-top scale-y-10" />
        <main>
          <FriendsList />
        </main>
      </div>

      <DefaultFooter active={tab} onTab={setTab} />
    </div>
  );
}
