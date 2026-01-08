
import React from 'react';
import { SketchedPuzzleIcon } from './SketchedPuzzleIcon';

interface Props {
  reversed?: boolean;
}

export const PuzzlePieceDivider: React.FC<Props> = ({ reversed }) => {
  return (
    <div className={`flex items-center justify-center w-full py-8 gap-4 opacity-30 ${reversed ? 'scale-x-[-1]' : ''}`}>
      <div className="h-[2px] flex-1 border-t-2 border-dashed border-electric-blue" />
      <SketchedPuzzleIcon size={32} color="#1E2BFF" />
      <div className="h-[2px] flex-1 border-t-2 border-dashed border-electric-blue" />
    </div>
  );
};
