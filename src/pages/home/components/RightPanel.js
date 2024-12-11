import { useEffect, useState } from 'react';

import { motion, useAnimate, MotionConfig } from "framer-motion";
import { Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCropSimple, faPenNib } from "@fortawesome/free-solid-svg-icons";

import { Colors } from "../../../constants";

const HighlightBox = ['code', 'design', 'article', 'blogs', 'showcases'];

const RightPanel = () => {
  const [scope, animate] = useAnimate();
  const [index, setIndex] = useState(0);
  const [isInitialDone, setIsInitialDone] = useState(false);
  
  useEffect(() => {
    const handleAnimation = () => {
      
    };
    const interval = setInterval(handleAnimation, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <MotionConfig transition={{ duration: 1, ease: 'easeInOut' }}>
      <motion.div 
        ref={scope} 
        className="relative w-1/2 pl-16 flex flex-col gap-3 justify-center align-center h-full rounded-3xl pr-10"
        style={{ color: Colors.White() }}
      >
        <div className="w-full h-1/3 flex justify-center gap-3">
          <motion.div
            name="code"
            className="w-1/3 h-full rounded-3xl flex justify-center items-center" 
            style={{ border: `2px solid ${Colors.White(70)}` }}
          >
            <div className="h-4/6 flex justify-center items-center flex-col" style={{ color: 'inherit' }}>
              <FontAwesomeIcon icon={faCode} color="inherit" fontSize="3rem" />
            </div>
          </motion.div>
          <motion.div
            name="design"
            className="w-1/3 h-full rounded-3xl flex justify-center items-center" 
            style={{ border: `2px solid ${Colors.White(70)}` }}
          >
            <div className="h-4/6 flex justify-center items-center flex-col">
              <FontAwesomeIcon icon={faCropSimple} color="inherit" fontSize="3rem" />
            </div>
          </motion.div>
          <motion.div
            name="article"
            className="w-1/3 h-full rounded-3xl flex justify-center items-center" 
            style={{ border: `2px solid ${Colors.White(70)}` }}
          >
            <div className="h-4/6 flex justify-center items-center flex-col">
              <FontAwesomeIcon icon={faPenNib} color="inherit" fontSize="3rem" />
            </div>
          </motion.div>
        </div>
        
        <div className="w-full h-1/3 flex justify-center gap-3">
          <motion.div
            name="blogs"
            className="w-1/2 h-full rounded-3xl flex justify-center items-center flex-col"
            style={{ border: `2px solid ${Colors.White(70)}` }}
          >
            <div className="h-4/6 flex justify-center items-center flex-col">
              <Typography variant="h5" sx={{ color: "inherit" }}>BLOGS</Typography>
            </div>
          </motion.div>
          <motion.div
            name="showcases"
            className="w-1/2 h-full rounded-3xl flex justify-center items-center flex-col"
            style={{ border: `2px solid ${Colors.White(70)}` }}
          >
            <div className="h-4/6 flex justify-center items-center flex-col">
              <Typography variant="h5" sx={{ color: "inherit" }}>SHOWCASES</Typography>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </MotionConfig>
  )
};

export default RightPanel;