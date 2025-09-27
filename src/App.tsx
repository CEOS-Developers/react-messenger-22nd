import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ChatScreen from '@/components/chat/ChatScreen';
import MobileFrame from '@/layouts/MobileFrame';
import ErrorBoundary from '@/components/dev/ErrorBoundary'; // 선택(있으면 사용)

export default function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Navigate to="/chat/ceos-22" replace />} />
          <Route
            path="/chat/:chatId"
            element={
              <MobileFrame>
                <ChatScreen />
              </MobileFrame>
            }
          />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
