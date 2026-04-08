import { useRouter } from "next/router";

export default function CurrentTask() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-r from-pink-100 via-blue-100 to-green-100 p-8">
      <nav className="w-full bg-white shadow-lg px-8 py-5 flex items-center justify-between mb-8">
        <div className="text-4xl font-extrabold text-blue-700">Buddy Support</div>
        <button
          onClick={() => router.push("/student/dashboard")}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl text-xl font-semibold hover:bg-blue-700"
        >
          Back to Dashboard
        </button>
      </nav>

      <div className="bg-white rounded-3xl shadow-xl p-10">
        <h1 className="text-4xl font-bold text-pink-700 mb-4">Current Task</h1>
        <p className="text-xl text-gray-700">
          Your current question or test will appear here.
        </p>
      </div>
    </main>
  );
}