import { motion } from "framer-motion";
import { FaPlay, FaRobot } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="inline-block bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full mb-6 font-semibold">
            ⚡ AI Powered Multiplayer Game
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Welcome to
            <br />
            <span className="text-cyan-400">
              BattleVerse AI
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-xl">
            Battle against real players and intelligent AI opponents in the
            ultimate multiplayer strategy arena. Build your rank, make friends,
            and become the champion.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button className="flex items-center gap-3 bg-cyan-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-cyan-300 transition">
              <FaPlay />
              Play Now
            </button>

            <button className="flex items-center gap-3 border border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl hover:bg-cyan-400 hover:text-black transition">
              <FaRobot />
              AI Demo
            </button>

          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">

            <div className="absolute inset-0 bg-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-cyan-400 bg-slate-900 flex items-center justify-center shadow-2xl">

              <FaRobot className="text-cyan-400 text-[140px] animate-bounce" />

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;