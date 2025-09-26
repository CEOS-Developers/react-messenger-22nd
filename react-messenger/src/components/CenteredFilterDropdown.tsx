// src/components/CenteredFilterDropdown.tsx
import React, { useEffect, useRef } from "react";
import { useFriends } from "../store/friendsStore";

/**
 * 헤더 중앙 고정 드롭다운
 * - 현재 선택된 컬렉션(activeCollection)을 표시
 * - 눌렀을 때 전체 컬렉션 목록을 펼쳐서 고를 수 있음
 */
export default function CenteredFilterDropdown() {
  const {
    collections,
    activeCollection,
    isDropdownOpen,
    loadCollections,
    setActiveCollection,
    toggleDropdown,
  } = useFriends();

  const btnRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // 최초 로드: public/data/collections.json 불러오기
  //   useEffect(() => {
  //     fetch("/data/collections.json")
  //       .then((r) => r.json())
  //       .then((items) => loadCollections(items))
  //       .catch(() => {
  //         // fallback
  //         loadCollections([
  //           { id: "all", label: "전체" },
  //           { id: "favorite", label: "즐겨찾기" },
  //           { id: "birthday", label: "생일" },
  //         ]);
  //       });
  //   }, [loadCollections]);

  useEffect(() => {
    const { loadCollections } = useFriends.getState();
    fetch("/data/collections.json")
      .then((r) => r.json())
      .then((items) => loadCollections(items))
      .catch(() =>
        loadCollections([
          { id: "all", label: "전체" },
          { id: "favorite", label: "즐겨찾기" },
          { id: "birthday", label: "생일" },
        ])
      );
  }, []); // 한 번만

  // 바깥 클릭 시 닫기
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!isDropdownOpen) return;
      const target = e.target as Node;
      if (
        btnRef.current?.contains(target) ||
        menuRef.current?.contains(target)
      ) {
        return;
      }
      toggleDropdown(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [isDropdownOpen, toggleDropdown]);

  const activeLabel =
    collections.find((c) => c.id === activeCollection)?.label ?? "전체";

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      {/* 버튼 */}
      <button
        ref={btnRef}
        type="button"
        onClick={() => toggleDropdown()}
        className="group inline-flex items-center gap-1 rounded-lg px-2 py-1 text-[15px] font-semibold hover:bg-gray-100"
        aria-haspopup="listbox"
        aria-expanded={isDropdownOpen}
      >
        <span className="truncate max-w-[140px]">{activeLabel}</span>
        <img
          src="/images/dropdown.svg"
          alt="chevron down"
          className={`h-4 w-4 transition-transform ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* 드롭다운 메뉴 */}
      {isDropdownOpen && (
        <div
          ref={menuRef}
          className="absolute left-1/2 z-20 mt-2 w-[200px] -translate-x-1/2 rounded-2xl border border-gray-200 bg-white p-1 shadow-lg"
          role="listbox"
        >
          <div className="max-h-[280px] overflow-y-auto py-1">
            {collections.map((c) => {
              const selected = c.id === activeCollection;
              return (
                <button
                  key={c.id}
                  role="option"
                  aria-selected={selected}
                  onClick={() => setActiveCollection(c.id)}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-[14px] ${
                    selected ? "bg-gray-100 font-semibold" : "hover:bg-gray-50"
                  }`}
                >
                  <span className="truncate">{c.label}</span>
                  {selected && (
                    <span className="text-[12px] text-gray-500">✓</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
