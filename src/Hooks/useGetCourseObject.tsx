import { dbService } from 'fbase';
import { useEffect, useState } from 'react';

// eslint-disable-next-line
const useGetCourseObject = (email:string, userId:string, hoy:string): any => {
  // eslint-disable-next-line
  const [init, setInit] = useState(false);
  const [courseObj, setCourseObj] = useState({});

  useEffect(() => {
    dbService
      .collection('courses')
      .doc(`${email}`)
      .collection(`${userId}`)
      .doc(`${hoy}`)
      .onSnapshot((snapshot) => {
        const courseObject = { ...snapshot.data() };
        setCourseObj(courseObject);
      });

    //   .onSnapshot((snapshot) => {
    //     const courseArray = snapshot.docs.map((doc) => ({
    //       ...doc.data(),
    //     }));
    //     console.log('?????', courseArray);

    //     setCourseObj(courseArray);
    //   });

    //   .doc(`${hoy}`)
    //   .get()
    //   .then((data) => {
    //     const a = data.data();
    //     console.log('???', a);
    //   });

    return () => {
      setInit(false);
      //   setCourseObj({});
    };
  }, []);
  return courseObj;
};

export default useGetCourseObject;
