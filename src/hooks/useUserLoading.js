import { useSelector } from 'react-redux';
import { selectIsUserLoading } from 'redux/auth/selectors';

export const useUserLoading = () => useSelector(selectIsUserLoading);