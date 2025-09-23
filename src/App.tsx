import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "@/pages/Home"
import ChatRoom from "@/pages/ChatRoom"

const App = () => {

  return (
    <div className="min-h-screen bg-[##F5F5F5] flex justify-center">
      <div className="w-[375px] min-h-screen bg-white shadow-2xl">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chatroom" element={<ChatRoom />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App

