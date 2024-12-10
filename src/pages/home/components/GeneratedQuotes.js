import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { useAnimate } from 'framer-motion';
import { Typography } from '@mui/material';

import { Colors, Fonts } from '../../../constants';
import { getRandomNumber } from '../../../utils';

const quotes = [
  'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.',
  'Life doesn\'t get easier or more forgiving, we get stronger and more resilient.',
  'Life has no limitations, except the ones you make.',
  'Quality means doing it right when no one is looking.',
  'There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.'
];

const GeneratedQuotes = () => {
  const [index, setIndex] = useState(getRandomNumber(quotes.length));
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const handleAnimate = async () => {
      const nextIndex = getRandomNumber(quotes.length, index);
      await animate(`div[name="quote-${nextIndex}"]`, { display: 'block', opacity: 0 }, { duration: 0 });
      animate(`div[name="quote-${index}"]`, { x: '-100%', opacity: 0 }, { duration: 1, ease: 'easeInOut' });
      await animate(`div[name="quote-${nextIndex}"]`, { x: 0, display: 'block', opacity: 1 }, { duration: 1, ease: 'easeInOut' });
      await animate(`div[name="quote-${index}"]`, { display: 'none', x: '100%' }, { duration: 0 })
      setIndex(nextIndex)
    };
    const interval = setInterval(handleAnimate, 5000);
    return () => clearInterval(interval);
  }, [animate, index]);

  return (
    <div className="w-3/4 mt-14 flex min-h-32">
      <div className="self-start relative top-2">
        <FontAwesomeIcon icon={faQuoteLeft} fontSize="1.5rem" color={Colors.White(85)} />
      </div>
      <motion.div ref={scope} className="w-full h-full flex justify-center align-center relative">
        {
          quotes.map((quote, i) => (
            <Typography
              key={quote}
              component={motion.div}
              name={`quote-${i}`}
              variant="h6"
              sx={{ color: Colors.White(85), fontFamily: Fonts.DMSerifDisplay, position: 'absolute', fontStyle: 'italic', alignSelf: 'center', minWidth: '400px' }}
              className="px-10"
              align="center"
              initial={index === i ? {} : { display: 'none', x: '100%' }}
            >
              {quote}
            </Typography>
          ))
        }
      </motion.div>
      <div className="self-end relative bottom-2">
        <FontAwesomeIcon icon={faQuoteRight} fontSize="1.5rem" color={Colors.White(85)} />
      </div>
    </div> 
  )
};

export default GeneratedQuotes;