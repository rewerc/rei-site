import { useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Button, Typography } from "@mui/material";
import { motion, useAnimate } from "framer-motion";

import { Colors } from '../../../constants';

const ProceedButton = () => {
  const textRef = useRef(null);
  const [scope, animate] = useAnimate();

  const onHoverStart = async () => {
    animate(scope.current, { width: 200 }, { duration: 0.3, stiffness: 80, type: 'spring' });
    await animate(textRef.current, { display: 'inline-block', opacity: 0, x: '100%' }, { duration: 0 })
    await animate(textRef.current, { opacity: 1, x: 0 }, { duration: 0.2 });
  }

  const onHoverEnd = async () => {
    animate(scope.current, { width: 50 }, { duration: 0.2 });
    await animate(textRef.current, { opacity: 0, x: '100%' }, { duration: 0.15 });
    await animate(textRef.current, { display: 'none' }, { duration: 0 });
  }

  return (
    <Button
      component={motion.button}
      ref={scope}
      size="small"
      disableRipple
      sx={{ 
        backgroundColor: Colors.Yellow(),
        width: 50,
        minHeight: 50,
        borderRadius: 15,
        overflowX: 'clip',
        position: 'relative'
      }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      whileTap={{ scale: 0.85, transition: { duration: 0.3 } }}
    >
      <div className="flex items-center">
        <div className="absolute left-5">
          <FontAwesomeIcon icon={faRightFromBracket} size="2xl" color={Colors.Black(70)} />
        </div>
        <Typography
          ref={textRef}
          component={motion.div}
          variant="h6"
          sx={{ 
            color: Colors.Black(70), 
            display: 'none', 
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
            marginLeft: '20px'
          }}
        >
          See more
        </Typography>
      </div>
    </Button>
  )
};

export default ProceedButton;
