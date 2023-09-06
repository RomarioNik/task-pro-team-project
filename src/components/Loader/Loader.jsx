import React, { useState } from 'react';
import { useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';
import css from './Loader.module.css';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(100);
  }, []);

  return (
    <div>
      <LoadingBar
        color="#7d81ff"
        height={3}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    </div>
  );
};

export default Loader;
