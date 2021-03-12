import { useEffect, useState } from 'react';

const useToggleCommunity = (name: string): boolean => {
  const [isFaq, setIsFaq] = useState(false);

  useEffect(() => {
    if (name === 'notice') {
      setIsFaq((prev) => !prev);
    }
  });

  return isFaq;
};

export default useToggleCommunity;
