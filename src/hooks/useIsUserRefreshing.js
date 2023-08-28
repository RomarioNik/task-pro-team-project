import { useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/selectors';

export const useIsUserRefresh = () => useSelector(selectIsRefreshing);