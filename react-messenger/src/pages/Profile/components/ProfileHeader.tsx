import { useNavigate } from "react-router-dom";

export default function ProfileHeader() {
  const nav = useNavigate();
  return (
    <header className="relative flex items-center justify-between px-0 py-3 pt-[env(safe-area-inset-top)]">
      <button
        type="button"
        onClick={() => nav(-1)}
        className="w-8 h-8 grid place-items-center active:scale-95 rounded"
        title="뒤로"
      >
        <img
          src="/images/profile/profileLeftArrow.svg"
          alt=""
          className="w-5 h-5"
        />
      </button>

      <div className="flex items-center gap-2">
        <button
          type="button"
          className="w-8 h-8 grid place-items-center active:scale-95 rounded"
          aria-label="설정"
          title="설정"
        >
          <img src="/images/setting.svg" alt="" className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
