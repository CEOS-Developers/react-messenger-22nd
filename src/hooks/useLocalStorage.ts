import { useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  // localStorage에서 값 읽기
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`로컬 스토리지 값 읽기 오류 "${key}":`, error);
      return initialValue;
    }
  });

  // 값 설정 함수
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`로컬 스토리지 값 설정 오류 "${key}":`, error);
    }
  };

  return [storedValue, setValue] as const;
}