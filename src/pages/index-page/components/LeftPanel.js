import { useState, useEffect } from 'react';

import { Typography } from "@mui/material";

import GeneratedQuotes from './GeneratedQuotes';
import { Colors } from "../../../constants";
import { useIsMd, useIsXl } from '../../../hooks/use-breakpoints.';

const title = 'Reinald.site';

const LeftPanel = () => {
  const isXl = useIsXl();
  const isMd = useIsMd()

  const [index, setIndex] = useState(0);
  const curTitle = title.slice(0, index);

  useEffect(() => {
    const isDone = curTitle === title;
    const interval = setInterval(() => {
      setIndex(isDone ? 0 : index + 1)
    }, isDone ? 2000 : 100);
    return () => clearInterval(interval);
  }, [curTitle, index]);

  return (
    <div className="w-full lg:w-1/2 relative -top-16 lg:top-0 md:pl-20 xl:pl-28 flex flex-col justify-center items-center md:items-start h-full rounded-3xl overflow-clip">
      <Typography variant={isMd ? 'h3' : 'h4'} sx={{ color: Colors.White(80) }}>
        Welcome to
      </Typography>
      <Typography variant={isXl ? 'h1' : (isMd ? 'h2' : 'h3')} className="lg:pl-6" sx={{ color: Colors.White() }}>
        {curTitle}<span style={{ color: Colors.White() }} className="animate-pulse">|</span>
      </Typography>
      <GeneratedQuotes />
    </div>
  )
}

export default LeftPanel;
