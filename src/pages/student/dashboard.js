import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function StudentDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("buddySupportUser"));

    if (!savedUser || savedUser.role?.toLowerCase() !== "student") {
      alert("Please login as a student first.");
      router.push("/get-started");
      return;
    }

    setUser(savedUser);

    const today = new Date().toISOString().split("T")[0];
    let attendanceData = JSON.parse(localStorage.getItem("studentAttendance")) || [];

    if (!attendanceData.includes(today)) {
      attendanceData.push(today);
      localStorage.setItem("studentAttendance", JSON.stringify(attendanceData));
    }
  }, [router]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("buddySupportUser", JSON.stringify(user));
    setEditing(false);
    alert("Profile updated successfully!");
  };

  const getLast30Days = () => {
    const days = [];
    for (let i = 29; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      days.push(d.toISOString().split("T")[0]);
    }
    return days;
  };

  const [attendanceData, setAttendanceData] = useState([]);

useEffect(() => {
  const data = JSON.parse(localStorage.getItem("studentAttendance")) || [];
  setAttendanceData(data);
}, []);
  const last30Days = getLast30Days();

  if (!user) {
    return (
      <main className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Loading...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-100 via-pink-100 to-purple-100">
      {/* Navbar */}
     <nav className="w-full bg-white shadow-lg px-6 py-4 flex items-center justify-between flex-wrap">
  <div className="text-3xl font-extrabold text-blue-700">
    Buddy Support
  </div>

  <div className="flex gap-3 flex-wrap justify-end mt-2 md:mt-0">
    <button
      onClick={() => router.push("/student/dashboard")}
      className="bg-blue-600 text-white px-4 py-2 rounded-xl text-lg font-semibold hover:bg-blue-700"
    >
      Profile
    </button>

    <button
      className="bg-green-600 text-white px-4 py-2 rounded-xl text-lg font-semibold hover:bg-green-700"
    >
      Attendance
    </button>

    <button
      onClick={() => router.push("/student/current-task")}
      className="bg-green-600 text-white px-4 py-2 rounded-xl text-lg font-semibold hover:bg-green-700"
    >
      Task
    </button>
  </div>
</nav>

      <div className="p-8">
        {/* Profile Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col md:flex-row gap-8 items-start mb-10">
          {/* Photo */}
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full bg-gray-200 border-4 border-blue-300 flex items-center justify-center text-gray-500 text-lg font-semibold">
              Upload Photo
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
            {editing ? (
              <>
                <input name="username" value={user.username || ""} onChange={handleChange} className="border p-3 rounded-xl" placeholder="Username" />
                <input name="name" value={user.name || ""} onChange={handleChange} className="border p-3 rounded-xl" placeholder="Name" />
                <input name="class" value={user.class || ""} onChange={handleChange} className="border p-3 rounded-xl" placeholder="Class" />
                <input name="rollNo" value={user.rollNo || ""} onChange={handleChange} className="border p-3 rounded-xl" placeholder="Roll No" />
                <input name="parentPhone" value={user.parentPhone || ""} onChange={handleChange} className="border p-3 rounded-xl" placeholder="Parent Phone" />
                <input name="schoolName" value={user.schoolName || ""} onChange={handleChange} className="border p-3 rounded-xl" placeholder="School Name" />
                <input name="age" value={user.age || ""} onChange={handleChange} className="border p-3 rounded-xl" placeholder="Age" />
                <input name="password" value={user.password || ""} onChange={handleChange} className="border p-3 rounded-xl" placeholder="Password" />
              </>
            ) : (
              <>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Class:</strong> {user.class}</p>
                <p><strong>Roll No:</strong> {user.rollNo}</p>
                <p><strong>Parent Phone:</strong> {user.parentPhone}</p>
                <p><strong>School Name:</strong> {user.schoolName}</p>
                <p><strong>Age:</strong> {user.age}</p>
                <p><strong>Password:</strong> {user.password}</p>
              </>
            )}
          </div>

          {/* Edit / Save */}
          <div>
            {editing ? (
              <button
                onClick={handleSave}
                className="bg-red-600 text-white px-4 py-2 rounded-xl text-lg font-semibold hover:bg-green-700"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setEditing(true)}
                className="bg-green-600 text-white px-4 py-2 rounded-xl text-lg font-semibold hover:bg-green-700"
              >
                Edit
              </button>
            )}
          </div>
        </div>

        {/* Attendance Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-green-700 mb-6">
            Attendance
          </h2>

          <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-10 gap-3">
            {last30Days.map((day, index) => {
              const visited = attendanceData.includes(day);
              return (
                <div
                  key={index}
                  title={day}
                  className={`h-12 w-12 rounded-lg flex items-center justify-center text-sm font-bold shadow-md ${
                    visited
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {new Date(day).getDate()}
                </div>
              );
            })}
          </div>

          <p className="mt-4 text-lg text-gray-700">
            Green boxes mean the student opened the website on that date.
          </p>
        </div>
      </div>
    </main>
  );
}