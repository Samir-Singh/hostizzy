import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

const TypewriterText = ({
  text,
  typingSpeed,
  className,
  loopDelay,
  element: Element = "p",
  stopTyping,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [loopCount, setLoopCount] = useState(0);

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;
    let typingInterval;

    const typeText = () => {
      if (stopTyping) {
        clearInterval(typingInterval);
        return;
      }
      typingInterval = setInterval(() => {
        currentText += text[currentIndex];
        setDisplayText(currentText);
        currentIndex++;

        if (currentIndex === text.length) {
          clearInterval(typingInterval);

          setTimeout(() => {
            setDisplayText("");
            currentIndex = 0;
            setLoopCount(loopCount + 1);
          }, loopDelay);
        }
      }, typingSpeed);
    };

    typeText();

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, typingSpeed, loopDelay, loopCount]);

  return <Element className={className}>{displayText}</Element>;
};

export default TypewriterText;
