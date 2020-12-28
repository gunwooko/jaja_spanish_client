import { dbService } from 'fbase';
import { useEffect, useState } from 'react';

// eslint-disable-next-line
const useGetProfesObject = (): any[] => {
  // eslint-disable-next-line
  const [profesData, setProfesData] = useState<any[]>([]);

  useEffect(() => {
    dbService.collection('profes').onSnapshot((snapshot) => {
      const profesArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setProfesData(profesArray);
    });
    return () => setProfesData([]);
  }, []);

  return profesData;
};
export default useGetProfesObject;
