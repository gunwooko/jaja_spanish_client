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
  }, [isLoggedIn]);

  // useEffect(() => {
  //   // There is an error note => Warning: Can't perform a React state update on an unmounted component. That's why we have to use cleanupFunction :)
  //   // Ref => https://velog.io/@ohgoodkim/-%EC%97%90%EB%9F%AC%EB%85%B8%ED%8A%B8-Cant-perform-a-React-state-update-on-an-unmounted-component
  //   return () => setIsLoggedIn(false);
  // }, []);

  return isLoggedIn;
};

export default useLoggedInCheck;
