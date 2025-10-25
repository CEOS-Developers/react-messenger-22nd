import { useEffect } from 'react';

/** 어떤 HTMLElement든 받을 수 있고, 항상 null 가능(ref는 기본이 null) */
export function useAutoScroll<T extends HTMLElement>(dep: unknown, ref: React.RefObject<T | null>) {
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [dep, ref]);
}
