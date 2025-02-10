/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

const TypingText = ({ lines, speed = 100, delayBetweenLines = 1000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentLine = lines[currentLineIndex];

    if (!isDeleting) {
      // Typing forward
      if (currentCharIndex < currentLine.length) {
        const timeout = setTimeout(() => {
          setDisplayText((prevText) => prevText + currentLine[currentCharIndex]);
          setCurrentCharIndex((prevIndex) => prevIndex + 1);
        }, speed);

        return () => clearTimeout(timeout);
      } else {
        // Wait before starting to delete
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenLines);

        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting backward
      if (currentCharIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayText((prevText) => prevText.slice(0, -1));
          setCurrentCharIndex((prevIndex) => prevIndex - 1);
        }, speed / 2); // Faster deletion speed

        return () => clearTimeout(timeout);
      } else {
        // Move to the next line after deletion
        setIsDeleting(false);
        setCurrentLineIndex((prevIndex) => (prevIndex + 1) % lines.length);
      }
    }
  }, [currentCharIndex, currentLineIndex, isDeleting, lines, speed, delayBetweenLines]);

  return (
    <div className="inline-block">
      <span className="text-3xl md:text-4xl lg:text-5xl font-bold">{displayText}</span>
      <span className="ml-1 animate-blink">|</span>
    </div>
  );
};

export default TypingText;