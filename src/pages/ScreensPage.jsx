import React from 'react';
import { useParams } from 'react-router-dom';

const ScreensPage = () => {
  const { boardName } = useParams();
  console.log(boardName);
  return (
    <div style={{ backgroundColor: '#d7bfd9' }}>
      <div>ScreensPage</div>
      <p>Board Name = {boardName}</p>
    </div>
  );
};

export default ScreensPage;
