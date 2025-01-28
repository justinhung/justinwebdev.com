import './App.css'
import { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { IconButton, Slide, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function App() {
  const [show, setShow] = useState(true)
  const [showH2, setShowH2] = useState(false)
  const [showH3, setShowH3] = useState(false)

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
    setTimeout(() => {
      setShowH3(true);
    }, 2000);
  }, []);

  return (
    <>
      <div style={{ height: '100vh', alignContent: 'center' }}>
        {show && (<motion.div
          initial={{ scale: 0 }}
          animate={{
            scale: [0, 1.1, 0.9, 1],
            transition: { type: "spring", stiffness: 100, bounce: 1, damping: 10 },
          }}
          exit={{ scale: 0 }}
        >
          <Typography variant="h1" onClick={handleToggle}>
            Justin Hung
          </Typography>
        </motion.div>)
        }
        {!showH2 && (
          <div style={{ height: '72px', marginTop: '20px', marginBottom: '20px' }}></div>
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
            <Typography variant="h2" style={{ margin: '20px' }}>Fullstack Developer</Typography>
          </motion.div>)
        }

          <Slide direction="up" in={showH3} mountOnEnter unmountOnExit>
          <IconButton>
            <KeyboardArrowDownIcon style={{ color: 'white' }} />
          </IconButton>
          </Slide>
      </div>
    </>
  )
}

export default App
