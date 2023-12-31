import { useUserData } from 'hooks/useUserData';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeTheme } from 'redux/auth/operations';

const ThemeChanger = () => {
  const { userTheme } = useUserData();
  console.log(userTheme);

  const dispatch = useDispatch();

  const switchTheme = e => {
    const newTheme = { userTheme: e.target.value };
    dispatch(changeTheme(newTheme));
  };

  return (
    <div>
      <select value={userTheme} onChange={switchTheme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="violet">Violet</option>
      </select>
    </div>
  );
};

export default ThemeChanger;
