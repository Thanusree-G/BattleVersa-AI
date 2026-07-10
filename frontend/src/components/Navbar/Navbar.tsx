import { useState } from "react";
import { FaGamepad, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <FaGamepad className="text-cyan-400 text-3xl" />
          <h1 className="text-2xl font-bold text-white">
            BattleVerse <span className="text-cyan-400">AI</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
          <li><a href="#features" className="hover:text-cyan-400">Features</a></li>
          <li><a href="#gamemodes" className="hover:text-cyan-400">Game Modes</a></li>
          <li><a href="#leaderboard" className="hover:text-cyan-400">Leaderboard</a></li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <button className="px-5 py-2 border border-cyan-400 rounded-lg text-cyan-400 hover:bg-cyan-400 hover:text-black transition">
            Login
          </button>

          <button className="px-5 py-2 bg-cyan-400 text-black rounded-lg font-semibold hover:bg-cyan-300 transition">
            Play Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyan-400 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white px-6 pb-6">
          <ul className="flex flex-col gap-5">

            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#gamemodes">Game Modes</a></li>
            <li><a href="#leaderboard">Leaderboard</a></li>

            <button className="border border-cyan-400 py-2 rounded-lg text-cyan-400 mt-3">
              Login
            </button>

            <button className="bg-cyan-400 text-black py-2 rounded-lg font-semibold">
              Play Now
            </button>

          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;