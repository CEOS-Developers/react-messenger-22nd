import { Outlet } from "react-router-dom";
import ProfileHeader from "../pages/Profile/components/ProfileHeader";
import ProfileFooter from "../pages/Profile/components/ProfileFooter";

export default function ProfileLayout() {
  return (
    <div className="w-full h-full bg-yellow-300">
      <div className="!px-4">
        <ProfileHeader />

        <main>
          <Outlet />
        </main>
      </div>

      <ProfileFooter />
    </div>
  );
}
