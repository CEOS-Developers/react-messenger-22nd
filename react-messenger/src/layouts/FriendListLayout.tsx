import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { DefaultFooter } from "../components/Footer/DefaultFooter";
import { useState } from "react";

export default function FriendListLayout() {
  const [tab, setTab] = useState<
    "friends" | "chat" | "openchat" | "shopping" | "more"
  >("friends");
  return (
    <div className="w-full h-full">
      <div className="!px-4">
        <Header />

        {/* <hr className="!mx-4 !my-4 h-px bg-gray-400 origin-top scale-y-10" /> */}

        <main>
          <Outlet />
        </main>
      </div>

      <DefaultFooter active={tab} onTab={setTab} />
    </div>
  );
}
