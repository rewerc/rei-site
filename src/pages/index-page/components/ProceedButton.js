import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Button, Typography, CircularProgress } from "@mui/material";
import { motion, useAnimate } from "framer-motion";

import { Colors } from '../../../constants';
import { sleep } from '../../../utils';

const ProceedButton = () => {
  const [scope, animate] = useAnimate();
  const [isClicked, setIsClicked] = useState(false);

  const onHoverStart = async () => {
    animate(scope.current, { width: 200 }, { duration: 0.3, stiffness: 80, type: 'spring' });
    await animate('div[name="proceed-text"]', { display: 'inline-block', opacity: 0, x: '100%' }, { duration: 0 });
    await animate('div[name="proceed-text"]', { opacity: 1, x: 0 }, { duration: 0.2 });
  }

  const onHoverEnd = async () => {
    animate(scope.current, { width: 50 }, { duration: 0.2 });
    await animate('div[name="proceed-text"]', { opacity: 0, x: '100%' }, { duration: 0.15 });
    await animate('div[name="proceed-text"]', { display: 'none' }, { duration: 0 });
  }

  const onClick = async () => {
    await onHoverEnd();
    setIsClicked(true);
    await sleep(3000)
    window.location.href = '/home';
    setIsClicked(false);
  }

  return (
    <Button
      component={motion.button}
      ref={scope}
      size="small"
      disableRipple
      disabled={isClicked}
      sx={{ 
        backgroundColor: Colors.White(),
        width: 50,
        minHeight: 50,
        borderRadius: 15,
        overflowX: 'clip',
        position: 'relative'
      }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      whileTap={{ scale: 0.85, transition: { duration: 0.3 } }}
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className="absolute left-5 flex items-center justify-center">
          {isClicked 
            ? <CircularProgress size={40} thickness={10} color="info" sx={{ position: 'relative', left: -8 }} /> 
            : <FontAwesomeIcon icon={faRightFromBracket} size="2xl" color={Colors.Black(70)} />}
        </div>
        <Typography
          name="proceed-text"
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
