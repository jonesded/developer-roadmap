import Cookies from 'js-cookie';
import { T as TOKEN_COOKIE_NAME, a as decodeToken } from './BaseLayout_C3JOBLhD.mjs';

function useAuth() {
  const token = Cookies.get(TOKEN_COOKIE_NAME);
  if (!token) {
    return null;
  }
  return decodeToken(token);
}

export { useAuth as u };
