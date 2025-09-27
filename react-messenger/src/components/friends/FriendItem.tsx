import React from "react";
import type { Friend } from "../../types/friend";

type Props = {
  data: Friend;
};

const Avatar: React.FC<{ src?: string; alt: string }> = ({ src, alt }) => (
  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
    {src ? (
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    ) : (
      <div className="w-full h-full grid place-items-center text-gray-400">
        👤
      </div>
    )}
  </div>
);

export const FriendItem: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full flex items-center gap-3 px-4 py-3">
      <Avatar src={data.profileImage} alt={data.name} />
      <div className="flex-1 min-w-0">
        <p className="text-[15px] leading-tight text-gray-900 truncate">
          {data.name}
        </p>
        {data.statusMessage && (
          <p className="text-[12px] text-gray-500 truncate mt-0.5">
            {data.statusMessage}
          </p>
        )}
        {data.profileMusic && (
          <p className="text-[12px] text-green-600 truncate mt-0.5">
            🎵 {data.profileMusic}
          </p>
        )}
      </div>
      {data.favorite && <span className="text-yellow-400">★</span>}
    </div>
  );
};
