import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in the viewport.
 * Pass an array of element IDs to observe.
 * Returns the ID of the most visible section (topmost in viewport).
 */
export function useScrollSpy(ids: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (ids.length === 0) return;

    const visibleMap = new Map<string, IntersectionObserverEntry>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibleMap.set(entry.target.id, entry);
        }

        // Find the topmost visible section
        let best: string | null = null;
        let bestTop = Infinity;

        ids.forEach((id) => {
          const entry = visibleMap.get(`section-${id}`) ?? visibleMap.get(id);
          if (entry && entry.isIntersecting && entry.boundingClientRect.top < bestTop) {
            bestTop = entry.boundingClientRect.top;
            best = entry.target.id;
          }
        });

        if (best) {
          setActiveId(best);
        }
      },
      { rootMargin: "-10% 0px -60% 0px", threshold: 0 },
    );

    const elements: Element[] = [];
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        elements.push(el);
      }
    }

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
