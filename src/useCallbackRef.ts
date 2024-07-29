import { useEffect, useMemo, useRef } from 'react';

export function useCallbackRef<T extends (...args: any[]) => any>(callback: T | undefined): T {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return useMemo(() => {
    const fn = (...args: Parameters<T>): ReturnType<T> => {
      return callbackRef.current?.(...args);
    };
    return fn as T;
  }, []);
}
