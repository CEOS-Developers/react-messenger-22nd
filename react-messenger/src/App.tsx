// import { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import { DefaultFooter } from "./components/Footer/DefaultFooter";
// import Header from "./components/Header";
// import FriendsList from "./pages/FriendsList/FriendsList";
// import Profile from "./pages/Profile/Profile";

// export default function App() {
//   const [tab, setTab] = useState<
//     "friends" | "chat" | "openchat" | "shopping" | "more"
//   >("friends");

//   return (
//     <div className="mx-auto w-full max-w-[375px] min-h-screen bg-white">
//       <div className="!px-4">
//         <Header />

//         <hr className="!mx-4 !my-4 h-px bg-gray-400 origin-top scale-y-10" />
//         <main>
//           <FriendsList />
//           <Profile />
//         </main>
//       </div>

//       <DefaultFooter active={tab} onTab={setTab} />
//     </div>
//   );
// }

import { Routes, Route } from "react-router-dom";
import FriendsLayout from "./layouts/FriendListLayout";
import ProfileLayout from "./layouts/ProfileLayout";

import FriendsList from "./pages/FriendsList/FriendsList";
import Profile from "./pages/Profile/Profile";

export default function App() {
  return (
    <div className="mx-auto w-full max-w-[375px] min-h-screen bg-white border border-gray-400 box-border">
      <Routes>
        <Route element={<FriendsLayout />}>
          <Route path="/" element={<FriendsList />} />
        </Route>

        <Route element={<ProfileLayout />}>
          <Route path="/profile/:name?" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}
