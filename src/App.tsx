import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "@/pages/Home"
import ChatRoom from "@/pages/ChatRoom"
import Layout from "@/components/layout/Layout"

const App = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/home" element={<Home />} />
            <Route path="/chatroom/:chatRoomId" element={<ChatRoom />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App

