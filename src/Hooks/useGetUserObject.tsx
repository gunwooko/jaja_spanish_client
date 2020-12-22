import { useEffect, useState } from 'react';
import { authService, dbService } from 'fbase';

// interface UserObject {
//   userName: string;
//   email: string;
//   password: string;
//   createdAt: string;
//   point?: number;
// }

const useGetUserObject = (): typeof authService.currentUser | null | any => {
  // eslint-disable-next-line
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState({});

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        dbService
          .collection('users')
          .doc(`${user.email}`)
          .get()
          .then((userData) => {
            const userObject = { ...userData.data() };
            setUserObj(userObject);
          });
      } else {
        setUserObj({});
      }
      setInit(true);
    });
    // cleanup function
    return () => {
      setInit(false);
    };
  }, []);

  return userObj;
};

export default useGetUserObject;
