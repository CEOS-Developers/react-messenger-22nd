import { Outlet } from "react-router-dom";
import { DefaultFooter } from "../components/Footer/DefaultFooter";
import { useState } from "react";
import ChattingListHeader from "@/pages/ChattingList/Components/ChattingListHeader";

export default function ChattingListLayout() {
  const [tab, setTab] = useState<
    "friends" | "chat" | "openchat" | "shopping" | "more"
  >("chat");
  return (
    <div className="w-full h-full">
      <div className="!px-4">
        <ChattingListHeader />

        <main>
          <Outlet />
        </main>
      </div>

      <DefaultFooter active={tab} onTab={setTab} />
    </div>
  );
}
