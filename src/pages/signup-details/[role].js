import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function SignupDetails() {
  const [role, setRole] = useState(null);
  const [formData, setFormData] = useState({});
  const router = useRouter();

  // Get role from URL query
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

    if (!role) {
      alert("Role not found");
      return;
    }

    // Save data with role, username, password
    const saveData = {
      ...formData,
      role, // "student" or "admin"
      username: formData.username || formData.name,
      password: formData.password || formData.phoneNo || formData.parentPhone,
    };

    localStorage.setItem("buddySupportUser", JSON.stringify(saveData));

    alert("Signup successful!");
    router.push("/get-started"); // redirect to login page
  };

  if (!role) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-bold">Loading...</p>
      </main>
    );
  }

  const isStudent = role.toLowerCase() === "student";

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-10">
      <h1 className="text-4xl font-bold mb-6 text-white">
        {isStudent ? "Student Registration" : "Admin Registration"}
      </h1>

      <form
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        {isStudent ? (
          <>
            <input
              type="text"
              name="name"
              placeholder="Student Name"
              className="border p-3 rounded-lg"
              onChange={handleChange}
            />
            <input
              type="text"
              name="class"
              placeholder="Class"
              className="border p-3 rounded-lg"
              onChange={handleChange}
            />
            <input
              type="text"
              name="rollNo"
              placeholder="Roll No"
              className="border p-3 rounded-lg"
              onChange={handleChange}
            />
            <input
              type="text"
              name="parentPhone"
              placeholder="Mother/Father Phone No"
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
              type="number"
              name="age"
              placeholder="Age"
              className="border p-3 rounded-lg"
              onChange={handleChange}
            />
            <input
              type="text"
              name="adminCode"
              placeholder="Admin Code"
              className="border p-3 rounded-lg"
              onChange={handleChange}
            />
            <input
              type="text"
              name="username"
              placeholder="Create Username"
              className="border p-3 rounded-lg"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Create Password"
              className="border p-3 rounded-lg"
              onChange={handleChange}
            />
          </>
        ) : (
          <>
            <input
              type="text"
              name="name"
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
              name="phoneNo"
              placeholder="Phone No"
              className="border p-3 rounded-lg"
              onChange={handleChange}
            />
            <input
              type="text"
              name="schoolId"
              placeholder="School ID"
              className="border p-3 rounded-lg"
              onChange={handleChange}
            />
            <input
              type="text"
              name="username"
              placeholder="Create Username"
              className="border p-3 rounded-lg"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Create Password"
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