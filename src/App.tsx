import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Home from "@/pages/Home"
import ChatRoom from "@/pages/ChatRoom"
import Layout from "@/components/layout/Layout"

const App = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<ChatRoom />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App

