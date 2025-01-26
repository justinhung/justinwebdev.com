import './App.css'
import { useEffect, useState } from 'react'
import { motion } from "framer-motion";

function App() {
  const [show, setShow] = useState(true)
  const [showH2, setShowH2] = useState(false)

  const handleToggle = () => {
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 100);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowH2(true);
    }, 1000);
  }, []);

  return (
    <>
      <div>
        {show && (<motion.div
          initial={{ scale: 0 }}
          animate={{
            scale: [0, 1.1, 0.9, 1],
            transition: { type: "spring", stiffness: 100, bounce: 1, damping: 10 },
          }}
          exit={{ scale: 0 }}
        >
          <h1 onClick={handleToggle}>
            Justin Hung
          </h1>
        </motion.div>)
        }
        {!showH2 && (
          <div style={{ height: '36px', marginTop: '0.83rem' }}></div>
        )}
        {showH2 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: [0, 1.1, 0.9, 1],
              transition: { type: "spring", stiffness: 100, bounce: 1, damping: 10 },
            }}
            exit={{ scale: 0 }}
          >
            <h2>Full Stack Developer</h2>
          </motion.div>)
        }
      </div>
    </>
  )
}

export default App
