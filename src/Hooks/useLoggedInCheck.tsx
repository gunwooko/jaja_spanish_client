import { useEffect, useState } from 'react';
import { authService } from 'fbase';

const useLoggedInCheck = (): typeof authService.currentUser | null | boolean => {
  // const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      // setInit(true);
    });
  }, []);

  return isLoggedIn;
};

export default useLoggedInCheck;
