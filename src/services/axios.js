import axios from 'axios';
import { setTokens } from 'redux/auth/authSlice';

let store;

export const injectStore = _store => {
  store = _store;
};

const BASE_URL = 'https://askpro-backend.onrender.com';

const HTTP_STATUS_CODES = {
  INTERNAL_SERVER_ERROR: 500,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  CONFLICT: 409,
};

export const apiPublic = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// apiPublic.interceptors.response.use(
//   response => response,
//   async error => {
//     const { status, config } = error.response;
//     switch (status) {
//       case HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR:
//         console.log(
//           'An unexpected issue has occurred. Please try again later.'
//         );
//         break;
//       case HTTP_STATUS_CODES.BAD_REQUEST:
//         console.log(
//           'An issue has been encountered. Kindly inform us about this error!'
//         );
//         break;
//       case HTTP_STATUS_CODES.NOT_FOUND:
//         if (config.url === '/api/auth/signin') {
//           console.log('Invalid email or password provided.');
//         }
//         break;
//       case HTTP_STATUS_CODES.CONFLICT:
//         if (config.url === '/api/auth/signup') {
//           console.log('User with such email already exists.');
//         }
//         break;
//       default:
//         console.log('An error occurred:', error.message);
//     }
//     return Promise.reject(error);
//   }
// );

const addAuthorizationHeader = async config => {
  // const user = localStorage.getItem('persist:auth');
  // const parsedUser = JSON.parse(user);
  // const token = parsedUser.token.slice(1, -1);

  let accessToken = store.getState().auth.accessToken;

  // if (!accessToken) {
  //   accessToken = 'backend forever';
  // }

  if (accessToken) {
    if (config?.headers) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
  }
  // else {
  //   return;
  // }
  // console.log('config.headers => ', config.headers);
  return config;
};

export const apiPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiPrivate.interceptors.request.use(addAuthorizationHeader, error => {
  Promise.reject(error);
  console.log('Promise.reject(error) => ', error);
});

export const apiPrivateFormData = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

apiPrivate.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      try {
        const refreshToken = store.getState().auth.token;
        console.log('refreshToken => ', refreshToken);
        const { data } = await apiPublic.post('/api/auth/refresh', {
          refreshToken,
        });
        store.dispatch(setTokens(data));
        console.log('error.response => ', error.response);
        // console.log('error.config => ', error);
        return apiPrivate(error.response.config);
      } catch (error) {
        // console.log('Promise.reject(error) => ', error);
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

// export const getCurrent = async () => {
//   try {
//     console.log('getCurrent');
//     const { data } = await apiPrivate.get('/api/auth/current');
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

apiPrivateFormData.interceptors.request.use(addAuthorizationHeader, error =>
  Promise.reject(error)
);

apiPrivateFormData.interceptors.response.use(
  response => {
    if (response.data.status === HTTP_STATUS_CODES.OK) {
      console.log('User data were successfully updated');
    }
    return response;
  },
  async error => {
    if (error.response.status === 401) {
      try {
        const refreshToken = store.getState().auth.token;
        const { data } = await apiPublic.post('/api/auth/refresh', {
          refreshToken,
        });
        store.dispatch(setTokens(data));
        console.log('error.response => ', error.response);
        return apiPrivateFormData(error.response.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    if (error.response.status === HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR) {
      console.log('Something has happened. Please try again later.');
    }
    if (error.response.status === HTTP_STATUS_CODES.UNAUTHORIZED) {
      window.location.href = '/project-task-pro/auth/login';
    }
    if (error.response.status === HTTP_STATUS_CODES.BAD_REQUEST) {
      console.log('Something has happened. Please report us an error!');
    }
    if (error.response.status === HTTP_STATUS_CODES.CONFLICT) {
      console.log('User with such email already exists.');
    }
    return Promise.reject(error);
  }
);
