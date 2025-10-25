// src/components/dev/RouteProbe.tsx
import { useParams, useLocation } from 'react-router-dom';

export default function RouteProbe() {
  const p = useParams();
  const loc = useLocation();
  return (
    <div
      style={{
        position: 'fixed',
        top: 4,
        left: 4,
        zIndex: 9999,
        fontSize: 10,
        padding: '2px 4px',
        background: '#000',
        color: '#fff',
        opacity: 0.6,
        borderRadius: 3,
      }}
    >
      {loc.pathname} | chatId: {p.chatId ?? '(none)'}
    </div>
  );
}
