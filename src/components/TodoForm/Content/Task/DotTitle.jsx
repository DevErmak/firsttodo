import { useState } from 'react';
import { BiHide } from 'react-icons/bi';

export default function DotTitle({ isBigText, isActiveFullText, setIsActiveFullText }) {
  const handleToggleIsActiveFullText = () => {
    setIsActiveFullText(!isActiveFullText);
  };
  if (isBigText) {
    if (isActiveFullText) {
      return (
        <div className="open_fulltext" onClick={handleToggleIsActiveFullText}>
          ...
        </div>
      );
    } else {
      return (
        <div className="hide_fulltext" onClick={handleToggleIsActiveFullText}>
          <BiHide color="black" />
        </div>
      );
    }
  }
}
