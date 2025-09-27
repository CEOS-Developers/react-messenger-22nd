// src/pages/Profile.tsx
import { useParams, Link } from 'react-router-dom';
import { useChatState } from '@/context/ChatContext';

export default function Profile() {
  const { chatId = '' } = useParams<{ chatId: string }>();
  const { conversations, users } = useChatState();
  const c = conversations[chatId];

  if (!c) return <div className="p-4">대화방을 찾을 수 없어요.</div>;

  // ✅ 항상 배열이 되도록 기본값 부여
  const participantIds = Array.isArray(c.participantIds) ? c.participantIds : [];

  const members = participantIds.map((id) => users[id]).filter((u): u is NonNullable<typeof u> => Boolean(u));

  return (
    <div className="p-4">
      <h1 className="text-title-2">{c.title}</h1>

      <ul className="mt-4 space-y-3">
        {members.map((u) => (
          <li key={u.id} className="flex items-center gap-3">
            <img src={u.avatarUrl ?? '/avatars/user.png'} className="h-10 w-10 rounded-lg object-cover" />
            <div className="text-body1-medium">{u.name}</div>
          </li>
        ))}
        {members.length === 0 && (
          <li className="text-body2-regular text-[color:var(--gray-600)]">참여자 정보가 없습니다.</li>
        )}
      </ul>

      <Link to={`/chat/${chatId}`} className="mt-6 inline-block text-[var(--green-400)]">
        대화로 돌아가기
      </Link>
    </div>
  );
}
