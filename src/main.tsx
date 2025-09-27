import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Tailwind CSS
import ChatPage from './pages/ChatPage';
import App from './App';

import ChatHeader from './components/chat/ChatHeader';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ChatPage />
    </StrictMode>
)
