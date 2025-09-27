// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// 👇 실제 프로젝트의 Provider 이름/경로에 맞춰 주세요.
import { ChatProvider } from '@/context/ChatContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChatProvider>
      <App />
    </ChatProvider>
  </React.StrictMode>,
);
