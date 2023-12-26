import { motion } from "framer-motion";
import logo from "./assets/img.png";
import "./App.css";

function App() {
    const pVariants = {
        hidden: {
            x: -1000,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
        },
    };

    const listVariants = {
        visible: (i) => ({
            opacity: 1,
            transition: {
                delay: i * 0.5,
            },
            y: 0,
        }),
        hidden: { opacity: 0, y: 100 },
    };

    const items = ["text 1", "text 2", "text 3"];
    return (
        <div className="app">
            <motion.img
                src={logo}
                alt="logo"
                // initial={{}}
                animate={{ rotate: 360 }}
                transition={{
                    // delay: 1,
                    duration: 2,
                    repeat: Infinity,
                    // repeatDelay: 1,
                    repeatType: "reverse",
                    type: "spring",
                    ease: "easeInOut",
                }}
            />
            <motion.p
                initial={"hidden"}
                animate={"visible"}
                transition={{
                    duration: 1,
                    delay: 0.5,
                }}
                variants={pVariants}
            >
                Hello World
            </motion.p>
            <motion.a
                whileHover={{
                    scale: 1.3,
                }}
            >
                Some Link
            </motion.a>
            {items.map((item, i) => (
                <motion.li
                    key={item}
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                    custom={i}
                >
                    {item}
                </motion.li>
            ))}
        </div>
    );
}

export default App;
