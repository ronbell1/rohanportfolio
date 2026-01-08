import React from 'react';

interface Props {
  size?: number;
  color?: string;
  opacity?: number;
}

export const SketchedPuzzleIcon: React.FC<Props> = ({ size = 48, color = 'currentColor', opacity = 1 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      {/* Sketched outline - more irregular, "scribbled" path */}
      <path 
        d="M38.5 14.2C38.2 9.5 42.5 5.5 47.5 5.1C52.5 4.6 57.1 8.2 57.8 13.2H82.5C87.6 13.5 90.9 16.5 90.9 21.6V41.2C95.5 41.5 98.2 45.3 98.2 50C98.2 54.7 94.5 58.5 89.9 58.8V81.4C89.9 86.5 86.6 89.8 81.5 89.8H59.8C59.5 94.4 55.7 98.1 51 98.1C46.3 98.1 42.5 94.4 42.2 89.8H21.5C16.4 89.8 12.1 85.5 12.1 80.4V59.8C7.5 59.1 4.2 55.4 4.2 50.8C4.2 46.2 7.5 42.5 12.1 41.8V21.6C12.1 16.5 16.4 13.2 21.5 13.2H38.5Z" 
        stroke={color} 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
      {/* Scribble detail lines */}
      <path 
        d="M15 25C18 22 22 24 25 21" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        opacity="0.4" 
      />
      <path 
        d="M80 75C75 78 72 82 68 85" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        opacity="0.4" 
      />
    </svg>
  );
};
