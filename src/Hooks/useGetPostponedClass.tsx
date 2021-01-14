import { dbService } from 'fbase';
import { useEffect, useState } from 'react';

// eslint-disable-next-line
const useGetPostponedClass = (email: any, userName: any): any => {
  const [postponedClass, setPostponedClass] = useState({});

  const fetchPostponedClass = async () => {
    const postponedData = await dbService
      .collection(`postponedCourses`)
      .doc(`${email}`)
      .collection(`${userName}`)
      .orderBy('dateApplied', 'desc');
    // eslint-disable-next-line
    const arr: any[] = [];
    postponedData.onSnapshot((snapshot) => {
      snapshot.docs.forEach((doc) => {
        arr.push(doc.data());
      });

      setPostponedClass(arr[0]);
    });
  };

  useEffect(() => {
    fetchPostponedClass();
    return () => setPostponedClass({});
  }, []);

  return { postponedClass };
};
export default useGetPostponedClass;
