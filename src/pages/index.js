import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 text-center p-6">
        <h1 className="text-5xl font-bold text-blue-800 mb-4">Buddy Support</h1>
        <p className="text-xl text-blue-700 mb-6">
          Helping students stay safe and supported
        </p>

        {/* Use Next.js Link here */}
        <Link href="/get-started">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </Link>
      </div>
    </main>
  );
}