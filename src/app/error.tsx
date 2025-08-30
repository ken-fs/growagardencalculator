"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">出现错误</h2>
        <p className="text-gray-600 mb-6">
          抱歉，页面加载时出现了错误。请尝试刷新页面或返回首页。
        </p>
        <div className="space-x-4">
          <Button onClick={reset}>重试</Button>
          <Button
            variant="outline"
            onClick={() => (window.location.href = "/")}
          >
            返回首页
          </Button>
        </div>
      </div>
    </div>
  );
}
