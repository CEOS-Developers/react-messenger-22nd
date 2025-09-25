import React from 'react';
import type { Message, User } from '@/types/chat';

export default React.memo(function MessageItem({
  message,
  user,
  isMe,
}: {
  message: Message;
  user: User;
  isMe: boolean;
}) {
  return (
    <li className={`flex items-end gap-2 ${isMe ? 'justify-end' : ''}`}>
      {!isMe && <img src={user.avatarUrl} alt={user.name} className="h-8 w-8 rounded-full object-cover" />}

      <div className={`flex max-w-[72%] flex-col ${isMe ? 'items-end' : ''}`}>
        {!isMe && <div className="text-body2-medium mb-1 text-[color:var(--gray-600)]">{user.name}</div>}

        <div
          className={[
            'text-body1-regular rounded-2xl px-3 py-2 shadow',
            isMe
              ? 'rounded-br-bubble bg-[var(--green-300)] text-[color:var(--white)]'
              : 'rounded-bl-bubble bg-[var(--white)] text-[color:var(--black)]',
          ].join(' ')}
        >
          {message.kind === 'text' && <div className="break-words whitespace-pre-wrap">{message.text}</div>}
        </div>

        <div className="text-caption mt-1 text-[color:var(--gray-500)]">
          {new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>

      {isMe && <img src={user.avatarUrl} alt={user.name} className="h-8 w-8 rounded-full object-cover" />}
    </li>
  );
});
