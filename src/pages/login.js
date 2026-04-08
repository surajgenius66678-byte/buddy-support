import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("buddySupportUser"));

    if (!savedUser) {
      alert("No user found. Please signup first.");
      return;
    }

    const savedPhone =
      savedUser.parentPhone || savedUser.phoneNo;

    if (savedUser.name === name && savedPhone === phone) {
      alert("Login successful!");
      router.push("/profile");
    } else {
      alert("Invalid details");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md flex flex-col gap-4"
      >
        <h1 className="text-3xl font-bold text-center">Login</h1>

        <input
          type="text"
          placeholder="Enter Name"
          className="border p-3 rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Phone No"
          className="border p-3 rounded-lg"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-lg"
        >
          Login
        </button>
      </form>
    </main>
  );
}