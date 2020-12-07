import { useEffect, useState } from 'react';

const auth = (): boolean => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(false);
  });

  return isLoggedIn;
};

export default auth;
