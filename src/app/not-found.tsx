import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">页面未找到</h2>
          <p className="text-gray-600 mb-8">
            抱歉，您访问的页面不存在或已被移动。
          </p>
        </div>

        <div className="space-y-4">
          <Link href="/">
            <Button size="lg" className="mr-4">
              返回首页
            </Button>
          </Link>
          <Link href="/trade">
            <Button variant="outline" size="lg">
              交易分析器
            </Button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/mutations"
            className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-gray-900 mb-2">突变百科</h3>
            <p className="text-gray-600 text-sm">查看所有突变信息</p>
          </Link>
          <Link
            href="/crops"
            className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-gray-900 mb-2">作物百科</h3>
            <p className="text-gray-600 text-sm">查看所有作物信息</p>
          </Link>
          <Link
            href="/pets-wiki"
            className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-gray-900 mb-2">宠物百科</h3>
            <p className="text-gray-600 text-sm">查看所有宠物信息</p>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
