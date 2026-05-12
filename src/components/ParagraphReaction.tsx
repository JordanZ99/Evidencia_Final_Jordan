"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EMOJIS = ["👍", "💡", "🚀", "🤔", "👏"];

export default function ParagraphReaction({ children }: { children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);
  const [reactions, setReactions] = useState<Record<string, number>>({});
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    // Delay hiding so the user has time to move to the emoji bar
    leaveTimer.current = setTimeout(() => setIsHovered(false), 300);
  };

  const handleReact = (emoji: string) => {
    setReactions((prev) => ({
      ...prev,
      [emoji]: (prev[emoji] || 0) + 1,
    }));
  };

  return (
    <div
      className="relative group my-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="prose-p:mb-0 inline-block w-full">
        {children}
      </div>

      {/* Floating Reaction Bar */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: -12 }}
            exit={{ opacity: 0, y: 5 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="absolute top-0 right-0 bg-slate-800 border border-slate-700 rounded-full px-2 py-1 shadow-lg flex gap-1 z-20"
          >
            {EMOJIS.map((emoji) => (
              <button
                key={emoji}
                onClick={() => handleReact(emoji)}
                className="hover:scale-125 transition-transform p-1 rounded-full hover:bg-slate-700 text-sm"
              >
                {emoji}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active Reactions Display */}
      {Object.entries(reactions).length > 0 && (
        <div className="flex gap-2 mt-2 flex-wrap">
          {Object.entries(reactions).map(([emoji, count]) => (
            <span
              key={emoji}
              className="inline-flex items-center gap-1 bg-cyan/10 border border-cyan/30 text-cyan px-2 py-0.5 rounded-full text-xs font-bold cursor-pointer hover:bg-cyan/20 transition-colors"
              onClick={() => handleReact(emoji)}
              title="Haz clic para añadir tu reacción"
            >
              {emoji} {count}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
