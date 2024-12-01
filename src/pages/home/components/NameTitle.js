import { useState, useEffect } from 'react';
import { Typography } from "@mui/material";
import { Colors } from "../../../constants";

const title = 'Reinald.site';

const NameTitle = () => {
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
    <Typography variant="h1" className="pl-6" sx={{ color: Colors.White() }}>
      {curTitle}<span style={{ color: Colors.White() }} className="animate-pulse">|</span>
    </Typography>
  )
}

export default NameTitle;
