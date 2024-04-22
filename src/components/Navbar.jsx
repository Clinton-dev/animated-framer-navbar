import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";

function Navbar() {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);
  return (
    <nav className="sticky top-0 inset-x-0 h-16 bg-stone-900">
      <div className="container mx-auto h-full px-4 flex item-center">
        <div className="relative z-10">
          <motion.button
            animate={mobileNav ? "open" : "closed"}
            onClick={() => toggleMobileNav()}
            className="pt-4 flex flex-col space-y-1"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 5 },
              }}
              className="w-5 h-px bg-white block"
            ></motion.span>
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              className="w-5 h-px bg-white block"
            ></motion.span>
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -5 },
              }}
              className="w-5 h-px bg-white block"
            ></motion.span>
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {mobileNav && (
          <MotionConfig
            transition={{
              type: "spring",
              bounce: 0.1,
            }}
          >
            <motion.div
              key="mobile-nav"
              variants={{
                open: {
                  x: "0%",
                  transition: {
                    type: "spring",
                    bounce: 0.1,
                    when: "beforeChildren",
                  },
                },
                closed: {
                  x: "-100%",
                  transition: {
                    type: "spring",
                    bounce: 0.1,
                    when: "afterChildren",
                  },
                },
              }}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col justify-center fixed inset-0 bg-blue-600 space-y-10 p-6 "
            >
              <motion.div
                variants={{
                  open: {
                    y: "0%",
                    opacity: 1,
                  },
                  close: {
                    y: "25%",
                    opacity: 0,
                  },
                }}
              >
                <ul className="space-y-5">
                  <li>
                    <a href="#" className="text-4xl font-bold">
                      Link
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-4xl font-bold">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-4xl font-bold">
                      Link 3
                    </a>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                variants={{
                  open: {
                    y: "0%",
                    opacity: 1,
                  },
                  close: {
                    y: "25%",
                    opacity: 0,
                  },
                }}
                className="w-full bg-white h-px"
              ></motion.div>
              <motion.div
                variants={{
                  open: {
                    y: "0%",
                    opacity: 1,
                  },
                  close: {
                    y: "25%",
                    opacity: 0,
                  },
                }}
              >
                <ul className="flex items-center justify-center gap-x-5">
                  <li>
                    <div className="w-10 h-12 rounded-lg bg-gray-300"></div>
                  </li>
                  <li>
                    <div className="w-10 h-12 rounded-lg bg-gray-300"></div>
                  </li>
                  <li>
                    <div className="w-10 h-12 rounded-lg bg-gray-300"></div>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
