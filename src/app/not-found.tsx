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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            Sorry, the page you are looking for does not exist or has been
            moved.
          </p>
        </div>

        <div className="space-y-4">
          <Link href="/">
            <Button size="lg" className="mr-4">
              Back to Home
            </Button>
          </Link>
          <Link href="/trade">
            <Button variant="outline" size="lg">
              Trade Analyzer
            </Button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/mutations"
            className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-gray-900 mb-2">Mutation Wiki</h3>
            <p className="text-gray-600 text-sm">
              View all mutation information
            </p>
          </Link>
          <Link
            href="/crops"
            className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-gray-900 mb-2">Crop Wiki</h3>
            <p className="text-gray-600 text-sm">View all crop information</p>
          </Link>
          <Link
            href="/pets-wiki"
            className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-gray-900 mb-2">Pet Wiki</h3>
            <p className="text-gray-600 text-sm">View all pet information</p>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
