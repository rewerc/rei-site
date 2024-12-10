import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCropSimple, faPenNib } from "@fortawesome/free-solid-svg-icons";

import { Colors } from "../../../constants";

const RightPanel = () => {
  return (
    <motion.div className="relative w-1/2 pl-16 flex flex-col gap-3 justify-center align-center h-full rounded-3xl pr-10">
      <div className="w-full h-1/3 flex justify-center gap-3">
        <motion.div 
          className="w-1/3 h-full rounded-3xl flex justify-center items-center" 
          style={{ border: `2px solid ${Colors.White(70)}` }}
          initial={{ backgroundColor: Colors.White(0), color: Colors.White() }}
          whileHover={{ backgroundColor: Colors.White(70), color: Colors.Teal(), scale: 1.2, transition: { duration: .5, ease: 'easeInOut' } }}
        >
          <div className="h-4/6 flex justify-center items-center flex-col" style={{ color: 'inherit' }}>
            <FontAwesomeIcon icon={faCode} color="inherit" fontSize="3rem" />
          </div>
        </motion.div>
        <div className="w-1/3 h-full rounded-3xl flex justify-center items-center" style={{ border: `2px solid ${Colors.White(70)}` }}>
          <div className="h-4/6 flex justify-center items-center flex-col">
            <FontAwesomeIcon icon={faCropSimple} color={Colors.White()} fontSize="3rem" />
          </div>
        </div>
        <div className="w-1/3 h-full rounded-3xl flex justify-center items-center" style={{ border: `2px solid ${Colors.White(70)}` }}>
          <div className="h-4/6 flex justify-center items-center flex-col">
            <FontAwesomeIcon icon={faPenNib} color={Colors.White()} fontSize="3rem" />
          </div>
        </div>
      </div>
      
      <div className="w-full h-1/3 flex justify-center gap-3">
        <div className="w-1/2 h-full rounded-3xl flex justify-center items-center flex-col" style={{ border: `2px solid ${Colors.White(70)}` }}>
          <div className="h-4/6 flex justify-center items-center flex-col">
            <Typography variant="h5" sx={{ color: Colors.White() }}>BLOGS</Typography>
          </div>
        </div>
        <div className="w-1/2 h-full rounded-3xl flex justify-center items-center flex-col" style={{ border: `2px solid ${Colors.White(70)}` }}>
          <div className="h-4/6 flex justify-center items-center flex-col">
            <Typography variant="h5" sx={{ color: Colors.White() }}>SHOWCASES</Typography>
          </div>
        </div>
      </div>
    </motion.div>
  )
};

export default RightPanel;