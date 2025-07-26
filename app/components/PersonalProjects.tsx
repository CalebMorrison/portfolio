"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SystemArchitecture() {
  const [nbaIframeSrc, setNbaIframeSrc] = useState(
    "https://nba-widget.vercel.app"
  );

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // optionally check event.origin === 'https://nba-widget.vercel.app'
      if (event.data?.type === "loadBoxscore") {
        const gameId = event.data.gameId;
        setNbaIframeSrc(
          `https://nba-widget.vercel.app/game.html?gameId=${gameId}`
        );
      }
      if (event.data?.type === "loadScoreboard") {
        setNbaIframeSrc("https://nba-widget.vercel.app");
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Personal Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-8">
          {[
            {
              title: "Simple Leaderboard",
              description:
                "One of my hobbies is Warhammer 40k and I joined a league so I made a leaderboard to keep track of the rankings of the monthly matches.",
              details: [
                "This was a good intro to react along with the porfolio website itself, not using a template definielty showed me the depth of what react can do and how much there is to learn.",
              ],
              tech: ["React", "Javascript", "Next.JS"],
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-6">{project.description}</p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Key Takeaways:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Project Link:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>
                    Click{" "}
                    <a href="https://40kleaderboard.vercel.app">
                      <b>
                        <u>here</u>
                      </b>
                    </a>{" "}
                    to check out the leaderboard.
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-8 mt-16">
          {[
            {
              title: "Magic the Gathering Commander deck builder (Still a WIP)",
              description:
                "A new hobby of mine is Magic the Gathering Commander which has been fun to get into so I wanted to make a MERN app of something that was interesting to me.",
              details: [
                "Integrates with the Scryfall API for real-time card data and imagery.",
                " It leverages JSON Web Tokens (JWT) for secure, stateless authentication and authorization, protecting user data and ensuring access to personalized features.",
                "Uses Vercel to host the front end and Render to host the back end with MongoDB Atlas hosting the database.",
                "Allows users to create, manage, and view their Magic: The Gathering Commander decks.",
                "Features user authentication for personalized deck saving and retrieval.",
                "Implements intelligent deck-building rules (e.g., singleton rule for non-basic lands, basic land incrementing).",
              ],
              tech: ["React", "Express.js", "MongoDB", "JWT", "Node.js"],
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-6">{project.description}</p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Key Takeaways:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Project Link:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>
                    Click{" "}
                    <a href="https://mtg-commander-deck-builder.vercel.app">
                      <b>
                        <u>here</u>
                      </b>
                    </a>{" "}
                    to check out the deck builder.
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* NBA WIDGET SECTION */}
        <div className="grid grid-cols-1 gap-8 mt-16">
          {[
            {
              title: "NBA Widget",
              description:
                "Using the ESPN API I made this datepicker with a simple NBA Scoreboard with a link to the boxscore available.",
              tech: ["HTML", "Javascript", "CSS"],
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-6">{project.description}</p>

              {/* 📌 Dynamic Iframe */}
              <div className="mb-6">
                <iframe
                  src={nbaIframeSrc}
                  title="NBA Scoreboard"
                  className="w-full h-[600px] rounded-lg border border-gray-700"
                  style={{ border: "none" }}
                  loading="lazy"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
