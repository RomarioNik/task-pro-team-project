import React from 'react';
import { useParams } from 'react-router-dom';

const ScreensPage = () => {
  const { boardName } = useParams();
  console.log(boardName);
  return (
    <div style={{ border: '#fc4e23 solid 2px' }}>
      <div>ScreensPage</div>
      <p>Board Name = {boardName}</p>
    </div>
  );
};

export default ScreensPage;
