import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function SignupDetails() {
  const [role, setRole] = useState(null); // store role
  const [formData, setFormData] = useState({});
  const router = useRouter();

  // Only set role on client
  useEffect(() => {
    if (router.isReady) {
      setRole(router.query.role || null);
    }
  }, [router.isReady, router.query.role]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
  };

  // If role is not ready yet (during SSR), show loading
  if (!role) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-bold">Loading...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-10">
      <h1 className="text-4xl font-bold mb-6 text-white">
        {role === "Student" ? "Student Registration" : "Admin Registration"}
      </h1>

      <form
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        {role === "Student" ? (
          <>
            <input
              type="text"
              name="studentName"
              placeholder="Your Name"
              className="border p-3 rounded-lg"
              onChange={handleChange}
            />
            <input
              type="text"
              name="familyDetails"
              placeholder="Family Details"
              className="border p-3 rounded-lg"
              onChange={handleChange}
            />
            <input
              type="text"
              name="schoolName"
              placeholder="School Name"
              className="border p-3 rounded-lg"
              onChange={handleChange}
            />
            <input
              type="text"
              name="grade"
              placeholder="Grade/Class"
              className="border p-3 rounded-lg"
              onChange={handleChange}
            />
          </>
        ) : (
          <>
            <input
              type="text"
              name="adminName"
              placeholder="Admin Name"
              className="border p-3 rounded-lg"
              onChange={handleChange}
            />
            <input
              type="text"
              name="schoolName"
              placeholder="School Name"
              className="border p-3 rounded-lg"
              onChange={handleChange}
            />
            <input
              type="text"
              name="teacherId"
              placeholder="Teacher ID"
              className="border p-3 rounded-lg"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border p-3 rounded-lg"
              onChange={handleChange}
            />
          </>
        )}

        <button
          type="submit"
          className="bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition mt-4 text-xl"
        >
          Submit
        </button>
      </form>
    </main>
  );
}