import { useState, useEffect } from 'react';

import { Typography } from "@mui/material";

import GeneratedQuotes from './GeneratedQuotes';
import { Colors } from "../../../constants";

const title = 'Reinald.site';

const LeftPanel = () => {
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
    <div className="w-1/2 pl-40 flex flex-col justify-center h-full rounded-3xl overflow-hidden">
      <Typography variant="h3" sx={{ color: Colors.White(80) }}>
        Welcome to
      </Typography>
      <Typography variant="h1" className="pl-6" sx={{ color: Colors.White() }}>
        {curTitle}<span style={{ color: Colors.White() }} className="animate-pulse">|</span>
      </Typography>
      <GeneratedQuotes />
    </div>
  )
}

export default LeftPanel;
