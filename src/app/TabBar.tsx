import { NavLink } from 'react-router-dom';
import { Icon } from '@/components/Icon';

const tab = 'flex flex-col items-center justify-center gap-1 flex-1 py-2 text-caption';

export default function TabBar() {
  return (
    <nav className="grid h-12 grid-cols-4 border-t bg-[var(--white)]">
      <NavLink to="/" className={({ isActive }) => `${tab} ${isActive ? 'text-[color:var(--green-300)]' : ''}`}>
        <Icon name="home" className="h-5 w-5" />
        <span>홈</span>
      </NavLink>
      <NavLink to="/chats" className={({ isActive }) => `${tab} ${isActive ? 'text-[color:var(--green-300)]' : ''}`}>
        <Icon name="chat" className="h-5 w-5" />
        <span>대화</span>
      </NavLink>
      <div className={`${tab} opacity-40`}>
        <Icon name="call" className="h-5 w-5" />
        <span>통화</span>
      </div>
      <div className={`${tab} opacity-40`}>
        <Icon name="setting" className="h-5 w-5" />
        <span>설정</span>
      </div>
    </nav>
  );
}
