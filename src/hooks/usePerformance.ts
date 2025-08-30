import { useEffect, useState } from "react";

export function usePerformance() {
  const [performance, setPerformance] = useState<{
    loadTime: number;
    renderTime: number;
  } | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const startTime = window.performance.now();

    const measurePerformance = () => {
      const endTime = window.performance.now();
      const loadTime = endTime - startTime;

      setPerformance({
        loadTime: Math.round(loadTime),
        renderTime: Math.round(loadTime),
      });
    };

    // 页面加载完成后测量性能
    if (document.readyState === "complete") {
      measurePerformance();
    } else {
      window.addEventListener("load", measurePerformance);
    }

    return () => {
      window.removeEventListener("load", measurePerformance);
    };
  }, []);

  return performance;
}
