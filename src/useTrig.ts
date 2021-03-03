import { useCallback, useEffect, useRef } from 'react';

interface TrigArgs { f: () => void, t: number };

export default function useTrig() {
  const timeouts = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    return () => timeouts.current.forEach(clearTimeout);
  }, []);

  const trig = useCallback((t: NodeJS.Timeout|NodeJS.Timeout[]|TrigArgs|TrigArgs[]) => {
    const values: (NodeJS.Timeout|TrigArgs)[] = Array.isArray(t) ? t: [t];
    const newTimeouts = values.map(v => 'f' in v ? setTimeout(v.f, v.t) : v);
    timeouts.current.push(...newTimeouts);
    return newTimeouts;
  },[]);

  return {
    trig,
  };
}