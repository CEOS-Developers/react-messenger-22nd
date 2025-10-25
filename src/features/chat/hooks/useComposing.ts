import { useCallback, useState } from 'react';
export function useComposing() {
  const [isComposing, set] = useState(false);
  const onCompositionStart = useCallback(() => set(true), []);
  const onCompositionEnd = useCallback(() => set(false), []);
  return { isComposing, onCompositionStart, onCompositionEnd };
}
