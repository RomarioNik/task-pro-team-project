import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import WelcomePage from 'pages/WelcomePage';
import AuthPage from 'pages/AuthPage';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import HomePage from 'pages/HomePage';
import NotFound from './NotFound';

import { useDispatch} from 'react-redux';

import { useEffect, useState } from 'react';
import { refreshUser } from 'redux/auth/operations';

import { PrivateRoute, RestrictedRoute } from './Routes/Routes';
import ScreensPage from 'pages/ScreensPage/ScreensPage';
import { useIsUserRefresh } from 'hooks/useIsUserRefreshing';
import Modal from './Modal/Modal';

const App = () => {
  const isRefreshing = useIsUserRefresh();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

     const [openModal, setOpenModal] = useState(false)

    return (
        <>
            <p onClick={() => setOpenModal(true)}>Open</p>
            {openModal && <Modal title={"Filter"} children={<p>content of you modal window</p>} openModal={setOpenModal} />}
        </>)
};

export default App;
