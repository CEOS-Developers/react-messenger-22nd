// src/pages/profile/ProfilePage.tsx
import { useParams } from "react-router-dom";
const ProfilePage = () => {
  const { userId } = useParams();
  return (
    <section className="p-4 space-y-3">
      <h1 className="text-lg font-semibold">프로필: {userId}</h1>
      <div className="rounded-xl border p-4">프로필 카드 / 액션</div>
    </section>
  );
};
export default ProfilePage;
