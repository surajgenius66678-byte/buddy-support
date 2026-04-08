import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("buddySupportUser"));
    setUser(savedUser);
  }, []);

  if (!user) {
    return <h1 className="text-center mt-10">No user data found</h1>;
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6">Profile Details</h1>

        {Object.entries(user).map(([key, value]) => (
          <p key={key} className="mb-2">
            <strong>{key}:</strong> {value}
          </p>
        ))}
      </div>
    </main>
  );
}