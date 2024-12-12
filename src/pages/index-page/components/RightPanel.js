import { useEffect, useState } from 'react';

import { motion, useAnimate } from "framer-motion";
import { Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCropSimple, faPenNib } from "@fortawesome/free-solid-svg-icons";

import { Colors } from "../../../constants";

const HighlightBox = ['code', 'design', 'article'];

const RightPanel = () => {
  const [scope, animate] = useAnimate();
  const [index, setIndex] = useState(0);
  
  const handleAnimation = async () => {
    const selector = `div[name="${HighlightBox[index]}"]`;
    const textSelector = `div[name="${HighlightBox[index]}-text"]`;
    
    animate(textSelector, { opacity: 1, marginTop: 0 }, { duration: 1, ease: 'easeInOut' })
    await animate(
      selector, 
      { scale: 1.2, background: Colors.White(90), color: Colors.SteelBlue(), fontWeight: 'bold', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }, 
      { duration: 1.2, ease: 'easeInOut' }
    );
    
    animate(textSelector, { opacity: 0, marginTop: '-35%' }, { duration: 1, ease: 'easeInOut', delay: 2 })
    await animate(
      selector, 
      { scale: 1, background: Colors.White(0), color: Colors.White(), fontWeight: 'normal', boxShadow: 'box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0)' }, 
      { duration: 1.2, ease: 'easeInOut', delay: 2 }
    );
    setIndex(index + 1 >= HighlightBox.length ? 0 : index + 1);
  };

  useEffect(() => {
    handleAnimation();
  }, [index]);

  return (
    <motion.div 
      ref={scope} 
      className="relative w-full lg:w-1/2 px-5 lg:pl-16 flex flex-col gap-3 justify-center align-center h-full rounded-3xl pr-10"
      style={{ color: Colors.White() }}
    >
      <div className="w-full h-1/3 flex justify-center gap-3">
        <motion.div
          name="code"
          className="w-1/3 h-full rounded-3xl flex justify-center items-center" 
          style={{ border: `2px solid ${Colors.White(90)}` }}
        >
          <div className="h-4/6 flex justify-center items-center flex-col gap-5" style={{ color: 'inherit' }}>
            <FontAwesomeIcon icon={faCode} color="inherit" fontSize="3rem" />
            <Typography
              name="code-text"
              component={motion.div}
              variant="h6" 
              initial={{ opacity: 0, marginTop: '-35%' }}
            >
              CODE
            </Typography>
          </div>
        </motion.div>
        <motion.div
          name="design"
          className="w-1/3 h-full rounded-3xl flex justify-center items-center" 
          style={{ border: `2px solid ${Colors.White(90)}` }}
        >
          <div className="h-4/6 flex justify-center items-center flex-col gap-5">
            <FontAwesomeIcon icon={faCropSimple} color="inherit" fontSize="3rem" style={{ paddingTop: '1rem' }} />
            <Typography
              name="design-text"
              component={motion.div}
              variant="h6" 
              initial={{ opacity: 0, marginTop: '-35%' }}
            >
              DESIGN
            </Typography>
          </div>
        </motion.div>
        <motion.div
          name="article"
          className="w-1/3 h-full rounded-3xl flex justify-center items-center" 
          style={{ border: `2px solid ${Colors.White(90)}` }}
        >
          <div className="h-4/6 flex justify-center items-center flex-col gap-5">
            <FontAwesomeIcon icon={faPenNib} color="inherit" fontSize="3rem"  style={{ paddingTop: '.6rem' }} />
            <Typography
              name="article-text"
              component={motion.div}
              variant="h6" 
              initial={{ opacity: 0, marginTop: '-35%' }}
            >
              ARTICLE
            </Typography>
          </div>
        </motion.div>
      </div>
      
      <div className="w-full h-1/3 flex justify-center gap-3 relative">
        <motion.div
          name="blogs"
          className="w-1/2 h-full rounded-3xl flex justify-center items-center flex-col"
          style={{ border: `2px solid ${Colors.White(90)}` }}
        >
          <div className="h-4/6 flex justify-center items-center flex-col gap-5">
            <Typography variant="h5" sx={{ color: "inherit", fontWeight: 'inherit' }}>BLOGS</Typography>
          </div>
        </motion.div>
        <motion.div
          name="showcases"
          className="w-1/2 h-full rounded-3xl flex justify-center items-center flex-col"
          style={{ border: `2px solid ${Colors.White(90)}` }}
        >
          <div className="h-4/6 flex justify-center items-center flex-col gap-5">
            <Typography variant="h5" sx={{ color: "inherit", fontWeight: 'inherit' }}>SHOWCASES</Typography>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
};

export default RightPanel;