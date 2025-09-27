import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const ChatsList = lazy(() => import("../pages/ChatListPage"));
const ChatRoom = lazy(() => import("../pages/ChatRoom"));

export const chatRoutes: RouteObject[] = [
  { path: "/chats", element: <ChatsList /> },
  { path: "/chats/:id", element: <ChatRoom /> },
];
