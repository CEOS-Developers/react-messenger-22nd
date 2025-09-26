import { useState } from "react";
import { DefaultFooter } from "./components/Footer/DefaultFooter";
import Header from "./components/Header";

export default function App() {
  const [tab, setTab] = useState<
    "friends" | "chat" | "openchat" | "shopping" | "more"
  >("friends");

  return (
    <div className="mx-auto w-[375px] min-h-screen bg-white border border-gray-200">
      <Header />
      <div className="divider" />

      <main>
        {/* <Friends /> */}

        {/* <ChatRoom /> */}
      </main>

      {/* Tab bar */}
      <DefaultFooter active={tab} onTab={setTab} />
    </div>
  );
}
