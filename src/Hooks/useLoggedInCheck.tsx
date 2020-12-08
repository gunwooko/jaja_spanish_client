import { useEffect, useState } from 'react';
import { authService } from 'fbase';

// interface User {
//   isLoggedIn: boolean | null;
// }

const useLoggedInCheck = (): typeof authService.currentUser | null | boolean => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  });

  return isLoggedIn;
};

export default useLoggedInCheck;
