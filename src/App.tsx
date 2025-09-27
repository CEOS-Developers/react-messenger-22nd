import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "@/pages/Home"
import ChatRoom from "@/pages/ChatRoom"
import Layout from "@/components/layout/Layout"
import ChatList from "@/pages/ChatList"

const App = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/chatlist" element={<ChatList />} />
            <Route path="/chatroom/:chatRoomId" element={<ChatRoom />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App

