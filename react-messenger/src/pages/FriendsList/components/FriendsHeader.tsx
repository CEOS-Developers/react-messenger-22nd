import { useFriends } from "../../../store/friendsStore";

export default function FriendsHeader({
  title,
  count,
  collapsibleKey,
}: {
  title: string;
  count?: number;
  collapsibleKey?: string;
}) {
  const collapsed = useFriends((s) => s.collapsed);
  const toggleCollapsed = useFriends((s) => s.toggleCollapsed);
  const isCollapsed = collapsibleKey ? !!collapsed[collapsibleKey] : false;

  return (
    <button
      onClick={() => collapsibleKey && toggleCollapsed(collapsibleKey)}
      className="flex w-full items-center justify-between !pb-1 !pt-1 text-sm text-gray-500"
    >
      <span className="flex items-center gap-1 text-body-6 text-gray-600">
        {title}
        {typeof count === "number" && (
          <span className="text-gray-600">{count}</span>
        )}
      </span>
      {collapsibleKey && (
        <img
          src="/images/dropdown.svg"
          alt="chevron down"
          className={`h-4 w-4 text-gray-400 transition-transform ${
            isCollapsed ? "rotate-180" : ""
          }`}
        />
      )}
    </button>
  );
}
