import { useState, useEffect, useRef } from 'react';

const useObserver = (options: any) => {
  const [elements, setElements] = useState<Element[]>([]);
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((observedEntries: IntersectionObserverEntry[]) => {
      setEntries(observedEntries);
    }, options);

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [options]);

  useEffect(() => {
    const currentObserver = observerRef.current;
    currentObserver?.disconnect();

    if (elements.length > 0) {
      elements.forEach((element) => currentObserver?.observe(element));
    }

    return () => {
      currentObserver?.disconnect();
    };
  }, [elements]);

  return { setElements, entries };
};

export default useObserver;
