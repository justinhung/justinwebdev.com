import "./App.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, Fade, IconButton, Slide, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WebGL from "./components/WebGL";

export default function App() {
  const [show, setShow] = useState(true);
  const [showH2, setShowH2] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const [arrowOpacity, setOpacity] = useState(1);
  const [textOpacity, setTextOpacity] = useState(1);

  const handleToggle = () => {
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const top = 0;
      const maxScrollPosition = window.innerHeight / 2;
      const textOpacityValue = 1 - scrollPosition / maxScrollPosition;
      setTextOpacity(textOpacityValue);

      const arrowOpacityValue = scrollPosition === top ? 1 : 0;
      setOpacity(arrowOpacityValue);
    };

    window.addEventListener("scroll", handleScroll);
    setTimeout(() => {
      setShowH2(true);
    }, 1000);
    setTimeout(() => {
      setShowArrow(true);
    }, 2000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <div className="title my-auto">
          {show && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{
                scale: [0, 1.1, 0.9, 1],
                transition: { type: "spring", stiffness: 100, bounce: 1, damping: 10 },
              }}
              exit={{ scale: 0 }}>
              <Typography
                variant="h1"
                onClick={handleToggle}
                className="text-blue-300 transition duration-300 ease-in-out"
                style={{ opacity: textOpacity }}>
                Justin Hung
              </Typography>
            </motion.div>
          )}
          {!showH2 && (
            <Box style={{ height: "72px", marginTop: "20px", marginBottom: "20px" }}></Box>
          )}
          {showH2 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{
                scale: [0, 1.1, 0.9, 1],
                transition: { type: "spring", stiffness: 100, bounce: 1, damping: 10 },
              }}
              exit={{ scale: 0 }}>
              <Typography
                variant="h2"
                className="text-blue-400 transition duration-300 ease-in-out"
                style={{ margin: "20px", opacity: textOpacity }}>
                Fullstack Developer
              </Typography>
            </motion.div>
          )}
        </div>

        {showArrow && (
          <Fade in={showArrow} timeout={1000}>
            <div className="mb-1 fixed bottom-0" style={{ opacity: arrowOpacity }}>
              <Slide direction="down" in={showArrow} mountOnEnter unmountOnExit timeout={1500}>
                <div>
                  <IconButton className="animate-bounce">
                    <KeyboardArrowDownIcon className="text-blue-500" />
                  </IconButton>
                </div>
              </Slide>
            </div>
          </Fade>
        )}
      </div>

      <div className="h-screen w-full max-w-7xl mx-auto p-5 content-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="animation-test content-center">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <Typography variant="h3" className="text-blue-300 p-3">
              This is a test
            </Typography>
          </div>

          <div className="animation-test" style={{ transform: "scale(-1, 1)" }}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <WebGL />
          </div>
        </div>
      </div>
    </>
  );
}
