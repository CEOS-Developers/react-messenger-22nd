import HeaderBar from '@/app/HeaderBar';
import StatusBar from '@/app/StatusBar';
import TabBar from '@/app/TabBar';
import { useChatState } from '@/context/ChatContext';
import { Link } from 'react-router-dom';

export default function Home() {
  const { users, meId } = useChatState();
  const me = users[meId!];
  const others = Object.values(users).filter((u) => u.id !== meId);

  return (
    <div className="flex h-full flex-col bg-[var(--gray-100)]">
      <StatusBar />
      <HeaderBar title="세오스" />
      <div className="flex-1 overflow-auto bg-[var(--gray-100)] p-3">
        {/* 내 프로필 */}
        <div className="rounded-card shadow-card flex items-center gap-3 bg-[var(--white)] p-3">
          <img src={me.avatarUrl} className="h-12 w-12 rounded-full object-cover" />
          <div>
            <div className="text-body1-medium">{me.name}</div>
            <div className="text-caption text-[color:var(--gray-600)]">레이블 위치</div>
          </div>
        </div>

        {/* 친구 섹션 */}
        <div className="rounded-card shadow-card mt-4 bg-[var(--white)]">
          {others.map((u) => (
            <Link
              key={u.id}
              to={`/profile/${u.id}`}
              className="flex items-center gap-3 border-b px-3 py-2 last:border-b-0"
            >
              <img src={u.avatarUrl} className="h-10 w-10 rounded-full object-cover" />
              <div className="text-body1-regular">{u.name}</div>
            </Link>
          ))}
        </div>
      </div>
      <TabBar />
    </div>
  );
}
