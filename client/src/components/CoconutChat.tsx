import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CoconutChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            style={{ transformOrigin: "bottom right" }}
            className="fixed bottom-24 right-6 z-50 flex flex-col overflow-hidden rounded-2xl bg-white shadow-2xl
              w-[calc(100vw-3rem)] h-[calc(100vh-8rem)]
              sm:w-[400px] sm:h-[620px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#F8F8F7] border-b border-gray-200">
              <span className="text-sm font-semibold text-gray-800">
                Chat with Cheryl
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-7 h-7 rounded-full hover:bg-gray-200 transition-colors text-gray-500"
                aria-label="Close chat"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 1l12 12M13 1L1 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Iframe */}
            <iframe
              src="/twin/index.html?widget=true"
              allow="microphone"
              className="flex-1 w-full border-0"
              title="Chat with Cheryl's digital twin"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Coconut Button */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-50 cursor-pointer rounded-full p-0 border-0 bg-transparent"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat"
      >
        <motion.img
          src="/coconut.png"
          alt="Chat"
          className="w-14 h-14 drop-shadow-lg"
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.button>
    </>
  );
}
