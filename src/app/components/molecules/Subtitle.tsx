import React from "react";
import Typography from "@mui/material/Typography";

interface SubtitleProps {
  text: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ text }) => {
  return (
    <Typography variant="body1" gutterBottom>
      {text}
    </Typography>
  );
};

export default Subtitle;
