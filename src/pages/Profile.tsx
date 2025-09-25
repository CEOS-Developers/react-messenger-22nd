import StatusBar from '@/app/StatusBar';
import { useParams, useNavigate } from 'react-router-dom';
import { useChatState } from '@/context/ChatContext';
import { Icon } from '@/components/Icon';
import { Link } from 'react-router-dom';

export default function Profile() {
  const { id = '' } = useParams();
  const nav = useNavigate();
  const { users, conversations } = useChatState();
  const u = users[id];

  // 해당 유저와 1:1 대화가 있으면 연결, 없으면 아무거나 사용(데모)
  const chat = Object.values(conversations).find((c) => c.participantIds.includes(id));

  if (!u) return null;

  return (
    <div className="flex h-full flex-col bg-[var(--gray-100)]">
      <StatusBar />
      <header className="flex h-12 items-center gap-2 border-b bg-[var(--white)] px-3">
        <button onClick={() => nav(-1)}>
          <Icon name="chevron-left" className="h-5 w-5" />
        </button>
        <h1 className="text-title-2">{u.name}</h1>
      </header>

      <div className="relative flex-1">
        <div className="absolute inset-0 bg-[url('/wallpapers/paw.png')] bg-cover opacity-60" />
        <div className="relative z-10 grid h-full place-items-center">
          <div className="flex flex-col items-center gap-4">
            <img src={u.avatarUrl} className="shadow-card h-24 w-24 rounded-2xl object-cover" />
            <div className="text-title-2">{u.name}</div>
            {chat && (
              <Link
                to={`/chats/${chat.id}`}
                className="text-body1-medium rounded-full bg-[var(--green-300)] px-4 py-2 text-[color:var(--white)]"
              >
                메시지 보내기
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
