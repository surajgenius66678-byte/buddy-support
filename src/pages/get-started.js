import { useState, useEffect, useRef } from "react";

const stories = [
  {
    name: "Elon Musk",
    brief: "Born in South Africa, Elon faced bullying as a child and struggled financially. He taught himself programming at age 12, started several companies, and now leads Tesla and SpaceX, revolutionizing technology and space exploration.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society_%28crop2%29.jpg",
    link: "https://en.wikipedia.org/wiki/Elon_Musk",
  },
  {
    name: "Malala Yousafzai",
    brief: "Malala grew up in Pakistan where girls’ education was restricted. Surviving an assassination attempt at age 15, she became a global advocate for education and won the Nobel Peace Prize, inspiring millions worldwide.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Malala_Yousafzai_at_Girl_Up_Leadership_Summit_2013.jpg",
    link: "https://en.wikipedia.org/wiki/Malala_Yousafzai",
  },
  {
    name: "Oprah Winfrey",
    brief: "Oprah was born into poverty in rural Mississippi and faced numerous personal challenges growing up. She became a media mogul, philanthropist, and influential figure, proving resilience can lead to extraordinary success.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Oprah_in_2014.jpg",
    link: "https://en.wikipedia.org/wiki/Oprah_Winfrey",
  },
  {
    name: "J.K. Rowling",
    brief: "J.K. Rowling was a struggling single mother living on welfare. Through perseverance, she wrote the Harry Potter series, which became one of the most successful book franchises in history, inspiring countless readers.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/J._K._Rowling_2010.jpg",
    link: "https://en.wikipedia.org/wiki/J._K._Rowling",
  },
  {
    name: "Sundar Pichai",
    brief: "Sundar grew up in a modest household in India and studied engineering with limited resources. Through dedication, he rose to become CEO of Google and Alphabet, shaping global technology.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Sundar_Pichai_2016.jpg",
    link: "https://en.wikipedia.org/wiki/Sundar_Pichai",
  },
  {
    name: "Ratan Tata",
    brief: "Born into the prominent Tata family in India, Ratan Tata faced high expectations. He led Tata Group through massive global expansion, acquiring major brands, and became a symbol of ethical leadership and entrepreneurship.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Ratan_Tata_in_2010.jpg",
    link: "https://en.wikipedia.org/wiki/Ratan_Tata",
  },
  {
    name: "Kiran Mazumdar-Shaw",
    brief: "Starting with limited resources, Kiran founded Biocon, India’s largest biopharmaceutical company, facing gender bias and funding issues. Today, she is a renowned entrepreneur and philanthropist in healthcare.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Kiran_Mazumdar-Shaw.jpg",
    link: "https://en.wikipedia.org/wiki/Kiran_Mazumdar-Shaw",
  },
];

export default function GetStarted() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  // Auto scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (!isHovered) {
        scrollAmount += 3; // faster auto-scroll
        if (scrollAmount > scrollContainer.scrollHeight - scrollContainer.clientHeight) {
          scrollAmount = 0;
        }
        scrollContainer.scrollTop = scrollAmount;
      }
    }, 25); // smaller interval for smooth scrolling

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <main className="min-h-screen flex bg-gradient-to-r from-purple-200 via-pink-100 to-blue-100">
      
      {/* Left Side - Stories */}
      <div
        className="w-3/5 overflow-hidden relative h-screen p-8"
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h1 className="text-6xl font-extrabold text-blue-900 mb-12 text-center drop-shadow-lg">
          Real-Life Inspirational Stories
        </h1>

        <div className="flex flex-col gap-12">
          {stories.map((story, index) => (
            <div
              key={index}
              className="flex items-start gap-8 p-6 rounded-2xl bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 shadow-xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-500"
              onClick={() => window.open(story.link, "_blank")}
            >
              <img
                src={story.image}
                alt={story.name}
                className="w-44 h-44 object-cover rounded-full border-4 border-white shadow-lg"
              />
              <div className="flex-1">
                <h2 className="font-extrabold text-4xl mb-4 text-purple-900">{story.name}</h2>
                <p className="text-2xl text-gray-700 leading-relaxed">{story.brief}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Signup/Login */}
      <div className="w-2/5 p-10 flex flex-col justify-center bg-gradient-to-b from-blue-300 via-pink-200 to-purple-300 rounded-l-3xl shadow-2xl">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-white drop-shadow-md">
          Buddy Support
        </h2>

        {/* Role selection */}
        <div className="flex gap-6 mb-8">
          {["Student", "Admin"].map((role) => (
            <button
              key={role}
              className={`flex-1 py-4 rounded-lg text-2xl font-semibold transition transform hover:scale-105 ${
                selectedRole === role
                  ? "bg-green-500 text-white shadow-lg"
                  : "bg-blue-600 text-white hover:bg-green-600"
              }`}
              onClick={() => setSelectedRole(role)}
            >
              {role}
            </button>
          ))}
        </div>

        {/* Input fields */}
        <input
          type="text"
          placeholder="Name"
          className="border p-4 rounded-lg mb-5 text-xl focus:ring-2 focus:ring-purple-400 outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-4 rounded-lg mb-5 text-xl focus:ring-2 focus:ring-purple-400 outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-4 rounded-lg mb-8 text-xl focus:ring-2 focus:ring-purple-400 outline-none"
        />

        <button className="bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition text-2xl mb-4 shadow-md hover:shadow-xl">
          Login
        </button>

        {/* Informational line */}
        <p className="text-center text-white text-lg">
          If you have not signed in yet, {" "}
          <a href="/signup-details" className="font-bold underline hover:text-yellow-200">
            Signup
          </a>
        </p>
      </div>
    </main>
  );
}