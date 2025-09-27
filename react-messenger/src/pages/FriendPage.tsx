import React, { useEffect, useState } from "react";
import type { Friend } from "../types/friend";
import { FriendItem } from "../components/friends/FriendItem";
import Header from "../components/layout/Header";

const FriendsPage: React.FC = () => {
  const [friends, setFriends] = useState<Friend[]>([]);

  // JSON 불러오기
  useEffect(() => {
    fetch("/data/userList.json") // 슬래시(/) 시작
      .then((res) => res.json())
      .then((data: Friend[]) => setFriends(data))
      .catch((err) => console.error("친구 목록 로드 실패:", err));
  }, []);

  return (
    <div className="mx-auto w-[375px] h-[812px] bg-white flex flex-col">
      {/* 헤더 */}
      <Header title="친구" />

      {/* 친구 리스트 */}
      <div className="flex-1 overflow-y-auto">
        <div className="w-[343px] mx-auto ">
          {friends.map((f, index) => (
            <FriendItem key={index} data={f} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendsPage;
